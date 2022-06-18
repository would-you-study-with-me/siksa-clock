import requests
from requests_toolbelt import MultipartEncoder
import uuid
import json
import base64

image_path = 'data/hyeon3.png'

data = {
  'source': 'en',
  'target': 'kr',
  'image': (image_path, open(image_path, 'rb'), 'application/octet-stream', {'Content-Transfer-Encoding': 'binary'})
}
m = MultipartEncoder(data, boundary=uuid.uuid4())

headers = {
  "Content-Type": m.content_type,
  "X-NCP-APIGW-API-KEY-ID": '02d13vspfw',
  "X-NCP-APIGW-API-KEY": 'ChIFMSpIjZWXcJIcVfBqPUoo1nmbj1qwuJcmySPE'
}

url = " https://naveropenapi.apigw.ntruss.com/image-to-image/v1/translate"
res = requests.post(url, headers=headers, data=m.to_string())
print(res.text)

# renderedImage -> 이미지 파일로 출력
resObj = json.loads(res.text)
imageStr = resObj.get("data").get("renderedImage")
imgdata = base64.b64decode(imageStr)

filename = '{}_translated.png'.format(image_path)
with open(filename, 'wb') as f:
    f.write(imgdata)

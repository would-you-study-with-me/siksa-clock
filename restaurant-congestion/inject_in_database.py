import json
import os
import random
import uuid

import pandas as pd
from sqlalchemy import create_engine


class SecretFile(object):
    secret_json_file = os.path.join('./', 'secret.json')

    def __init__(self):
        self.secret = None
        with open(self.secret_json_file, 'r') as secret_json_file:
            self.secret = json.load(secret_json_file)

    def get_secret(self, setting):
        try:
            return self.secret[setting]
        except KeyError:
            print('import errer')


def query(user: str, password: str, host: str, port: int, db_name: str, query: str):
    engine = create_engine(
        "postgresql+psycopg2://{user}:{password}@{host}:{port}/{db_name}".format(
            user=user, password=password, host=host, port=port, db_name=db_name),
        echo=True
    )

    conn = engine.connect()
    result = conn.execute(query)
    return result


def change_restaurants_data():
    data = pd.read_csv('data/restaurant_data.csv')

    with open('data.sql', 'w', encoding='utf8') as f:
        for i in data.index:
            value = data.loc[i, :]

            query = """
            INSERT INTO restaurant (restaurant_id, restaurant_name, restaurant_rate, restaurant_count_seats, restaurant_x, restaurant_y, restaurant_address)
            VALUES ('{restaurant_id}', '{restaurant_name}', '{restaurant_rate}', '{restaurant_count_seats}','{restaurant_x}', '{restaurant_y}', '{restaurant_address}');
            """.format(
                restaurant_id=uuid.uuid4(),
                restaurant_name=str(value['사업장명']).replace("'", ""),
                restaurant_rate=random.randrange(0, 5),
                restaurant_count_seats=round(int(value['식사가능인원'])),
                restaurant_x=float(value['좌표정보(x)']),
                restaurant_y=float(value['좌표정보(y)']),
                restaurant_address=str(value['도로명전체주소']).replace("'", "")
            )

            f.write('{}\n'.format(query))


if __name__ == '__main__':
    change_restaurants_data()



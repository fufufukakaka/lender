from flask import Flask, jsonify, request
import sys,os
import json
from tinydb import TinyDB, Query
from pathlib import Path
import hashlib

app = Flask(__name__, static_folder='')

#実装する機能
##ユーザ登録と認証
##答えがあるcsvを読み取る機能→場所は用意した→
##ファイルアップロードを受ける機能
##受けたcsvを使って答え合わせをしてmetricsを返す機能
##メモを受ける機能
##データの説明を受ける機能→できた

data_path = Path(os.environ["lender_data_dir"])
competition_db = TinyDB(data_path / 'tinydb' / 'competition_db.json')
user_db = TinyDB(data_path / 'tinydb' / 'user_db.json')
submission_db = TinyDB(data_path / 'tinydb' / 'submission_db.json')

@app.route('/lender/get_test', methods=['GET'])
def get_test():
    return os.environ["lender_data_dir"]

@app.route('/api/v1/save_explanation', methods=['POST'])
def save_explanation():
    explanation = request.json
    query = Query()
    competition_db.upsert({'competition': 'ppm_realtime_coupon', 'explanation':explanation['explanation']}, query.competition == 'ppm_realtime_coupon')
    return jsonify(explanation)

@app.route('/api/v1/register_login_user', methods=['POST'])
def register_login_user():
    user_info = request.json
    print(user_info)
    ##クエリで見つからなかったらinsert
    query = Query()

    res = user_db.search(query.username == user_info['username'])
    m = hashlib.sha512()
    m.update(user_info['password'].encode('utf-8'))
    if res == []:##引っかからなければinsert
        user_db.insert({'username': user_info['username'], 'password':m.hexdigest()})
        res = {"res":"sign up"}
    else:
        ##引っかかったならばpasswordのチェックをする
        db_password = res[0]['password']
        input_password = m.hexdigest()
        if db_password == input_password:
            res = {"res":"login success"}
        else:
            res = {"res":"login failed"}
    return jsonify(res)

@app.route('/api/v1/receive_submission', methods=['POST'])
def receive_submission():
    submission = request.json
    #そのユーザについてのsubmissionを更新する
    ##そのユーザのsubmissionの数を数えて、その数に+1をする
    db.insert({'user': submission['user'], 'submission_data':data_path / 'submission' / submission['user']+1})
    return jsonify(explanation)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')

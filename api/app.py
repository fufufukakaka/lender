from flask import Flask, jsonify, request
import sys,os
import json
from tinydb import TinyDB, Query
from pathlib import Path

app = Flask(__name__, static_folder='')

#実装する機能
##答えがあるcsvを読み取る機能→場所は用意した→
##ファイルアップロードを受ける機能
##受けたcsvを使って答え合わせをしてmetricsを返す機能
##メモを受ける機能
##データの説明を受ける機能→できた

data_path = Path(os.environ["lender_data_dir"])
db = TinyDB(data_path / 'tinydb' / 'db.json')

@app.route('/lender/get_test', methods=['GET'])
def get_test():
    return os.environ["lender_data_dir"]

@app.route('/api/v1/save_explanation', methods=['POST'])
def save_explanation():
    explanation = request.json
    query = Query()
    db.upsert({'competition': 'ppm_realtime_coupon', 'explanation':explanation['explanation']}, query.competition == 'ppm_realtime_coupon')
    return jsonify(explanation)

@app.route('/api/v1/receive_submission', methods=['POST'])
def receive_submission():
    submission = request.json
    query = Query()
    db.upsert({'competition': 'ppm_realtime_coupon', 'explanation':explanation['explanation']}, query.competition == 'ppm_realtime_coupon')
    return jsonify(explanation)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')

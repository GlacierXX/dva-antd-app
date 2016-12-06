'use strict';
const qs = require('qs');

module.exports = {
  'GET /api/stories' (req, res) {
    setTimeout(function () {
      res.json({
        success: true,
        data: [
          {
            "id": 1001,
            "name": "用户故事用户故事用户故事用户故事用户故事用户故事",
            "status": 1
          },
          {
            "id": 1002,
            "name": "用户故事用户故事用户故事用户故事用户故事用户故事用户故事用户故事",
            "status": 1
          },
          {
            "id": 1003,
            "name": "用户故事",
            "status": 1
          },
          {
            "id": 1004,
            "name": "用户故事用户故事用户故事用户故事用户故事",
            "status": 1
          },
          {
            "id": 1005,
            "name": "用户故事用户故事用户故事用户故事",
            "status": 0
          },
          {
            "id": 1006,
            "name": "用户故事用户故事用户故事",
            "status": 0
          },
          {
            "id": 1007,
            "name": "用户故事用户故事用户故事用户故事用户故事用户故事",
            "status": 0
          },
          {
            "id": 1008,
            "name": "用户故事用户故事用户故事",
            "status": 1
          },
          {
            "id": 1009,
            "name": "用户故事用户故事用户故事",
            "status": 1
          },
          {
            "id": 1010,
            "name": "用户故事用户故事用户故事用户故事",
            "status": 0
          },
          {
            "id": 1011,
            "name": "用户故事用户故事用户故事用户故事用户故事用户故事用户故事用户故事",
            "status": 1
          },
          {
            "id": 1012,
            "name": "用户故事用户故事用户故事用户故事",
            "status": 0
          },
          {
            "id": 1013,
            "name": "用户故事用户故事用户故事用户故事用户故事用户故事用户故事用户故事用户故事用户故事",
            "status": 1
          }
        ]
      });
    }, 500);
  },
  'POST /api/stories' (req, res) {
    const _new = qs.parse(req.body).payload;
    res.json({
      success: true,
      data: {
        "id": 1014,
        "name": _new.name,
        "time": _new.time,
        "charge": _new.charge,
        "status": 0
      }
    });
  },
  'GET /api/stories/:id' (req, res) {
    setTimeout(function () {
      res.json({
        success: true,
        data: {
          'id': req.params.id,
          'name': '详情编辑',
          'time': '2016-10-10',
          'charge': ['01', '03'],
          'status': 0,
          'rte': '<p>故事描述</p>'
        }
      });
    }, 500);
  },
  'DELETE /api/stories/:id' (req, res) {
    setTimeout(function () {
      res.json({
        success: true,
        data: {
        }
      });
    }, 500);
  }
};

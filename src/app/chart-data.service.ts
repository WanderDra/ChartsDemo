import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  fruits = [
    { fruit: 'Apples', count: 10 },
    { fruit: 'Oranges', count: 12 },
    { fruit: 'Lemons', count: 15 },
    { fruit: 'Pears', count: 20 },
    { fruit: 'Pineapples', count: 3 }
  ];

  gdp = [
    {
      "name": "Germany",
      "series": [
        {
          "value": 4018,
          "name": "2016-09-23T14:24:17.665Z"
        },
        {
          "value": 4039,
          "name": "2016-09-22T06:59:34.521Z"
        },
        {
          "value": 3586,
          "name": "2016-09-22T22:47:46.593Z"
        },
        {
          "value": 6670,
          "name": "2016-09-18T17:55:08.422Z"
        },
        {
          "value": 2406,
          "name": "2016-09-19T23:01:49.201Z"
        }
      ]
    },
    {
      "name": "Philippines",
      "series": [
        {
          "value": 6830,
          "name": "2016-09-23T14:24:17.665Z"
        },
        {
          "value": 5499,
          "name": "2016-09-22T06:59:34.521Z"
        },
        {
          "value": 6411,
          "name": "2016-09-22T22:47:46.593Z"
        },
        {
          "value": 2421,
          "name": "2016-09-18T17:55:08.422Z"
        },
        {
          "value": 4037,
          "name": "2016-09-19T23:01:49.201Z"
        }
      ]
    },
    {
      "name": "Switzerland",
      "series": [
        {
          "value": 3801,
          "name": "2016-09-23T14:24:17.665Z"
        },
        {
          "value": 5121,
          "name": "2016-09-22T06:59:34.521Z"
        },
        {
          "value": 2220,
          "name": "2016-09-22T22:47:46.593Z"
        },
        {
          "value": 2739,
          "name": "2016-09-18T17:55:08.422Z"
        },
        {
          "value": 2862,
          "name": "2016-09-19T23:01:49.201Z"
        }
      ]
    },
    {
      "name": "Czech Republic",
      "series": [
        {
          "value": 3296,
          "name": "2016-09-23T14:24:17.665Z"
        },
        {
          "value": 6592,
          "name": "2016-09-22T06:59:34.521Z"
        },
        {
          "value": 5613,
          "name": "2016-09-22T22:47:46.593Z"
        },
        {
          "value": 5759,
          "name": "2016-09-18T17:55:08.422Z"
        },
        {
          "value": 5442,
          "name": "2016-09-19T23:01:49.201Z"
        }
      ]
    },
    {
      "name": "Netherlands",
      "series": [
        {
          "value": 6721,
          "name": "2016-09-23T14:24:17.665Z"
        },
        {
          "value": 6656,
          "name": "2016-09-22T06:59:34.521Z"
        },
        {
          "value": 5698,
          "name": "2016-09-22T22:47:46.593Z"
        },
        {
          "value": 4377,
          "name": "2016-09-18T17:55:08.422Z"
        },
        {
          "value": 4810,
          "name": "2016-09-19T23:01:49.201Z"
        }
      ]
    }
  ];


  constructor() { }
  
}

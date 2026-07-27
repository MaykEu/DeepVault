var EXERCISES_DATA = {
  "topics": {
    "vectors": {
      "id": "vectors",
      "name": "Vectors",
      "icon": "\u27a1\ufe0f",
      "description": "Direction, magnitude, and vector operations \u2014 the backbone of all 3D math in games.",
      "levels": [
        {
          "level": 1,
          "title": "Addition & Subtraction",
          "questions": [
            {
              "id": "vec-l1-001",
              "level": 1,
              "params": {
                "p1x": "randint(-30, 30)",
                "p1y": "randint(-30, 30)",
                "p1z": "randint(-30, 30)",
                "p2x": "randint(-30, 30)",
                "p2y": "randint(-30, 30)",
                "p2z": "randint(-30, 30)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ]
            },
            {
              "id": "vec-l1-002",
              "level": 1,
              "params": {
                "p1x": "randint(-30, 30)",
                "p1y": "randint(-30, 30)",
                "p1z": "randint(-30, 30)",
                "p2x": "randint(-30, 30)",
                "p2y": "randint(-30, 30)",
                "p2z": "randint(-30, 30)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ]
            },
            {
              "id": "vec-l1-003",
              "level": 1,
              "params": {
                "p1x": "randint(-30, 30)",
                "p1y": "randint(-30, 30)",
                "p1z": "randint(-30, 30)",
                "p2x": "randint(-30, 30)",
                "p2y": "randint(-30, 30)",
                "p2z": "randint(-30, 30)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ]
            },
            {
              "id": "vec-l1-004",
              "level": 1,
              "params": {
                "p1x": "randint(-30, 30)",
                "p1y": "randint(-30, 30)",
                "p1z": "randint(-30, 30)",
                "p2x": "randint(-30, 30)",
                "p2y": "randint(-30, 30)",
                "p2z": "randint(-30, 30)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ]
            },
            {
              "id": "vec-l1-005",
              "level": 1,
              "params": {
                "p1x": "randint(-30, 30)",
                "p1y": "randint(-30, 30)",
                "p1z": "randint(-30, 30)",
                "p2x": "randint(-30, 30)",
                "p2y": "randint(-30, 30)",
                "p2z": "randint(-30, 30)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ]
            },
            {
              "id": "vec-l1-006",
              "level": 1,
              "params": {
                "p1x": "randint(-30, 30)",
                "p1y": "randint(-30, 30)",
                "p1z": "randint(-30, 30)",
                "p2x": "randint(-30, 30)",
                "p2y": "randint(-30, 30)",
                "p2z": "randint(-30, 30)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ]
            },
            {
              "id": "vec-l1-007",
              "level": 1,
              "params": {
                "p1x": "randint(-30, 30)",
                "p1y": "randint(-30, 30)",
                "p1z": "randint(-30, 30)",
                "p2x": "randint(-30, 30)",
                "p2y": "randint(-30, 30)",
                "p2z": "randint(-30, 30)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ]
            },
            {
              "id": "vec-l1-008",
              "level": 1,
              "params": {
                "p1x": "randint(-30, 30)",
                "p1y": "randint(-30, 30)",
                "p1z": "randint(-30, 30)",
                "p2x": "randint(-30, 30)",
                "p2y": "randint(-30, 30)",
                "p2z": "randint(-30, 30)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ]
            },
            {
              "id": "vec-l1-009",
              "level": 1,
              "params": {
                "start_x": "randint(-20, 20)",
                "start_y": "randint(-20, 20)",
                "start_z": "randint(-20, 20)",
                "dx": "randint(-15, 15)",
                "dy": "randint(-15, 15)",
                "dz": "randint(-15, 15)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ]
            },
            {
              "id": "vec-l1-010",
              "level": 1,
              "params": {
                "start_x": "randint(-20, 20)",
                "start_y": "randint(-20, 20)",
                "start_z": "randint(-20, 20)",
                "dx": "randint(-15, 15)",
                "dy": "randint(-15, 15)",
                "dz": "randint(-15, 15)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ]
            },
            {
              "id": "vec-l1-011",
              "level": 1,
              "params": {
                "start_x": "randint(-20, 20)",
                "start_y": "randint(-20, 20)",
                "start_z": "randint(-20, 20)",
                "dx": "randint(-15, 15)",
                "dy": "randint(-15, 15)",
                "dz": "randint(-15, 15)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ]
            },
            {
              "id": "vec-l1-012",
              "level": 1,
              "params": {
                "start_x": "randint(-20, 20)",
                "start_y": "randint(-20, 20)",
                "start_z": "randint(-20, 20)",
                "dx": "randint(-15, 15)",
                "dy": "randint(-15, 15)",
                "dz": "randint(-15, 15)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ]
            },
            {
              "id": "vec-l1-013",
              "level": 1,
              "params": {
                "start_x": "randint(-20, 20)",
                "start_y": "randint(-20, 20)",
                "start_z": "randint(-20, 20)",
                "dx": "randint(-15, 15)",
                "dy": "randint(-15, 15)",
                "dz": "randint(-15, 15)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ]
            },
            {
              "id": "vec-l1-014",
              "level": 1,
              "params": {
                "start_x": "randint(-20, 20)",
                "start_y": "randint(-20, 20)",
                "start_z": "randint(-20, 20)",
                "dx": "randint(-15, 15)",
                "dy": "randint(-15, 15)",
                "dz": "randint(-15, 15)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ]
            },
            {
              "id": "vec-l1-015",
              "level": 1,
              "params": {
                "start_x": "randint(-20, 20)",
                "start_y": "randint(-20, 20)",
                "start_z": "randint(-20, 20)",
                "dx": "randint(-15, 15)",
                "dy": "randint(-15, 15)",
                "dz": "randint(-15, 15)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ]
            },
            {
              "id": "vec-l1-016",
              "level": 1,
              "params": {
                "start_x": "randint(-20, 20)",
                "start_y": "randint(-20, 20)",
                "start_z": "randint(-20, 20)",
                "dx": "randint(-15, 15)",
                "dy": "randint(-15, 15)",
                "dz": "randint(-15, 15)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ]
            },
            {
              "id": "vec-l1-017",
              "level": 1,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ]
            },
            {
              "id": "vec-l1-018",
              "level": 1,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ]
            },
            {
              "id": "vec-l1-019",
              "level": 1,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ]
            },
            {
              "id": "vec-l1-020",
              "level": 1,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ]
            },
            {
              "id": "vec-l1-021",
              "level": 1,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ]
            },
            {
              "id": "vec-l1-022",
              "level": 1,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ]
            },
            {
              "id": "vec-l1-023",
              "level": 1,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ]
            },
            {
              "id": "vec-l1-024",
              "level": 1,
              "params": {
                "p1x": "randint(-20, 20)",
                "p1y": "randint(-20, 20)",
                "p1z": "randint(-20, 20)",
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) first moves by ({{v1x}}, {{v1y}}, {{v1z}}), then by ({{v2x}}, {{v2y}}, {{v2z}}). What is their final position?",
              "solution": "[p1x + v1x + v2x, p1y + v1y + v2y, p1z + v1z + v2z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add both movement vectors to the starting position.",
                "First stop: ({{p1x}}+{{v1x}}, {{p1y}}+{{v1y}}, {{p1z}}+{{v1z}}). Then add second movement.",
                "Final: ({{p1x}}+{{v1x}}+{{v2x}}, {{p1y}}+{{v1y}}+{{v2y}}, {{p1z}}+{{v1z}}+{{v2z}})."
              ]
            },
            {
              "id": "vec-l1-025",
              "level": 1,
              "params": {
                "p1x": "randint(-20, 20)",
                "p1y": "randint(-20, 20)",
                "p1z": "randint(-20, 20)",
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) first moves by ({{v1x}}, {{v1y}}, {{v1z}}), then by ({{v2x}}, {{v2y}}, {{v2z}}). What is their final position?",
              "solution": "[p1x + v1x + v2x, p1y + v1y + v2y, p1z + v1z + v2z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add both movement vectors to the starting position.",
                "First stop: ({{p1x}}+{{v1x}}, {{p1y}}+{{v1y}}, {{p1z}}+{{v1z}}). Then add second movement.",
                "Final: ({{p1x}}+{{v1x}}+{{v2x}}, {{p1y}}+{{v1y}}+{{v2y}}, {{p1z}}+{{v1z}}+{{v2z}})."
              ]
            },
            {
              "id": "vec-l1-026",
              "level": 1,
              "params": {
                "p1x": "randint(-20, 20)",
                "p1y": "randint(-20, 20)",
                "p1z": "randint(-20, 20)",
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) first moves by ({{v1x}}, {{v1y}}, {{v1z}}), then by ({{v2x}}, {{v2y}}, {{v2z}}). What is their final position?",
              "solution": "[p1x + v1x + v2x, p1y + v1y + v2y, p1z + v1z + v2z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add both movement vectors to the starting position.",
                "First stop: ({{p1x}}+{{v1x}}, {{p1y}}+{{v1y}}, {{p1z}}+{{v1z}}). Then add second movement.",
                "Final: ({{p1x}}+{{v1x}}+{{v2x}}, {{p1y}}+{{v1y}}+{{v2y}}, {{p1z}}+{{v1z}}+{{v2z}})."
              ]
            },
            {
              "id": "vec-l1-027",
              "level": 1,
              "params": {
                "p1x": "randint(-20, 20)",
                "p1y": "randint(-20, 20)",
                "p1z": "randint(-20, 20)",
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) first moves by ({{v1x}}, {{v1y}}, {{v1z}}), then by ({{v2x}}, {{v2y}}, {{v2z}}). What is their final position?",
              "solution": "[p1x + v1x + v2x, p1y + v1y + v2y, p1z + v1z + v2z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add both movement vectors to the starting position.",
                "First stop: ({{p1x}}+{{v1x}}, {{p1y}}+{{v1y}}, {{p1z}}+{{v1z}}). Then add second movement.",
                "Final: ({{p1x}}+{{v1x}}+{{v2x}}, {{p1y}}+{{v1y}}+{{v2y}}, {{p1z}}+{{v1z}}+{{v2z}})."
              ]
            },
            {
              "id": "vec-l1-028",
              "level": 1,
              "params": {
                "p1x": "randint(-20, 20)",
                "p1y": "randint(-20, 20)",
                "p1z": "randint(-20, 20)",
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) first moves by ({{v1x}}, {{v1y}}, {{v1z}}), then by ({{v2x}}, {{v2y}}, {{v2z}}). What is their final position?",
              "solution": "[p1x + v1x + v2x, p1y + v1y + v2y, p1z + v1z + v2z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add both movement vectors to the starting position.",
                "First stop: ({{p1x}}+{{v1x}}, {{p1y}}+{{v1y}}, {{p1z}}+{{v1z}}). Then add second movement.",
                "Final: ({{p1x}}+{{v1x}}+{{v2x}}, {{p1y}}+{{v1y}}+{{v2y}}, {{p1z}}+{{v1z}}+{{v2z}})."
              ]
            },
            {
              "id": "vec-l1-029",
              "level": 1,
              "params": {
                "p1x": "randint(-20, 20)",
                "p1y": "randint(-20, 20)",
                "p1z": "randint(-20, 20)",
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) first moves by ({{v1x}}, {{v1y}}, {{v1z}}), then by ({{v2x}}, {{v2y}}, {{v2z}}). What is their final position?",
              "solution": "[p1x + v1x + v2x, p1y + v1y + v2y, p1z + v1z + v2z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add both movement vectors to the starting position.",
                "First stop: ({{p1x}}+{{v1x}}, {{p1y}}+{{v1y}}, {{p1z}}+{{v1z}}). Then add second movement.",
                "Final: ({{p1x}}+{{v1x}}+{{v2x}}, {{p1y}}+{{v1y}}+{{v2y}}, {{p1z}}+{{v1z}}+{{v2z}})."
              ]
            },
            {
              "id": "vec-l1-030",
              "level": 1,
              "params": {
                "p1x": "randint(-20, 20)",
                "p1y": "randint(-20, 20)",
                "p1z": "randint(-20, 20)",
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) first moves by ({{v1x}}, {{v1y}}, {{v1z}}), then by ({{v2x}}, {{v2y}}, {{v2z}}). What is their final position?",
              "solution": "[p1x + v1x + v2x, p1y + v1y + v2y, p1z + v1z + v2z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add both movement vectors to the starting position.",
                "First stop: ({{p1x}}+{{v1x}}, {{p1y}}+{{v1y}}, {{p1z}}+{{v1z}}). Then add second movement.",
                "Final: ({{p1x}}+{{v1x}}+{{v2x}}, {{p1y}}+{{v1y}}+{{v2y}}, {{p1z}}+{{v1z}}+{{v2z}})."
              ]
            }
          ]
        },
        {
          "level": 2,
          "title": "Magnitude & Distance",
          "questions": [
            {
              "id": "vec-l2-001",
              "level": 2,
              "params": {
                "p1x": "randint(-50, 50)",
                "p1y": "randint(-50, 50)",
                "p1z": "randint(-50, 50)",
                "p2x": "randint(-50, 50)",
                "p2y": "randint(-50, 50)",
                "p2z": "randint(-50, 50)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ]
            },
            {
              "id": "vec-l2-002",
              "level": 2,
              "params": {
                "p1x": "randint(-50, 50)",
                "p1y": "randint(-50, 50)",
                "p1z": "randint(-50, 50)",
                "p2x": "randint(-50, 50)",
                "p2y": "randint(-50, 50)",
                "p2z": "randint(-50, 50)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ]
            },
            {
              "id": "vec-l2-003",
              "level": 2,
              "params": {
                "p1x": "randint(-50, 50)",
                "p1y": "randint(-50, 50)",
                "p1z": "randint(-50, 50)",
                "p2x": "randint(-50, 50)",
                "p2y": "randint(-50, 50)",
                "p2z": "randint(-50, 50)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ]
            },
            {
              "id": "vec-l2-004",
              "level": 2,
              "params": {
                "p1x": "randint(-50, 50)",
                "p1y": "randint(-50, 50)",
                "p1z": "randint(-50, 50)",
                "p2x": "randint(-50, 50)",
                "p2y": "randint(-50, 50)",
                "p2z": "randint(-50, 50)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ]
            },
            {
              "id": "vec-l2-005",
              "level": 2,
              "params": {
                "p1x": "randint(-50, 50)",
                "p1y": "randint(-50, 50)",
                "p1z": "randint(-50, 50)",
                "p2x": "randint(-50, 50)",
                "p2y": "randint(-50, 50)",
                "p2z": "randint(-50, 50)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ]
            },
            {
              "id": "vec-l2-006",
              "level": 2,
              "params": {
                "p1x": "randint(-50, 50)",
                "p1y": "randint(-50, 50)",
                "p1z": "randint(-50, 50)",
                "p2x": "randint(-50, 50)",
                "p2y": "randint(-50, 50)",
                "p2z": "randint(-50, 50)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ]
            },
            {
              "id": "vec-l2-007",
              "level": 2,
              "params": {
                "p1x": "randint(-50, 50)",
                "p1y": "randint(-50, 50)",
                "p1z": "randint(-50, 50)",
                "p2x": "randint(-50, 50)",
                "p2y": "randint(-50, 50)",
                "p2z": "randint(-50, 50)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ]
            },
            {
              "id": "vec-l2-008",
              "level": 2,
              "params": {
                "p1x": "randint(-50, 50)",
                "p1y": "randint(-50, 50)",
                "p1z": "randint(-50, 50)",
                "p2x": "randint(-50, 50)",
                "p2y": "randint(-50, 50)",
                "p2z": "randint(-50, 50)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ]
            },
            {
              "id": "vec-l2-009",
              "level": 2,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "ex": "randint(-30, 30)",
                "ey": "randint(-30, 30)",
                "ez": "randint(-30, 30)",
                "reach": "randint(5, 30, 5)"
              },
              "scenario": "A melee weapon has a reach of {{reach}} meters. The player is at ({{px}}, {{py}}, {{pz}}) and an enemy is at ({{ex}}, {{ey}}, {{ez}}). Is the enemy within melee range? (Answer 'yes' or 'no')",
              "solution": "sqrt((ex - px)**2 + (ey - py)**2 + (ez - pz)**2) <= reach ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance between the two positions.",
                "Compare the distance to the reach of {{reach}} meters.",
                "If distance <= {{reach}}, the enemy is in range."
              ]
            },
            {
              "id": "vec-l2-010",
              "level": 2,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "ex": "randint(-30, 30)",
                "ey": "randint(-30, 30)",
                "ez": "randint(-30, 30)",
                "reach": "randint(5, 30, 5)"
              },
              "scenario": "A melee weapon has a reach of {{reach}} meters. The player is at ({{px}}, {{py}}, {{pz}}) and an enemy is at ({{ex}}, {{ey}}, {{ez}}). Is the enemy within melee range? (Answer 'yes' or 'no')",
              "solution": "sqrt((ex - px)**2 + (ey - py)**2 + (ez - pz)**2) <= reach ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance between the two positions.",
                "Compare the distance to the reach of {{reach}} meters.",
                "If distance <= {{reach}}, the enemy is in range."
              ]
            },
            {
              "id": "vec-l2-011",
              "level": 2,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "ex": "randint(-30, 30)",
                "ey": "randint(-30, 30)",
                "ez": "randint(-30, 30)",
                "reach": "randint(5, 30, 5)"
              },
              "scenario": "A melee weapon has a reach of {{reach}} meters. The player is at ({{px}}, {{py}}, {{pz}}) and an enemy is at ({{ex}}, {{ey}}, {{ez}}). Is the enemy within melee range? (Answer 'yes' or 'no')",
              "solution": "sqrt((ex - px)**2 + (ey - py)**2 + (ez - pz)**2) <= reach ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance between the two positions.",
                "Compare the distance to the reach of {{reach}} meters.",
                "If distance <= {{reach}}, the enemy is in range."
              ]
            },
            {
              "id": "vec-l2-012",
              "level": 2,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "ex": "randint(-30, 30)",
                "ey": "randint(-30, 30)",
                "ez": "randint(-30, 30)",
                "reach": "randint(5, 30, 5)"
              },
              "scenario": "A melee weapon has a reach of {{reach}} meters. The player is at ({{px}}, {{py}}, {{pz}}) and an enemy is at ({{ex}}, {{ey}}, {{ez}}). Is the enemy within melee range? (Answer 'yes' or 'no')",
              "solution": "sqrt((ex - px)**2 + (ey - py)**2 + (ez - pz)**2) <= reach ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance between the two positions.",
                "Compare the distance to the reach of {{reach}} meters.",
                "If distance <= {{reach}}, the enemy is in range."
              ]
            },
            {
              "id": "vec-l2-013",
              "level": 2,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "ex": "randint(-30, 30)",
                "ey": "randint(-30, 30)",
                "ez": "randint(-30, 30)",
                "reach": "randint(5, 30, 5)"
              },
              "scenario": "A melee weapon has a reach of {{reach}} meters. The player is at ({{px}}, {{py}}, {{pz}}) and an enemy is at ({{ex}}, {{ey}}, {{ez}}). Is the enemy within melee range? (Answer 'yes' or 'no')",
              "solution": "sqrt((ex - px)**2 + (ey - py)**2 + (ez - pz)**2) <= reach ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance between the two positions.",
                "Compare the distance to the reach of {{reach}} meters.",
                "If distance <= {{reach}}, the enemy is in range."
              ]
            },
            {
              "id": "vec-l2-014",
              "level": 2,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "ex": "randint(-30, 30)",
                "ey": "randint(-30, 30)",
                "ez": "randint(-30, 30)",
                "reach": "randint(5, 30, 5)"
              },
              "scenario": "A melee weapon has a reach of {{reach}} meters. The player is at ({{px}}, {{py}}, {{pz}}) and an enemy is at ({{ex}}, {{ey}}, {{ez}}). Is the enemy within melee range? (Answer 'yes' or 'no')",
              "solution": "sqrt((ex - px)**2 + (ey - py)**2 + (ez - pz)**2) <= reach ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance between the two positions.",
                "Compare the distance to the reach of {{reach}} meters.",
                "If distance <= {{reach}}, the enemy is in range."
              ]
            },
            {
              "id": "vec-l2-015",
              "level": 2,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "ex": "randint(-30, 30)",
                "ey": "randint(-30, 30)",
                "ez": "randint(-30, 30)",
                "reach": "randint(5, 30, 5)"
              },
              "scenario": "A melee weapon has a reach of {{reach}} meters. The player is at ({{px}}, {{py}}, {{pz}}) and an enemy is at ({{ex}}, {{ey}}, {{ez}}). Is the enemy within melee range? (Answer 'yes' or 'no')",
              "solution": "sqrt((ex - px)**2 + (ey - py)**2 + (ez - pz)**2) <= reach ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance between the two positions.",
                "Compare the distance to the reach of {{reach}} meters.",
                "If distance <= {{reach}}, the enemy is in range."
              ]
            },
            {
              "id": "vec-l2-016",
              "level": 2,
              "params": {
                "px": "randint(-40, 40)",
                "py": "randint(-40, 40)",
                "pz": "randint(-40, 40)",
                "ax": "randint(-40, 40)",
                "ay": "randint(-40, 40)",
                "az": "randint(-40, 40)",
                "bx": "randint(-40, 40)",
                "by": "randint(-40, 40)",
                "bz": "randint(-40, 40)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) can grab one medkit. Medkit A is at ({{ax}}, {{ay}}, {{az}}) and Medkit B is at ({{bx}}, {{by}}, {{bz}}). Which medkit is closer to the player? Answer 'A' or 'B'.",
              "solution": "((ax - px)**2 + (ay - py)**2 + (az - pz)**2) < ((bx - px)**2 + (by - py)**2 + (bz - pz)**2) ? 'A' : 'B'",
              "answerType": "scalar",
              "units": "",
              "hints": [
                "Calculate distance from player to A, then player to B.",
                "You can compare squared distances to avoid the square root.",
                "The smaller distance (or squared distance) is the closer medkit."
              ],
              "_enumValues": "['A','B','a','b']"
            },
            {
              "id": "vec-l2-017",
              "level": 2,
              "params": {
                "px": "randint(-40, 40)",
                "py": "randint(-40, 40)",
                "pz": "randint(-40, 40)",
                "ax": "randint(-40, 40)",
                "ay": "randint(-40, 40)",
                "az": "randint(-40, 40)",
                "bx": "randint(-40, 40)",
                "by": "randint(-40, 40)",
                "bz": "randint(-40, 40)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) can grab one medkit. Medkit A is at ({{ax}}, {{ay}}, {{az}}) and Medkit B is at ({{bx}}, {{by}}, {{bz}}). Which medkit is closer to the player? Answer 'A' or 'B'.",
              "solution": "((ax - px)**2 + (ay - py)**2 + (az - pz)**2) < ((bx - px)**2 + (by - py)**2 + (bz - pz)**2) ? 'A' : 'B'",
              "answerType": "scalar",
              "units": "",
              "hints": [
                "Calculate distance from player to A, then player to B.",
                "You can compare squared distances to avoid the square root.",
                "The smaller distance (or squared distance) is the closer medkit."
              ],
              "_enumValues": "['A','B','a','b']"
            },
            {
              "id": "vec-l2-018",
              "level": 2,
              "params": {
                "px": "randint(-40, 40)",
                "py": "randint(-40, 40)",
                "pz": "randint(-40, 40)",
                "ax": "randint(-40, 40)",
                "ay": "randint(-40, 40)",
                "az": "randint(-40, 40)",
                "bx": "randint(-40, 40)",
                "by": "randint(-40, 40)",
                "bz": "randint(-40, 40)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) can grab one medkit. Medkit A is at ({{ax}}, {{ay}}, {{az}}) and Medkit B is at ({{bx}}, {{by}}, {{bz}}). Which medkit is closer to the player? Answer 'A' or 'B'.",
              "solution": "((ax - px)**2 + (ay - py)**2 + (az - pz)**2) < ((bx - px)**2 + (by - py)**2 + (bz - pz)**2) ? 'A' : 'B'",
              "answerType": "scalar",
              "units": "",
              "hints": [
                "Calculate distance from player to A, then player to B.",
                "You can compare squared distances to avoid the square root.",
                "The smaller distance (or squared distance) is the closer medkit."
              ],
              "_enumValues": "['A','B','a','b']"
            },
            {
              "id": "vec-l2-019",
              "level": 2,
              "params": {
                "px": "randint(-40, 40)",
                "py": "randint(-40, 40)",
                "pz": "randint(-40, 40)",
                "ax": "randint(-40, 40)",
                "ay": "randint(-40, 40)",
                "az": "randint(-40, 40)",
                "bx": "randint(-40, 40)",
                "by": "randint(-40, 40)",
                "bz": "randint(-40, 40)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) can grab one medkit. Medkit A is at ({{ax}}, {{ay}}, {{az}}) and Medkit B is at ({{bx}}, {{by}}, {{bz}}). Which medkit is closer to the player? Answer 'A' or 'B'.",
              "solution": "((ax - px)**2 + (ay - py)**2 + (az - pz)**2) < ((bx - px)**2 + (by - py)**2 + (bz - pz)**2) ? 'A' : 'B'",
              "answerType": "scalar",
              "units": "",
              "hints": [
                "Calculate distance from player to A, then player to B.",
                "You can compare squared distances to avoid the square root.",
                "The smaller distance (or squared distance) is the closer medkit."
              ],
              "_enumValues": "['A','B','a','b']"
            },
            {
              "id": "vec-l2-020",
              "level": 2,
              "params": {
                "px": "randint(-40, 40)",
                "py": "randint(-40, 40)",
                "pz": "randint(-40, 40)",
                "ax": "randint(-40, 40)",
                "ay": "randint(-40, 40)",
                "az": "randint(-40, 40)",
                "bx": "randint(-40, 40)",
                "by": "randint(-40, 40)",
                "bz": "randint(-40, 40)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) can grab one medkit. Medkit A is at ({{ax}}, {{ay}}, {{az}}) and Medkit B is at ({{bx}}, {{by}}, {{bz}}). Which medkit is closer to the player? Answer 'A' or 'B'.",
              "solution": "((ax - px)**2 + (ay - py)**2 + (az - pz)**2) < ((bx - px)**2 + (by - py)**2 + (bz - pz)**2) ? 'A' : 'B'",
              "answerType": "scalar",
              "units": "",
              "hints": [
                "Calculate distance from player to A, then player to B.",
                "You can compare squared distances to avoid the square root.",
                "The smaller distance (or squared distance) is the closer medkit."
              ],
              "_enumValues": "['A','B','a','b']"
            },
            {
              "id": "vec-l2-021",
              "level": 2,
              "params": {
                "gx": "randint(-30, 30)",
                "gy": "randint(-30, 30)",
                "gz": "randint(-30, 30)",
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "radius": "randint(6, 20)"
              },
              "scenario": "A grenade detonates at ({{gx}}, {{gy}}, {{gz}}) with a blast radius of {{radius}} meters. The player is at ({{px}}, {{py}}, {{pz}}). Is the player caught in the blast? (Answer 'yes' or 'no')",
              "solution": "sqrt((px - gx)**2 + (py - gy)**2 + (pz - gz)**2) <= radius ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance from the grenade to the player.",
                "If distance <= {{radius}}, the player is in the blast radius.",
                "Compute sqrt((player.x - grenade.x)^2 + ...) and compare to {{radius}}."
              ]
            },
            {
              "id": "vec-l2-022",
              "level": 2,
              "params": {
                "gx": "randint(-30, 30)",
                "gy": "randint(-30, 30)",
                "gz": "randint(-30, 30)",
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "radius": "randint(6, 20)"
              },
              "scenario": "A grenade detonates at ({{gx}}, {{gy}}, {{gz}}) with a blast radius of {{radius}} meters. The player is at ({{px}}, {{py}}, {{pz}}). Is the player caught in the blast? (Answer 'yes' or 'no')",
              "solution": "sqrt((px - gx)**2 + (py - gy)**2 + (pz - gz)**2) <= radius ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance from the grenade to the player.",
                "If distance <= {{radius}}, the player is in the blast radius.",
                "Compute sqrt((player.x - grenade.x)^2 + ...) and compare to {{radius}}."
              ]
            },
            {
              "id": "vec-l2-023",
              "level": 2,
              "params": {
                "gx": "randint(-30, 30)",
                "gy": "randint(-30, 30)",
                "gz": "randint(-30, 30)",
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "radius": "randint(6, 20)"
              },
              "scenario": "A grenade detonates at ({{gx}}, {{gy}}, {{gz}}) with a blast radius of {{radius}} meters. The player is at ({{px}}, {{py}}, {{pz}}). Is the player caught in the blast? (Answer 'yes' or 'no')",
              "solution": "sqrt((px - gx)**2 + (py - gy)**2 + (pz - gz)**2) <= radius ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance from the grenade to the player.",
                "If distance <= {{radius}}, the player is in the blast radius.",
                "Compute sqrt((player.x - grenade.x)^2 + ...) and compare to {{radius}}."
              ]
            },
            {
              "id": "vec-l2-024",
              "level": 2,
              "params": {
                "gx": "randint(-30, 30)",
                "gy": "randint(-30, 30)",
                "gz": "randint(-30, 30)",
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "radius": "randint(6, 20)"
              },
              "scenario": "A grenade detonates at ({{gx}}, {{gy}}, {{gz}}) with a blast radius of {{radius}} meters. The player is at ({{px}}, {{py}}, {{pz}}). Is the player caught in the blast? (Answer 'yes' or 'no')",
              "solution": "sqrt((px - gx)**2 + (py - gy)**2 + (pz - gz)**2) <= radius ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance from the grenade to the player.",
                "If distance <= {{radius}}, the player is in the blast radius.",
                "Compute sqrt((player.x - grenade.x)^2 + ...) and compare to {{radius}}."
              ]
            },
            {
              "id": "vec-l2-025",
              "level": 2,
              "params": {
                "gx": "randint(-30, 30)",
                "gy": "randint(-30, 30)",
                "gz": "randint(-30, 30)",
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "radius": "randint(6, 20)"
              },
              "scenario": "A grenade detonates at ({{gx}}, {{gy}}, {{gz}}) with a blast radius of {{radius}} meters. The player is at ({{px}}, {{py}}, {{pz}}). Is the player caught in the blast? (Answer 'yes' or 'no')",
              "solution": "sqrt((px - gx)**2 + (py - gy)**2 + (pz - gz)**2) <= radius ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance from the grenade to the player.",
                "If distance <= {{radius}}, the player is in the blast radius.",
                "Compute sqrt((player.x - grenade.x)^2 + ...) and compare to {{radius}}."
              ]
            },
            {
              "id": "vec-l2-026",
              "level": 2,
              "params": {
                "x1": "randint(-20, 20)",
                "y1": "randint(-20, 20)",
                "z1": "randint(-20, 20)",
                "x2": "randint(-20, 20)",
                "y2": "randint(-20, 20)",
                "z2": "randint(-20, 20)",
                "time": "randfloat(1, 10, 1)"
              },
              "scenario": "A character runs from ({{x1}}, {{y1}}, {{z1}}) to ({{x2}}, {{y2}}, {{z2}}) in {{time}} seconds. What is their speed in units per second? Round to 2 decimals.",
              "solution": "sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2) / time",
              "answerType": "scalar_magnitude",
              "units": "units/s",
              "hints": [
                "Speed = distance / time.",
                "First compute the distance between start and end.",
                "Then divide by {{time}} seconds."
              ]
            },
            {
              "id": "vec-l2-027",
              "level": 2,
              "params": {
                "x1": "randint(-20, 20)",
                "y1": "randint(-20, 20)",
                "z1": "randint(-20, 20)",
                "x2": "randint(-20, 20)",
                "y2": "randint(-20, 20)",
                "z2": "randint(-20, 20)",
                "time": "randfloat(1, 10, 1)"
              },
              "scenario": "A character runs from ({{x1}}, {{y1}}, {{z1}}) to ({{x2}}, {{y2}}, {{z2}}) in {{time}} seconds. What is their speed in units per second? Round to 2 decimals.",
              "solution": "sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2) / time",
              "answerType": "scalar_magnitude",
              "units": "units/s",
              "hints": [
                "Speed = distance / time.",
                "First compute the distance between start and end.",
                "Then divide by {{time}} seconds."
              ]
            },
            {
              "id": "vec-l2-028",
              "level": 2,
              "params": {
                "x1": "randint(-20, 20)",
                "y1": "randint(-20, 20)",
                "z1": "randint(-20, 20)",
                "x2": "randint(-20, 20)",
                "y2": "randint(-20, 20)",
                "z2": "randint(-20, 20)",
                "time": "randfloat(1, 10, 1)"
              },
              "scenario": "A character runs from ({{x1}}, {{y1}}, {{z1}}) to ({{x2}}, {{y2}}, {{z2}}) in {{time}} seconds. What is their speed in units per second? Round to 2 decimals.",
              "solution": "sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2) / time",
              "answerType": "scalar_magnitude",
              "units": "units/s",
              "hints": [
                "Speed = distance / time.",
                "First compute the distance between start and end.",
                "Then divide by {{time}} seconds."
              ]
            },
            {
              "id": "vec-l2-029",
              "level": 2,
              "params": {
                "x1": "randint(-20, 20)",
                "y1": "randint(-20, 20)",
                "z1": "randint(-20, 20)",
                "x2": "randint(-20, 20)",
                "y2": "randint(-20, 20)",
                "z2": "randint(-20, 20)",
                "time": "randfloat(1, 10, 1)"
              },
              "scenario": "A character runs from ({{x1}}, {{y1}}, {{z1}}) to ({{x2}}, {{y2}}, {{z2}}) in {{time}} seconds. What is their speed in units per second? Round to 2 decimals.",
              "solution": "sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2) / time",
              "answerType": "scalar_magnitude",
              "units": "units/s",
              "hints": [
                "Speed = distance / time.",
                "First compute the distance between start and end.",
                "Then divide by {{time}} seconds."
              ]
            },
            {
              "id": "vec-l2-030",
              "level": 2,
              "params": {
                "x1": "randint(-20, 20)",
                "y1": "randint(-20, 20)",
                "z1": "randint(-20, 20)",
                "x2": "randint(-20, 20)",
                "y2": "randint(-20, 20)",
                "z2": "randint(-20, 20)",
                "time": "randfloat(1, 10, 1)"
              },
              "scenario": "A character runs from ({{x1}}, {{y1}}, {{z1}}) to ({{x2}}, {{y2}}, {{z2}}) in {{time}} seconds. What is their speed in units per second? Round to 2 decimals.",
              "solution": "sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2) / time",
              "answerType": "scalar_magnitude",
              "units": "units/s",
              "hints": [
                "Speed = distance / time.",
                "First compute the distance between start and end.",
                "Then divide by {{time}} seconds."
              ]
            }
          ]
        },
        {
          "level": 3,
          "title": "Scaling",
          "questions": [
            {
              "id": "vec-l3-001",
              "level": 3,
              "params": {
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)",
                "speed": "randint(2, 20, 2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at a speed of {{speed}} units per second. What is their velocity vector?",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction * speed.",
                "First normalize the direction vector, then multiply by {{speed}}.",
                "Unit direction: (dx/|d|, dy/|d|, dz/|d|). Velocity: multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-002",
              "level": 3,
              "params": {
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)",
                "speed": "randint(2, 20, 2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at a speed of {{speed}} units per second. What is their velocity vector?",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction * speed.",
                "First normalize the direction vector, then multiply by {{speed}}.",
                "Unit direction: (dx/|d|, dy/|d|, dz/|d|). Velocity: multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-003",
              "level": 3,
              "params": {
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)",
                "speed": "randint(2, 20, 2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at a speed of {{speed}} units per second. What is their velocity vector?",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction * speed.",
                "First normalize the direction vector, then multiply by {{speed}}.",
                "Unit direction: (dx/|d|, dy/|d|, dz/|d|). Velocity: multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-004",
              "level": 3,
              "params": {
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)",
                "speed": "randint(2, 20, 2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at a speed of {{speed}} units per second. What is their velocity vector?",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction * speed.",
                "First normalize the direction vector, then multiply by {{speed}}.",
                "Unit direction: (dx/|d|, dy/|d|, dz/|d|). Velocity: multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-005",
              "level": 3,
              "params": {
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)",
                "speed": "randint(2, 20, 2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at a speed of {{speed}} units per second. What is their velocity vector?",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction * speed.",
                "First normalize the direction vector, then multiply by {{speed}}.",
                "Unit direction: (dx/|d|, dy/|d|, dz/|d|). Velocity: multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-006",
              "level": 3,
              "params": {
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)",
                "speed": "randint(2, 20, 2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at a speed of {{speed}} units per second. What is their velocity vector?",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction * speed.",
                "First normalize the direction vector, then multiply by {{speed}}.",
                "Unit direction: (dx/|d|, dy/|d|, dz/|d|). Velocity: multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-007",
              "level": 3,
              "params": {
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)",
                "speed": "randint(2, 20, 2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at a speed of {{speed}} units per second. What is their velocity vector?",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction * speed.",
                "First normalize the direction vector, then multiply by {{speed}}.",
                "Unit direction: (dx/|d|, dy/|d|, dz/|d|). Velocity: multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-008",
              "level": 3,
              "params": {
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)",
                "speed": "randint(2, 20, 2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at a speed of {{speed}} units per second. What is their velocity vector?",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction * speed.",
                "First normalize the direction vector, then multiply by {{speed}}.",
                "Unit direction: (dx/|d|, dy/|d|, dz/|d|). Velocity: multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-017",
              "level": 3,
              "params": {
                "vx": "randint(-15, 15)",
                "vy": "randint(-15, 15)",
                "vz": "randint(-15, 15)",
                "mult": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies their speed by {{mult}}. What is their new velocity vector?",
              "solution": "[vx * mult, vy * mult, vz * mult]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component of the velocity by the speed multiplier.",
                "New velocity = old velocity * {{mult}}.",
                "Component-wise: ({{vx}}*{{mult}}, {{vy}}*{{mult}}, {{vz}}*{{mult}})."
              ]
            },
            {
              "id": "vec-l3-018",
              "level": 3,
              "params": {
                "vx": "randint(-15, 15)",
                "vy": "randint(-15, 15)",
                "vz": "randint(-15, 15)",
                "mult": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies their speed by {{mult}}. What is their new velocity vector?",
              "solution": "[vx * mult, vy * mult, vz * mult]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component of the velocity by the speed multiplier.",
                "New velocity = old velocity * {{mult}}.",
                "Component-wise: ({{vx}}*{{mult}}, {{vy}}*{{mult}}, {{vz}}*{{mult}})."
              ]
            },
            {
              "id": "vec-l3-019",
              "level": 3,
              "params": {
                "vx": "randint(-15, 15)",
                "vy": "randint(-15, 15)",
                "vz": "randint(-15, 15)",
                "mult": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies their speed by {{mult}}. What is their new velocity vector?",
              "solution": "[vx * mult, vy * mult, vz * mult]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component of the velocity by the speed multiplier.",
                "New velocity = old velocity * {{mult}}.",
                "Component-wise: ({{vx}}*{{mult}}, {{vy}}*{{mult}}, {{vz}}*{{mult}})."
              ]
            },
            {
              "id": "vec-l3-020",
              "level": 3,
              "params": {
                "vx": "randint(-15, 15)",
                "vy": "randint(-15, 15)",
                "vz": "randint(-15, 15)",
                "mult": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies their speed by {{mult}}. What is their new velocity vector?",
              "solution": "[vx * mult, vy * mult, vz * mult]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component of the velocity by the speed multiplier.",
                "New velocity = old velocity * {{mult}}.",
                "Component-wise: ({{vx}}*{{mult}}, {{vy}}*{{mult}}, {{vz}}*{{mult}})."
              ]
            },
            {
              "id": "vec-l3-021",
              "level": 3,
              "params": {
                "vx": "randint(-15, 15)",
                "vy": "randint(-15, 15)",
                "vz": "randint(-15, 15)",
                "mult": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies their speed by {{mult}}. What is their new velocity vector?",
              "solution": "[vx * mult, vy * mult, vz * mult]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component of the velocity by the speed multiplier.",
                "New velocity = old velocity * {{mult}}.",
                "Component-wise: ({{vx}}*{{mult}}, {{vy}}*{{mult}}, {{vz}}*{{mult}})."
              ]
            },
            {
              "id": "vec-l3-022",
              "level": 3,
              "params": {
                "vx": "randint(-15, 15)",
                "vy": "randint(-15, 15)",
                "vz": "randint(-15, 15)",
                "mult": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies their speed by {{mult}}. What is their new velocity vector?",
              "solution": "[vx * mult, vy * mult, vz * mult]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component of the velocity by the speed multiplier.",
                "New velocity = old velocity * {{mult}}.",
                "Component-wise: ({{vx}}*{{mult}}, {{vy}}*{{mult}}, {{vz}}*{{mult}})."
              ]
            },
            {
              "id": "vec-l3-023",
              "level": 3,
              "params": {
                "vx": "randint(-15, 15)",
                "vy": "randint(-15, 15)",
                "vz": "randint(-15, 15)",
                "mult": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies their speed by {{mult}}. What is their new velocity vector?",
              "solution": "[vx * mult, vy * mult, vz * mult]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component of the velocity by the speed multiplier.",
                "New velocity = old velocity * {{mult}}.",
                "Component-wise: ({{vx}}*{{mult}}, {{vy}}*{{mult}}, {{vz}}*{{mult}})."
              ]
            },
            {
              "id": "vec-l3-s01",
              "level": 3,
              "params": {
                "dx": "randint(-8,8)",
                "dy": "randint(-8,8)",
                "dz": "randint(-8,8)",
                "speed": "randint(3,15,2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at {{speed}} units per second. Give their velocity vector. Round to 2 decimals.",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction \u00d7 speed. Normalize first, then multiply by {{speed}}.",
                "Unit direction = (dx/|d|, dy/|d|, dz/|d|). Then multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-s02",
              "level": 3,
              "params": {
                "dx": "randint(-8,8)",
                "dy": "randint(-8,8)",
                "dz": "randint(-8,8)",
                "speed": "randint(3,15,2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at {{speed}} units per second. Give their velocity vector. Round to 2 decimals.",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction \u00d7 speed. Normalize first, then multiply by {{speed}}.",
                "Unit direction = (dx/|d|, dy/|d|, dz/|d|). Then multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-s03",
              "level": 3,
              "params": {
                "dx": "randint(-8,8)",
                "dy": "randint(-8,8)",
                "dz": "randint(-8,8)",
                "speed": "randint(3,15,2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at {{speed}} units per second. Give their velocity vector. Round to 2 decimals.",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction \u00d7 speed. Normalize first, then multiply by {{speed}}.",
                "Unit direction = (dx/|d|, dy/|d|, dz/|d|). Then multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-s04",
              "level": 3,
              "params": {
                "dx": "randint(-8,8)",
                "dy": "randint(-8,8)",
                "dz": "randint(-8,8)",
                "speed": "randint(3,15,2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at {{speed}} units per second. Give their velocity vector. Round to 2 decimals.",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction \u00d7 speed. Normalize first, then multiply by {{speed}}.",
                "Unit direction = (dx/|d|, dy/|d|, dz/|d|). Then multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-s05",
              "level": 3,
              "params": {
                "dx": "randint(-8,8)",
                "dy": "randint(-8,8)",
                "dz": "randint(-8,8)",
                "speed": "randint(3,15,2)"
              },
              "scenario": "A character moves in direction ({{dx}}, {{dy}}, {{dz}}) at {{speed}} units per second. Give their velocity vector. Round to 2 decimals.",
              "solution": "let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag * speed, dy/mag * speed, dz/mag * speed]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Velocity = normalized direction \u00d7 speed. Normalize first, then multiply by {{speed}}.",
                "Unit direction = (dx/|d|, dy/|d|, dz/|d|). Then multiply each by {{speed}}."
              ]
            },
            {
              "id": "vec-l3-s06",
              "level": 3,
              "params": {
                "vx": "randint(-20,20)",
                "vy": "randint(-20,20)",
                "vz": "randint(-20,20)",
                "factor": "randfloat(0.1,0.8,1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies speed by {{factor}}. What is the new velocity? Round to 1 decimal.",
              "solution": "[vx * factor, vy * factor, vz * factor]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each component gets multiplied by the speed factor: {{factor}}.",
                "New velocity = old_velocity \u00d7 {{factor}}, component by component."
              ]
            },
            {
              "id": "vec-l3-s07",
              "level": 3,
              "params": {
                "vx": "randint(-20,20)",
                "vy": "randint(-20,20)",
                "vz": "randint(-20,20)",
                "factor": "randfloat(0.1,0.8,1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies speed by {{factor}}. What is the new velocity? Round to 1 decimal.",
              "solution": "[vx * factor, vy * factor, vz * factor]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each component gets multiplied by the speed factor: {{factor}}.",
                "New velocity = old_velocity \u00d7 {{factor}}, component by component."
              ]
            },
            {
              "id": "vec-l3-s08",
              "level": 3,
              "params": {
                "vx": "randint(-20,20)",
                "vy": "randint(-20,20)",
                "vz": "randint(-20,20)",
                "factor": "randfloat(0.1,0.8,1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies speed by {{factor}}. What is the new velocity? Round to 1 decimal.",
              "solution": "[vx * factor, vy * factor, vz * factor]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each component gets multiplied by the speed factor: {{factor}}.",
                "New velocity = old_velocity \u00d7 {{factor}}, component by component."
              ]
            },
            {
              "id": "vec-l3-s09",
              "level": 3,
              "params": {
                "vx": "randint(-20,20)",
                "vy": "randint(-20,20)",
                "vz": "randint(-20,20)",
                "factor": "randfloat(0.1,0.8,1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies speed by {{factor}}. What is the new velocity? Round to 1 decimal.",
              "solution": "[vx * factor, vy * factor, vz * factor]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each component gets multiplied by the speed factor: {{factor}}.",
                "New velocity = old_velocity \u00d7 {{factor}}, component by component."
              ]
            },
            {
              "id": "vec-l3-s10",
              "level": 3,
              "params": {
                "vx": "randint(-20,20)",
                "vy": "randint(-20,20)",
                "vz": "randint(-20,20)",
                "factor": "randfloat(0.1,0.8,1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies speed by {{factor}}. What is the new velocity? Round to 1 decimal.",
              "solution": "[vx * factor, vy * factor, vz * factor]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each component gets multiplied by the speed factor: {{factor}}.",
                "New velocity = old_velocity \u00d7 {{factor}}, component by component."
              ]
            },
            {
              "id": "vec-l3-s11",
              "level": 3,
              "params": {
                "dx": "randint(-10,10)",
                "dy": "randint(-10,10)",
                "dz": "randint(-10,10)",
                "scalar": "randint(2,8)"
              },
              "scenario": "A displacement vector is ({{dx}}, {{dy}}, {{dz}}). An ability applies this displacement at {{scalar}}\u00d7 strength. What is the final displacement?",
              "solution": "[dx * scalar, dy * scalar, dz * scalar]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component by the strength multiplier {{scalar}}.",
                "Scaling a vector just multiplies every component."
              ]
            },
            {
              "id": "vec-l3-s12",
              "level": 3,
              "params": {
                "dx": "randint(-10,10)",
                "dy": "randint(-10,10)",
                "dz": "randint(-10,10)",
                "scalar": "randint(2,8)"
              },
              "scenario": "A displacement vector is ({{dx}}, {{dy}}, {{dz}}). An ability applies this displacement at {{scalar}}\u00d7 strength. What is the final displacement?",
              "solution": "[dx * scalar, dy * scalar, dz * scalar]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component by the strength multiplier {{scalar}}.",
                "Scaling a vector just multiplies every component."
              ]
            },
            {
              "id": "vec-l3-s13",
              "level": 3,
              "params": {
                "dx": "randint(-10,10)",
                "dy": "randint(-10,10)",
                "dz": "randint(-10,10)",
                "scalar": "randint(2,8)"
              },
              "scenario": "A displacement vector is ({{dx}}, {{dy}}, {{dz}}). An ability applies this displacement at {{scalar}}\u00d7 strength. What is the final displacement?",
              "solution": "[dx * scalar, dy * scalar, dz * scalar]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component by the strength multiplier {{scalar}}.",
                "Scaling a vector just multiplies every component."
              ]
            },
            {
              "id": "vec-l3-s14",
              "level": 3,
              "params": {
                "dx": "randint(-10,10)",
                "dy": "randint(-10,10)",
                "dz": "randint(-10,10)",
                "scalar": "randint(2,8)"
              },
              "scenario": "A displacement vector is ({{dx}}, {{dy}}, {{dz}}). An ability applies this displacement at {{scalar}}\u00d7 strength. What is the final displacement?",
              "solution": "[dx * scalar, dy * scalar, dz * scalar]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component by the strength multiplier {{scalar}}.",
                "Scaling a vector just multiplies every component."
              ]
            },
            {
              "id": "vec-l3-s15",
              "level": 3,
              "params": {
                "dx": "randint(-10,10)",
                "dy": "randint(-10,10)",
                "dz": "randint(-10,10)",
                "scalar": "randint(2,8)"
              },
              "scenario": "A displacement vector is ({{dx}}, {{dy}}, {{dz}}). An ability applies this displacement at {{scalar}}\u00d7 strength. What is the final displacement?",
              "solution": "[dx * scalar, dy * scalar, dz * scalar]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Multiply each component by the strength multiplier {{scalar}}.",
                "Scaling a vector just multiplies every component."
              ]
            }
          ]
        },
        {
          "level": 4,
          "title": "Normalization",
          "questions": [
            {
              "id": "vec-l4-001",
              "level": 4,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "tx": "randint(-30, 30)",
                "ty": "randint(-30, 30)",
                "tz": "randint(-30, 30)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-002",
              "level": 4,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "tx": "randint(-30, 30)",
                "ty": "randint(-30, 30)",
                "tz": "randint(-30, 30)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-003",
              "level": 4,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "tx": "randint(-30, 30)",
                "ty": "randint(-30, 30)",
                "tz": "randint(-30, 30)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-004",
              "level": 4,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "tx": "randint(-30, 30)",
                "ty": "randint(-30, 30)",
                "tz": "randint(-30, 30)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-005",
              "level": 4,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "tx": "randint(-30, 30)",
                "ty": "randint(-30, 30)",
                "tz": "randint(-30, 30)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-006",
              "level": 4,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "tx": "randint(-30, 30)",
                "ty": "randint(-30, 30)",
                "tz": "randint(-30, 30)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-007",
              "level": 4,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "tx": "randint(-30, 30)",
                "ty": "randint(-30, 30)",
                "tz": "randint(-30, 30)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-008",
              "level": 4,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "tx": "randint(-30, 30)",
                "ty": "randint(-30, 30)",
                "tz": "randint(-30, 30)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-009",
              "level": 4,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "tx": "randint(-30, 30)",
                "ty": "randint(-30, 30)",
                "tz": "randint(-30, 30)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-010",
              "level": 4,
              "params": {
                "px": "randint(-30, 30)",
                "py": "randint(-30, 30)",
                "pz": "randint(-30, 30)",
                "tx": "randint(-30, 30)",
                "ty": "randint(-30, 30)",
                "tz": "randint(-30, 30)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-011",
              "level": 4,
              "params": {
                "gx": "randint(-20, 20)",
                "gy": "randint(-20, 20)",
                "gz": "randint(-20, 20)",
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-012",
              "level": 4,
              "params": {
                "gx": "randint(-20, 20)",
                "gy": "randint(-20, 20)",
                "gz": "randint(-20, 20)",
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-013",
              "level": 4,
              "params": {
                "gx": "randint(-20, 20)",
                "gy": "randint(-20, 20)",
                "gz": "randint(-20, 20)",
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-014",
              "level": 4,
              "params": {
                "gx": "randint(-20, 20)",
                "gy": "randint(-20, 20)",
                "gz": "randint(-20, 20)",
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-015",
              "level": 4,
              "params": {
                "gx": "randint(-20, 20)",
                "gy": "randint(-20, 20)",
                "gz": "randint(-20, 20)",
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-016",
              "level": 4,
              "params": {
                "gx": "randint(-20, 20)",
                "gy": "randint(-20, 20)",
                "gz": "randint(-20, 20)",
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-017",
              "level": 4,
              "params": {
                "gx": "randint(-20, 20)",
                "gy": "randint(-20, 20)",
                "gz": "randint(-20, 20)",
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-018",
              "level": 4,
              "params": {
                "gx": "randint(-20, 20)",
                "gy": "randint(-20, 20)",
                "gz": "randint(-20, 20)",
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-019",
              "level": 4,
              "params": {
                "gx": "randint(-20, 20)",
                "gy": "randint(-20, 20)",
                "gz": "randint(-20, 20)",
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-020",
              "level": 4,
              "params": {
                "gx": "randint(-20, 20)",
                "gy": "randint(-20, 20)",
                "gz": "randint(-20, 20)",
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ]
            },
            {
              "id": "vec-l4-021",
              "level": 4,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A wind force vector is ({{vx}}, {{vy}}, {{vz}}). What is the unit direction of the wind? Round to 3 decimals per component.",
              "solution": "let mag = sqrt(vx*vx + vy*vy + vz*vz); [vx/mag, vy/mag, vz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "To get wind direction, normalize the wind vector.",
                "Divide each component by the vector's magnitude.",
                "The result is a unit vector pointing in the wind's direction."
              ]
            },
            {
              "id": "vec-l4-022",
              "level": 4,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A wind force vector is ({{vx}}, {{vy}}, {{vz}}). What is the unit direction of the wind? Round to 3 decimals per component.",
              "solution": "let mag = sqrt(vx*vx + vy*vy + vz*vz); [vx/mag, vy/mag, vz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "To get wind direction, normalize the wind vector.",
                "Divide each component by the vector's magnitude.",
                "The result is a unit vector pointing in the wind's direction."
              ]
            },
            {
              "id": "vec-l4-023",
              "level": 4,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A wind force vector is ({{vx}}, {{vy}}, {{vz}}). What is the unit direction of the wind? Round to 3 decimals per component.",
              "solution": "let mag = sqrt(vx*vx + vy*vy + vz*vz); [vx/mag, vy/mag, vz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "To get wind direction, normalize the wind vector.",
                "Divide each component by the vector's magnitude.",
                "The result is a unit vector pointing in the wind's direction."
              ]
            },
            {
              "id": "vec-l4-024",
              "level": 4,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A wind force vector is ({{vx}}, {{vy}}, {{vz}}). What is the unit direction of the wind? Round to 3 decimals per component.",
              "solution": "let mag = sqrt(vx*vx + vy*vy + vz*vz); [vx/mag, vy/mag, vz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "To get wind direction, normalize the wind vector.",
                "Divide each component by the vector's magnitude.",
                "The result is a unit vector pointing in the wind's direction."
              ]
            },
            {
              "id": "vec-l4-025",
              "level": 4,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A wind force vector is ({{vx}}, {{vy}}, {{vz}}). What is the unit direction of the wind? Round to 3 decimals per component.",
              "solution": "let mag = sqrt(vx*vx + vy*vy + vz*vz); [vx/mag, vy/mag, vz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "To get wind direction, normalize the wind vector.",
                "Divide each component by the vector's magnitude.",
                "The result is a unit vector pointing in the wind's direction."
              ]
            },
            {
              "id": "vec-l4-026",
              "level": 4,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A wind force vector is ({{vx}}, {{vy}}, {{vz}}). What is the unit direction of the wind? Round to 3 decimals per component.",
              "solution": "let mag = sqrt(vx*vx + vy*vy + vz*vz); [vx/mag, vy/mag, vz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "To get wind direction, normalize the wind vector.",
                "Divide each component by the vector's magnitude.",
                "The result is a unit vector pointing in the wind's direction."
              ]
            },
            {
              "id": "vec-l4-027",
              "level": 4,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A wind force vector is ({{vx}}, {{vy}}, {{vz}}). What is the unit direction of the wind? Round to 3 decimals per component.",
              "solution": "let mag = sqrt(vx*vx + vy*vy + vz*vz); [vx/mag, vy/mag, vz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "To get wind direction, normalize the wind vector.",
                "Divide each component by the vector's magnitude.",
                "The result is a unit vector pointing in the wind's direction."
              ]
            },
            {
              "id": "vec-l4-028",
              "level": 4,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A wind force vector is ({{vx}}, {{vy}}, {{vz}}). What is the unit direction of the wind? Round to 3 decimals per component.",
              "solution": "let mag = sqrt(vx*vx + vy*vy + vz*vz); [vx/mag, vy/mag, vz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "To get wind direction, normalize the wind vector.",
                "Divide each component by the vector's magnitude.",
                "The result is a unit vector pointing in the wind's direction."
              ]
            },
            {
              "id": "vec-l4-029",
              "level": 4,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A wind force vector is ({{vx}}, {{vy}}, {{vz}}). What is the unit direction of the wind? Round to 3 decimals per component.",
              "solution": "let mag = sqrt(vx*vx + vy*vy + vz*vz); [vx/mag, vy/mag, vz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "To get wind direction, normalize the wind vector.",
                "Divide each component by the vector's magnitude.",
                "The result is a unit vector pointing in the wind's direction."
              ]
            },
            {
              "id": "vec-l4-030",
              "level": 4,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A wind force vector is ({{vx}}, {{vy}}, {{vz}}). What is the unit direction of the wind? Round to 3 decimals per component.",
              "solution": "let mag = sqrt(vx*vx + vy*vy + vz*vz); [vx/mag, vy/mag, vz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "To get wind direction, normalize the wind vector.",
                "Divide each component by the vector's magnitude.",
                "The result is a unit vector pointing in the wind's direction."
              ]
            }
          ]
        },
        {
          "level": 5,
          "title": "Vectors vs Points",
          "questions": [
            {
              "id": "vec-l5-v01",
              "level": 5,
              "params": {
                "px": "randint(-20,20)",
                "py": "randint(-20,20)",
                "pz": "randint(-20,20)",
                "ox": "randint(-10,10)",
                "oy": "randint(-10,10)",
                "oz": "randint(-10,10)"
              },
              "scenario": "A player is at position ({{px}}, {{py}}, {{pz}}). They receive an offset of ({{ox}}, {{oy}}, {{oz}}) representing a teleport. Where do they end up?",
              "solution": "[px + ox, py + oy, pz + oz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "A position + an offset = a new position. Just add them.",
                "An offset IS a direction vector. Adding it to a position makes sense."
              ]
            },
            {
              "id": "vec-l5-v02",
              "level": 5,
              "params": {
                "px": "randint(-20,20)",
                "py": "randint(-20,20)",
                "pz": "randint(-20,20)",
                "ox": "randint(-10,10)",
                "oy": "randint(-10,10)",
                "oz": "randint(-10,10)"
              },
              "scenario": "A player is at position ({{px}}, {{py}}, {{pz}}). They receive an offset of ({{ox}}, {{oy}}, {{oz}}) representing a teleport. Where do they end up?",
              "solution": "[px + ox, py + oy, pz + oz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "A position + an offset = a new position. Just add them.",
                "An offset IS a direction vector. Adding it to a position makes sense."
              ]
            },
            {
              "id": "vec-l5-v03",
              "level": 5,
              "params": {
                "px": "randint(-20,20)",
                "py": "randint(-20,20)",
                "pz": "randint(-20,20)",
                "ox": "randint(-10,10)",
                "oy": "randint(-10,10)",
                "oz": "randint(-10,10)"
              },
              "scenario": "A player is at position ({{px}}, {{py}}, {{pz}}). They receive an offset of ({{ox}}, {{oy}}, {{oz}}) representing a teleport. Where do they end up?",
              "solution": "[px + ox, py + oy, pz + oz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "A position + an offset = a new position. Just add them.",
                "An offset IS a direction vector. Adding it to a position makes sense."
              ]
            },
            {
              "id": "vec-l5-v04",
              "level": 5,
              "params": {
                "px": "randint(-20,20)",
                "py": "randint(-20,20)",
                "pz": "randint(-20,20)",
                "ox": "randint(-10,10)",
                "oy": "randint(-10,10)",
                "oz": "randint(-10,10)"
              },
              "scenario": "A player is at position ({{px}}, {{py}}, {{pz}}). They receive an offset of ({{ox}}, {{oy}}, {{oz}}) representing a teleport. Where do they end up?",
              "solution": "[px + ox, py + oy, pz + oz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "A position + an offset = a new position. Just add them.",
                "An offset IS a direction vector. Adding it to a position makes sense."
              ]
            },
            {
              "id": "vec-l5-v05",
              "level": 5,
              "params": {
                "px": "randint(-20,20)",
                "py": "randint(-20,20)",
                "pz": "randint(-20,20)",
                "ox": "randint(-10,10)",
                "oy": "randint(-10,10)",
                "oz": "randint(-10,10)"
              },
              "scenario": "A player is at position ({{px}}, {{py}}, {{pz}}). They receive an offset of ({{ox}}, {{oy}}, {{oz}}) representing a teleport. Where do they end up?",
              "solution": "[px + ox, py + oy, pz + oz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "A position + an offset = a new position. Just add them.",
                "An offset IS a direction vector. Adding it to a position makes sense."
              ]
            },
            {
              "id": "vec-l5-v06",
              "level": 5,
              "params": {
                "px": "randint(-20,20)",
                "py": "randint(-20,20)",
                "pz": "randint(-20,20)",
                "ox": "randint(-10,10)",
                "oy": "randint(-10,10)",
                "oz": "randint(-10,10)"
              },
              "scenario": "A player is at position ({{px}}, {{py}}, {{pz}}). They receive an offset of ({{ox}}, {{oy}}, {{oz}}) representing a teleport. Where do they end up?",
              "solution": "[px + ox, py + oy, pz + oz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "A position + an offset = a new position. Just add them.",
                "An offset IS a direction vector. Adding it to a position makes sense."
              ]
            },
            {
              "id": "vec-l5-v07",
              "level": 5,
              "params": {
                "p1x": "randint(-20,20)",
                "p1y": "randint(-20,20)",
                "p1z": "randint(-20,20)",
                "p2x": "randint(-20,20)",
                "p2y": "randint(-20,20)",
                "p2z": "randint(-20,20)"
              },
              "scenario": "A bullet has a Position of ({{p1x}}, {{p1y}}, {{p1z}}) and a Velocity of ({{p2x}}, {{p2y}}, {{p2z}}). Which one is the DIRECTION vector \u2014 Position or Velocity? (Answer 'position' or 'velocity')",
              "solution": "'velocity'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Position = WHERE. Velocity = DIRECTION + SPEED.",
                "Velocity is the direction vector. Position is just a point in space."
              ]
            },
            {
              "id": "vec-l5-v08",
              "level": 5,
              "params": {
                "p1x": "randint(-20,20)",
                "p1y": "randint(-20,20)",
                "p1z": "randint(-20,20)",
                "p2x": "randint(-20,20)",
                "p2y": "randint(-20,20)",
                "p2z": "randint(-20,20)"
              },
              "scenario": "A bullet has a Position of ({{p1x}}, {{p1y}}, {{p1z}}) and a Velocity of ({{p2x}}, {{p2y}}, {{p2z}}). Which one is the DIRECTION vector \u2014 Position or Velocity? (Answer 'position' or 'velocity')",
              "solution": "'velocity'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Position = WHERE. Velocity = DIRECTION + SPEED.",
                "Velocity is the direction vector. Position is just a point in space."
              ]
            },
            {
              "id": "vec-l5-v09",
              "level": 5,
              "params": {
                "p1x": "randint(-20,20)",
                "p1y": "randint(-20,20)",
                "p1z": "randint(-20,20)",
                "p2x": "randint(-20,20)",
                "p2y": "randint(-20,20)",
                "p2z": "randint(-20,20)"
              },
              "scenario": "A bullet has a Position of ({{p1x}}, {{p1y}}, {{p1z}}) and a Velocity of ({{p2x}}, {{p2y}}, {{p2z}}). Which one is the DIRECTION vector \u2014 Position or Velocity? (Answer 'position' or 'velocity')",
              "solution": "'velocity'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Position = WHERE. Velocity = DIRECTION + SPEED.",
                "Velocity is the direction vector. Position is just a point in space."
              ]
            },
            {
              "id": "vec-l5-v10",
              "level": 5,
              "params": {
                "p1x": "randint(-20,20)",
                "p1y": "randint(-20,20)",
                "p1z": "randint(-20,20)",
                "p2x": "randint(-20,20)",
                "p2y": "randint(-20,20)",
                "p2z": "randint(-20,20)"
              },
              "scenario": "A bullet has a Position of ({{p1x}}, {{p1y}}, {{p1z}}) and a Velocity of ({{p2x}}, {{p2y}}, {{p2z}}). Which one is the DIRECTION vector \u2014 Position or Velocity? (Answer 'position' or 'velocity')",
              "solution": "'velocity'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Position = WHERE. Velocity = DIRECTION + SPEED.",
                "Velocity is the direction vector. Position is just a point in space."
              ]
            },
            {
              "id": "vec-l5-v11",
              "level": 5,
              "params": {
                "p1x": "randint(-20,20)",
                "p1y": "randint(-20,20)",
                "p1z": "randint(-20,20)",
                "p2x": "randint(-20,20)",
                "p2y": "randint(-20,20)",
                "p2z": "randint(-20,20)"
              },
              "scenario": "A bullet has a Position of ({{p1x}}, {{p1y}}, {{p1z}}) and a Velocity of ({{p2x}}, {{p2y}}, {{p2z}}). Which one is the DIRECTION vector \u2014 Position or Velocity? (Answer 'position' or 'velocity')",
              "solution": "'velocity'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Position = WHERE. Velocity = DIRECTION + SPEED.",
                "Velocity is the direction vector. Position is just a point in space."
              ]
            },
            {
              "id": "vec-l5-v12",
              "level": 5,
              "params": {
                "px": "randint(-15,15)",
                "py": "randint(-15,15)",
                "pz": "randint(-15,15)",
                "dx": "randint(-8,8)",
                "dy": "randint(-8,8)",
                "dz": "randint(-8,8)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) has a movement input vector of ({{dx}}, {{dy}}, {{dz}}). Should the developer normalize the POSITION or the INPUT VECTOR? (Answer 'position', 'input', or 'both')",
              "solution": "'input'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Positions are points \u2014 normalizing them moves them onto a unit sphere (wrong!).",
                "The input vector is a direction \u2014 normalizing it sets its length to 1."
              ]
            },
            {
              "id": "vec-l5-v13",
              "level": 5,
              "params": {
                "px": "randint(-15,15)",
                "py": "randint(-15,15)",
                "pz": "randint(-15,15)",
                "dx": "randint(-8,8)",
                "dy": "randint(-8,8)",
                "dz": "randint(-8,8)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) has a movement input vector of ({{dx}}, {{dy}}, {{dz}}). Should the developer normalize the POSITION or the INPUT VECTOR? (Answer 'position', 'input', or 'both')",
              "solution": "'input'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Positions are points \u2014 normalizing them moves them onto a unit sphere (wrong!).",
                "The input vector is a direction \u2014 normalizing it sets its length to 1."
              ]
            },
            {
              "id": "vec-l5-v14",
              "level": 5,
              "params": {
                "px": "randint(-15,15)",
                "py": "randint(-15,15)",
                "pz": "randint(-15,15)",
                "dx": "randint(-8,8)",
                "dy": "randint(-8,8)",
                "dz": "randint(-8,8)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) has a movement input vector of ({{dx}}, {{dy}}, {{dz}}). Should the developer normalize the POSITION or the INPUT VECTOR? (Answer 'position', 'input', or 'both')",
              "solution": "'input'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Positions are points \u2014 normalizing them moves them onto a unit sphere (wrong!).",
                "The input vector is a direction \u2014 normalizing it sets its length to 1."
              ]
            },
            {
              "id": "vec-l5-v15",
              "level": 5,
              "params": {
                "px": "randint(-15,15)",
                "py": "randint(-15,15)",
                "pz": "randint(-15,15)",
                "dx": "randint(-8,8)",
                "dy": "randint(-8,8)",
                "dz": "randint(-8,8)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) has a movement input vector of ({{dx}}, {{dy}}, {{dz}}). Should the developer normalize the POSITION or the INPUT VECTOR? (Answer 'position', 'input', or 'both')",
              "solution": "'input'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Positions are points \u2014 normalizing them moves them onto a unit sphere (wrong!).",
                "The input vector is a direction \u2014 normalizing it sets its length to 1."
              ]
            },
            {
              "id": "vec-l5-v16",
              "level": 5,
              "params": {
                "a": "randint(-10,10)",
                "b": "randint(-10,10)",
                "c": "randint(-10,10)"
              },
              "scenario": "A game stores a value ({{a}}, {{b}}, {{c}}) as a player's world position. A developer calls normalize() on it. Is this correct? (Answer 'yes' or 'no')",
              "solution": "'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Normalizing moves to the unit sphere \u2014 ({{a}},{{b}},{{c}}) becomes radius 1 from origin.",
                "Positions should never be normalized. Only direction vectors."
              ]
            },
            {
              "id": "vec-l5-v17",
              "level": 5,
              "params": {
                "a": "randint(-10,10)",
                "b": "randint(-10,10)",
                "c": "randint(-10,10)"
              },
              "scenario": "A game stores a value ({{a}}, {{b}}, {{c}}) as a player's world position. A developer calls normalize() on it. Is this correct? (Answer 'yes' or 'no')",
              "solution": "'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Normalizing moves to the unit sphere \u2014 ({{a}},{{b}},{{c}}) becomes radius 1 from origin.",
                "Positions should never be normalized. Only direction vectors."
              ]
            },
            {
              "id": "vec-l5-v18",
              "level": 5,
              "params": {
                "a": "randint(-10,10)",
                "b": "randint(-10,10)",
                "c": "randint(-10,10)"
              },
              "scenario": "A game stores a value ({{a}}, {{b}}, {{c}}) as a player's world position. A developer calls normalize() on it. Is this correct? (Answer 'yes' or 'no')",
              "solution": "'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Normalizing moves to the unit sphere \u2014 ({{a}},{{b}},{{c}}) becomes radius 1 from origin.",
                "Positions should never be normalized. Only direction vectors."
              ]
            },
            {
              "id": "vec-l5-v19",
              "level": 5,
              "params": {
                "ex": "randint(-15,15)",
                "ey": "randint(-15,15)",
                "ez": "randint(-15,15)",
                "px": "randint(-15,15)",
                "py": "randint(-15,15)",
                "pz": "randint(-15,15)"
              },
              "scenario": "Enemy at ({{ex}}, {{ey}}, {{ez}}). Player at ({{px}}, {{py}}, {{pz}}). The result of 'enemy - player' is a ___. (Answer 'position' or 'direction')",
              "solution": "'direction'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Subtracting two positions gives a direction vector (with magnitude = distance).",
                "B - A is a direction from A to B, not a point in space."
              ]
            },
            {
              "id": "vec-l5-v20",
              "level": 5,
              "params": {
                "ex": "randint(-15,15)",
                "ey": "randint(-15,15)",
                "ez": "randint(-15,15)",
                "px": "randint(-15,15)",
                "py": "randint(-15,15)",
                "pz": "randint(-15,15)"
              },
              "scenario": "Enemy at ({{ex}}, {{ey}}, {{ez}}). Player at ({{px}}, {{py}}, {{pz}}). The result of 'enemy - player' is a ___. (Answer 'position' or 'direction')",
              "solution": "'direction'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Subtracting two positions gives a direction vector (with magnitude = distance).",
                "B - A is a direction from A to B, not a point in space."
              ]
            }
          ]
        },
        {
          "level": 6,
          "title": "Interpolation (Lerp)",
          "questions": [
            {
              "id": "vec-l6-009",
              "level": 6,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)",
                "t": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A character at ({{ax}}, {{ay}}, {{az}}) is moving toward ({{bx}}, {{by}}, {{bz}}). They stop when they are {{t}} of the way there (t = {{t}}). Where are they? Round each component to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Linear interpolation: position = A + (B - A) * t.",
                "t = {{t}} means they've covered {{t}} of the distance.",
                "x: {{ax}} + ({{bx}} - ({{ax}})) * {{t}}, same for y and z."
              ]
            },
            {
              "id": "vec-l6-010",
              "level": 6,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)",
                "t": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A character at ({{ax}}, {{ay}}, {{az}}) is moving toward ({{bx}}, {{by}}, {{bz}}). They stop when they are {{t}} of the way there (t = {{t}}). Where are they? Round each component to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Linear interpolation: position = A + (B - A) * t.",
                "t = {{t}} means they've covered {{t}} of the distance.",
                "x: {{ax}} + ({{bx}} - ({{ax}})) * {{t}}, same for y and z."
              ]
            },
            {
              "id": "vec-l6-011",
              "level": 6,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)",
                "t": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A character at ({{ax}}, {{ay}}, {{az}}) is moving toward ({{bx}}, {{by}}, {{bz}}). They stop when they are {{t}} of the way there (t = {{t}}). Where are they? Round each component to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Linear interpolation: position = A + (B - A) * t.",
                "t = {{t}} means they've covered {{t}} of the distance.",
                "x: {{ax}} + ({{bx}} - ({{ax}})) * {{t}}, same for y and z."
              ]
            },
            {
              "id": "vec-l6-012",
              "level": 6,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)",
                "t": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A character at ({{ax}}, {{ay}}, {{az}}) is moving toward ({{bx}}, {{by}}, {{bz}}). They stop when they are {{t}} of the way there (t = {{t}}). Where are they? Round each component to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Linear interpolation: position = A + (B - A) * t.",
                "t = {{t}} means they've covered {{t}} of the distance.",
                "x: {{ax}} + ({{bx}} - ({{ax}})) * {{t}}, same for y and z."
              ]
            },
            {
              "id": "vec-l6-013",
              "level": 6,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)",
                "t": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A character at ({{ax}}, {{ay}}, {{az}}) is moving toward ({{bx}}, {{by}}, {{bz}}). They stop when they are {{t}} of the way there (t = {{t}}). Where are they? Round each component to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Linear interpolation: position = A + (B - A) * t.",
                "t = {{t}} means they've covered {{t}} of the distance.",
                "x: {{ax}} + ({{bx}} - ({{ax}})) * {{t}}, same for y and z."
              ]
            },
            {
              "id": "vec-l6-014",
              "level": 6,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)",
                "t": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A character at ({{ax}}, {{ay}}, {{az}}) is moving toward ({{bx}}, {{by}}, {{bz}}). They stop when they are {{t}} of the way there (t = {{t}}). Where are they? Round each component to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Linear interpolation: position = A + (B - A) * t.",
                "t = {{t}} means they've covered {{t}} of the distance.",
                "x: {{ax}} + ({{bx}} - ({{ax}})) * {{t}}, same for y and z."
              ]
            },
            {
              "id": "vec-l6-015",
              "level": 6,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)",
                "t": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A character at ({{ax}}, {{ay}}, {{az}}) is moving toward ({{bx}}, {{by}}, {{bz}}). They stop when they are {{t}} of the way there (t = {{t}}). Where are they? Round each component to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Linear interpolation: position = A + (B - A) * t.",
                "t = {{t}} means they've covered {{t}} of the distance.",
                "x: {{ax}} + ({{bx}} - ({{ax}})) * {{t}}, same for y and z."
              ]
            },
            {
              "id": "vec-l6-016",
              "level": 6,
              "params": {
                "ax": "randint(-20, 20)",
                "ay": "randint(-20, 20)",
                "az": "randint(-20, 20)",
                "bx": "randint(-20, 20)",
                "by": "randint(-20, 20)",
                "bz": "randint(-20, 20)",
                "t": "randfloat(0.1, 0.9, 1)"
              },
              "scenario": "A character at ({{ax}}, {{ay}}, {{az}}) is moving toward ({{bx}}, {{by}}, {{bz}}). They stop when they are {{t}} of the way there (t = {{t}}). Where are they? Round each component to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Linear interpolation: position = A + (B - A) * t.",
                "t = {{t}} means they've covered {{t}} of the distance.",
                "x: {{ax}} + ({{bx}} - ({{ax}})) * {{t}}, same for y and z."
              ]
            },
            {
              "id": "vec-l6-024",
              "level": 6,
              "params": {
                "ax": "randint(-30, 30)",
                "ay": "randint(-30, 30)",
                "az": "randint(-30, 30)",
                "bx": "randint(-30, 30)",
                "by": "randint(-30, 30)",
                "bz": "randint(-30, 30)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ]
            },
            {
              "id": "vec-l6-025",
              "level": 6,
              "params": {
                "ax": "randint(-30, 30)",
                "ay": "randint(-30, 30)",
                "az": "randint(-30, 30)",
                "bx": "randint(-30, 30)",
                "by": "randint(-30, 30)",
                "bz": "randint(-30, 30)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ]
            },
            {
              "id": "vec-l6-026",
              "level": 6,
              "params": {
                "ax": "randint(-30, 30)",
                "ay": "randint(-30, 30)",
                "az": "randint(-30, 30)",
                "bx": "randint(-30, 30)",
                "by": "randint(-30, 30)",
                "bz": "randint(-30, 30)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ]
            },
            {
              "id": "vec-l6-027",
              "level": 6,
              "params": {
                "ax": "randint(-30, 30)",
                "ay": "randint(-30, 30)",
                "az": "randint(-30, 30)",
                "bx": "randint(-30, 30)",
                "by": "randint(-30, 30)",
                "bz": "randint(-30, 30)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ]
            },
            {
              "id": "vec-l6-028",
              "level": 6,
              "params": {
                "ax": "randint(-30, 30)",
                "ay": "randint(-30, 30)",
                "az": "randint(-30, 30)",
                "bx": "randint(-30, 30)",
                "by": "randint(-30, 30)",
                "bz": "randint(-30, 30)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ]
            },
            {
              "id": "vec-l6-029",
              "level": 6,
              "params": {
                "ax": "randint(-30, 30)",
                "ay": "randint(-30, 30)",
                "az": "randint(-30, 30)",
                "bx": "randint(-30, 30)",
                "by": "randint(-30, 30)",
                "bz": "randint(-30, 30)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ]
            },
            {
              "id": "vec-l6-030",
              "level": 6,
              "params": {
                "ax": "randint(-30, 30)",
                "ay": "randint(-30, 30)",
                "az": "randint(-30, 30)",
                "bx": "randint(-30, 30)",
                "by": "randint(-30, 30)",
                "bz": "randint(-30, 30)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ]
            },
            {
              "id": "vec-l6-l01",
              "level": 6,
              "params": {
                "ax": "randint(-30,30)",
                "ay": "randint(-30,30)",
                "az": "randint(-30,30)",
                "bx": "randint(-30,30)",
                "by": "randint(-30,30)",
                "bz": "randint(-30,30)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ]
            },
            {
              "id": "vec-l6-l02",
              "level": 6,
              "params": {
                "ax": "randint(-30,30)",
                "ay": "randint(-30,30)",
                "az": "randint(-30,30)",
                "bx": "randint(-30,30)",
                "by": "randint(-30,30)",
                "bz": "randint(-30,30)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ]
            },
            {
              "id": "vec-l6-l03",
              "level": 6,
              "params": {
                "ax": "randint(-30,30)",
                "ay": "randint(-30,30)",
                "az": "randint(-30,30)",
                "bx": "randint(-30,30)",
                "by": "randint(-30,30)",
                "bz": "randint(-30,30)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ]
            },
            {
              "id": "vec-l6-l04",
              "level": 6,
              "params": {
                "ax": "randint(-30,30)",
                "ay": "randint(-30,30)",
                "az": "randint(-30,30)",
                "bx": "randint(-30,30)",
                "by": "randint(-30,30)",
                "bz": "randint(-30,30)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ]
            },
            {
              "id": "vec-l6-l05",
              "level": 6,
              "params": {
                "ax": "randint(-30,30)",
                "ay": "randint(-30,30)",
                "az": "randint(-30,30)",
                "bx": "randint(-30,30)",
                "by": "randint(-30,30)",
                "bz": "randint(-30,30)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ]
            },
            {
              "id": "vec-l6-l06",
              "level": 6,
              "params": {
                "ax": "randint(-30,30)",
                "ay": "randint(-30,30)",
                "az": "randint(-30,30)",
                "bx": "randint(-30,30)",
                "by": "randint(-30,30)",
                "bz": "randint(-30,30)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ]
            },
            {
              "id": "vec-l6-l07",
              "level": 6,
              "params": {
                "cx": "randint(-20,20)",
                "cy": "randint(-10,10)",
                "cz": "randint(-20,20)",
                "px": "randint(-20,20)",
                "py": "randint(-10,10)",
                "pz": "randint(-20,20)",
                "pct": "randint(15,40,5)"
              },
              "scenario": "A smooth camera at ({{cx}}, {{cy}}, {{cz}}) follows a player at ({{px}}, {{py}}, {{pz}}). Each frame it moves {{pct}}% closer. After one frame, where is the camera? Round to 1 decimal.",
              "solution": "let t = pct / 100; [cx + (px - cx) * t, cy + (py - cy) * t, cz + (pz - cz) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Camera lerps: camera += (player - camera) \u00d7 t.",
                "t = {{pct}}/100 = {{pct/100}}. That fraction of the gap is closed each frame."
              ]
            },
            {
              "id": "vec-l6-l08",
              "level": 6,
              "params": {
                "cx": "randint(-20,20)",
                "cy": "randint(-10,10)",
                "cz": "randint(-20,20)",
                "px": "randint(-20,20)",
                "py": "randint(-10,10)",
                "pz": "randint(-20,20)",
                "pct": "randint(15,40,5)"
              },
              "scenario": "A smooth camera at ({{cx}}, {{cy}}, {{cz}}) follows a player at ({{px}}, {{py}}, {{pz}}). Each frame it moves {{pct}}% closer. After one frame, where is the camera? Round to 1 decimal.",
              "solution": "let t = pct / 100; [cx + (px - cx) * t, cy + (py - cy) * t, cz + (pz - cz) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Camera lerps: camera += (player - camera) \u00d7 t.",
                "t = {{pct}}/100 = {{pct/100}}. That fraction of the gap is closed each frame."
              ]
            },
            {
              "id": "vec-l6-l09",
              "level": 6,
              "params": {
                "cx": "randint(-20,20)",
                "cy": "randint(-10,10)",
                "cz": "randint(-20,20)",
                "px": "randint(-20,20)",
                "py": "randint(-10,10)",
                "pz": "randint(-20,20)",
                "pct": "randint(15,40,5)"
              },
              "scenario": "A smooth camera at ({{cx}}, {{cy}}, {{cz}}) follows a player at ({{px}}, {{py}}, {{pz}}). Each frame it moves {{pct}}% closer. After one frame, where is the camera? Round to 1 decimal.",
              "solution": "let t = pct / 100; [cx + (px - cx) * t, cy + (py - cy) * t, cz + (pz - cz) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Camera lerps: camera += (player - camera) \u00d7 t.",
                "t = {{pct}}/100 = {{pct/100}}. That fraction of the gap is closed each frame."
              ]
            },
            {
              "id": "vec-l6-l10",
              "level": 6,
              "params": {
                "cx": "randint(-20,20)",
                "cy": "randint(-10,10)",
                "cz": "randint(-20,20)",
                "px": "randint(-20,20)",
                "py": "randint(-10,10)",
                "pz": "randint(-20,20)",
                "pct": "randint(15,40,5)"
              },
              "scenario": "A smooth camera at ({{cx}}, {{cy}}, {{cz}}) follows a player at ({{px}}, {{py}}, {{pz}}). Each frame it moves {{pct}}% closer. After one frame, where is the camera? Round to 1 decimal.",
              "solution": "let t = pct / 100; [cx + (px - cx) * t, cy + (py - cy) * t, cz + (pz - cz) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Camera lerps: camera += (player - camera) \u00d7 t.",
                "t = {{pct}}/100 = {{pct/100}}. That fraction of the gap is closed each frame."
              ]
            },
            {
              "id": "vec-l6-l11",
              "level": 6,
              "params": {
                "cx": "randint(-20,20)",
                "cy": "randint(-10,10)",
                "cz": "randint(-20,20)",
                "px": "randint(-20,20)",
                "py": "randint(-10,10)",
                "pz": "randint(-20,20)",
                "pct": "randint(15,40,5)"
              },
              "scenario": "A smooth camera at ({{cx}}, {{cy}}, {{cz}}) follows a player at ({{px}}, {{py}}, {{pz}}). Each frame it moves {{pct}}% closer. After one frame, where is the camera? Round to 1 decimal.",
              "solution": "let t = pct / 100; [cx + (px - cx) * t, cy + (py - cy) * t, cz + (pz - cz) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Camera lerps: camera += (player - camera) \u00d7 t.",
                "t = {{pct}}/100 = {{pct/100}}. That fraction of the gap is closed each frame."
              ]
            },
            {
              "id": "vec-l6-l12",
              "level": 6,
              "params": {
                "vx": "randint(-15,15)",
                "vy": "randint(-15,15)",
                "vz": "randint(-15,15)",
                "damp": "randfloat(0.7,0.95,2)",
                "frames": "randint(2,4)"
              },
              "scenario": "A velocity of ({{vx}}, {{vy}}, {{vz}}) is damped by multiplying by {{damp}} each frame. What is the velocity after {{frames}} frames? Round to 1 decimal.",
              "solution": "let f = pow(damp, frames); [vx * f, vy * f, vz * f]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each frame: v = v \u00d7 {{damp}}. After {{frames}} frames: v = v \u00d7 {{damp}}^{{frames}}.",
                "Multiply each component by {{damp}}^{{frames}}."
              ]
            },
            {
              "id": "vec-l6-l13",
              "level": 6,
              "params": {
                "vx": "randint(-15,15)",
                "vy": "randint(-15,15)",
                "vz": "randint(-15,15)",
                "damp": "randfloat(0.7,0.95,2)",
                "frames": "randint(2,4)"
              },
              "scenario": "A velocity of ({{vx}}, {{vy}}, {{vz}}) is damped by multiplying by {{damp}} each frame. What is the velocity after {{frames}} frames? Round to 1 decimal.",
              "solution": "let f = pow(damp, frames); [vx * f, vy * f, vz * f]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each frame: v = v \u00d7 {{damp}}. After {{frames}} frames: v = v \u00d7 {{damp}}^{{frames}}.",
                "Multiply each component by {{damp}}^{{frames}}."
              ]
            },
            {
              "id": "vec-l6-l14",
              "level": 6,
              "params": {
                "vx": "randint(-15,15)",
                "vy": "randint(-15,15)",
                "vz": "randint(-15,15)",
                "damp": "randfloat(0.7,0.95,2)",
                "frames": "randint(2,4)"
              },
              "scenario": "A velocity of ({{vx}}, {{vy}}, {{vz}}) is damped by multiplying by {{damp}} each frame. What is the velocity after {{frames}} frames? Round to 1 decimal.",
              "solution": "let f = pow(damp, frames); [vx * f, vy * f, vz * f]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each frame: v = v \u00d7 {{damp}}. After {{frames}} frames: v = v \u00d7 {{damp}}^{{frames}}.",
                "Multiply each component by {{damp}}^{{frames}}."
              ]
            },
            {
              "id": "vec-l6-l15",
              "level": 6,
              "params": {
                "vx": "randint(-15,15)",
                "vy": "randint(-15,15)",
                "vz": "randint(-15,15)",
                "damp": "randfloat(0.7,0.95,2)",
                "frames": "randint(2,4)"
              },
              "scenario": "A velocity of ({{vx}}, {{vy}}, {{vz}}) is damped by multiplying by {{damp}} each frame. What is the velocity after {{frames}} frames? Round to 1 decimal.",
              "solution": "let f = pow(damp, frames); [vx * f, vy * f, vz * f]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each frame: v = v \u00d7 {{damp}}. After {{frames}} frames: v = v \u00d7 {{damp}}^{{frames}}.",
                "Multiply each component by {{damp}}^{{frames}}."
              ]
            }
          ]
        },
        {
          "level": 7,
          "title": "Dot Product \u2014 Alignment",
          "questions": [
            {
              "id": "vec-l7-001",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)"
              },
              "scenario": "A player is facing direction ({{fx}}, {{fy}}, {{fz}}). An enemy is in direction ({{ex}}, {{ey}}, {{ez}}) relative to the player. Is the enemy in FRONT of or BEHIND the player?",
              "solution": "(fx * ex + fy * ey + fz * ez) > 0 ? 'in front' : 'behind'",
              "answerType": "front_behind",
              "units": "",
              "hints": [
                "Compute the dot product of the facing direction and the enemy direction.",
                "If dot > 0, the enemy is in front. If dot < 0, behind.",
                "dot = fx*ex + fy*ey + fz*ez. Sign tells you front (+) or behind (-)."
              ]
            },
            {
              "id": "vec-l7-002",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)"
              },
              "scenario": "A player is facing direction ({{fx}}, {{fy}}, {{fz}}). An enemy is in direction ({{ex}}, {{ey}}, {{ez}}) relative to the player. Is the enemy in FRONT of or BEHIND the player?",
              "solution": "(fx * ex + fy * ey + fz * ez) > 0 ? 'in front' : 'behind'",
              "answerType": "front_behind",
              "units": "",
              "hints": [
                "Compute the dot product of the facing direction and the enemy direction.",
                "If dot > 0, the enemy is in front. If dot < 0, behind.",
                "dot = fx*ex + fy*ey + fz*ez. Sign tells you front (+) or behind (-)."
              ]
            },
            {
              "id": "vec-l7-003",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)"
              },
              "scenario": "A player is facing direction ({{fx}}, {{fy}}, {{fz}}). An enemy is in direction ({{ex}}, {{ey}}, {{ez}}) relative to the player. Is the enemy in FRONT of or BEHIND the player?",
              "solution": "(fx * ex + fy * ey + fz * ez) > 0 ? 'in front' : 'behind'",
              "answerType": "front_behind",
              "units": "",
              "hints": [
                "Compute the dot product of the facing direction and the enemy direction.",
                "If dot > 0, the enemy is in front. If dot < 0, behind.",
                "dot = fx*ex + fy*ey + fz*ez. Sign tells you front (+) or behind (-)."
              ]
            },
            {
              "id": "vec-l7-004",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)"
              },
              "scenario": "A player is facing direction ({{fx}}, {{fy}}, {{fz}}). An enemy is in direction ({{ex}}, {{ey}}, {{ez}}) relative to the player. Is the enemy in FRONT of or BEHIND the player?",
              "solution": "(fx * ex + fy * ey + fz * ez) > 0 ? 'in front' : 'behind'",
              "answerType": "front_behind",
              "units": "",
              "hints": [
                "Compute the dot product of the facing direction and the enemy direction.",
                "If dot > 0, the enemy is in front. If dot < 0, behind.",
                "dot = fx*ex + fy*ey + fz*ez. Sign tells you front (+) or behind (-)."
              ]
            },
            {
              "id": "vec-l7-005",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)"
              },
              "scenario": "A player is facing direction ({{fx}}, {{fy}}, {{fz}}). An enemy is in direction ({{ex}}, {{ey}}, {{ez}}) relative to the player. Is the enemy in FRONT of or BEHIND the player?",
              "solution": "(fx * ex + fy * ey + fz * ez) > 0 ? 'in front' : 'behind'",
              "answerType": "front_behind",
              "units": "",
              "hints": [
                "Compute the dot product of the facing direction and the enemy direction.",
                "If dot > 0, the enemy is in front. If dot < 0, behind.",
                "dot = fx*ex + fy*ey + fz*ez. Sign tells you front (+) or behind (-)."
              ]
            },
            {
              "id": "vec-l7-006",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)"
              },
              "scenario": "A player is facing direction ({{fx}}, {{fy}}, {{fz}}). An enemy is in direction ({{ex}}, {{ey}}, {{ez}}) relative to the player. Is the enemy in FRONT of or BEHIND the player?",
              "solution": "(fx * ex + fy * ey + fz * ez) > 0 ? 'in front' : 'behind'",
              "answerType": "front_behind",
              "units": "",
              "hints": [
                "Compute the dot product of the facing direction and the enemy direction.",
                "If dot > 0, the enemy is in front. If dot < 0, behind.",
                "dot = fx*ex + fy*ey + fz*ez. Sign tells you front (+) or behind (-)."
              ]
            },
            {
              "id": "vec-l7-007",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)"
              },
              "scenario": "A player is facing direction ({{fx}}, {{fy}}, {{fz}}). An enemy is in direction ({{ex}}, {{ey}}, {{ez}}) relative to the player. Is the enemy in FRONT of or BEHIND the player?",
              "solution": "(fx * ex + fy * ey + fz * ez) > 0 ? 'in front' : 'behind'",
              "answerType": "front_behind",
              "units": "",
              "hints": [
                "Compute the dot product of the facing direction and the enemy direction.",
                "If dot > 0, the enemy is in front. If dot < 0, behind.",
                "dot = fx*ex + fy*ey + fz*ez. Sign tells you front (+) or behind (-)."
              ]
            },
            {
              "id": "vec-l7-008",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)"
              },
              "scenario": "A player is facing direction ({{fx}}, {{fy}}, {{fz}}). An enemy is in direction ({{ex}}, {{ey}}, {{ez}}) relative to the player. Is the enemy in FRONT of or BEHIND the player?",
              "solution": "(fx * ex + fy * ey + fz * ez) > 0 ? 'in front' : 'behind'",
              "answerType": "front_behind",
              "units": "",
              "hints": [
                "Compute the dot product of the facing direction and the enemy direction.",
                "If dot > 0, the enemy is in front. If dot < 0, behind.",
                "dot = fx*ex + fy*ey + fz*ez. Sign tells you front (+) or behind (-)."
              ]
            },
            {
              "id": "vec-l7-009",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "threshold": "randfloat(0.2, 0.7, 1)"
              },
              "scenario": "A guard faces direction ({{fx}}, {{fy}}, {{fz}}). A player is detected if the dot product of the guard's facing and the direction to the player is greater than {{threshold}}. The direction to the player is ({{ex}}, {{ey}}, {{ez}}). Is the player detected? (Answer 'yes' or 'no')",
              "solution": "(fx * ex + fy * ey + fz * ez) > threshold ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute dot = guard_facing \u00b7 direction_to_player.",
                "Compare dot to the threshold of {{threshold}}.",
                "If dot > {{threshold}}, the player is within the guard's vision cone."
              ]
            },
            {
              "id": "vec-l7-010",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "threshold": "randfloat(0.2, 0.7, 1)"
              },
              "scenario": "A guard faces direction ({{fx}}, {{fy}}, {{fz}}). A player is detected if the dot product of the guard's facing and the direction to the player is greater than {{threshold}}. The direction to the player is ({{ex}}, {{ey}}, {{ez}}). Is the player detected? (Answer 'yes' or 'no')",
              "solution": "(fx * ex + fy * ey + fz * ez) > threshold ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute dot = guard_facing \u00b7 direction_to_player.",
                "Compare dot to the threshold of {{threshold}}.",
                "If dot > {{threshold}}, the player is within the guard's vision cone."
              ]
            },
            {
              "id": "vec-l7-011",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "threshold": "randfloat(0.2, 0.7, 1)"
              },
              "scenario": "A guard faces direction ({{fx}}, {{fy}}, {{fz}}). A player is detected if the dot product of the guard's facing and the direction to the player is greater than {{threshold}}. The direction to the player is ({{ex}}, {{ey}}, {{ez}}). Is the player detected? (Answer 'yes' or 'no')",
              "solution": "(fx * ex + fy * ey + fz * ez) > threshold ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute dot = guard_facing \u00b7 direction_to_player.",
                "Compare dot to the threshold of {{threshold}}.",
                "If dot > {{threshold}}, the player is within the guard's vision cone."
              ]
            },
            {
              "id": "vec-l7-012",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "threshold": "randfloat(0.2, 0.7, 1)"
              },
              "scenario": "A guard faces direction ({{fx}}, {{fy}}, {{fz}}). A player is detected if the dot product of the guard's facing and the direction to the player is greater than {{threshold}}. The direction to the player is ({{ex}}, {{ey}}, {{ez}}). Is the player detected? (Answer 'yes' or 'no')",
              "solution": "(fx * ex + fy * ey + fz * ez) > threshold ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute dot = guard_facing \u00b7 direction_to_player.",
                "Compare dot to the threshold of {{threshold}}.",
                "If dot > {{threshold}}, the player is within the guard's vision cone."
              ]
            },
            {
              "id": "vec-l7-013",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "threshold": "randfloat(0.2, 0.7, 1)"
              },
              "scenario": "A guard faces direction ({{fx}}, {{fy}}, {{fz}}). A player is detected if the dot product of the guard's facing and the direction to the player is greater than {{threshold}}. The direction to the player is ({{ex}}, {{ey}}, {{ez}}). Is the player detected? (Answer 'yes' or 'no')",
              "solution": "(fx * ex + fy * ey + fz * ez) > threshold ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute dot = guard_facing \u00b7 direction_to_player.",
                "Compare dot to the threshold of {{threshold}}.",
                "If dot > {{threshold}}, the player is within the guard's vision cone."
              ]
            },
            {
              "id": "vec-l7-014",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "threshold": "randfloat(0.2, 0.7, 1)"
              },
              "scenario": "A guard faces direction ({{fx}}, {{fy}}, {{fz}}). A player is detected if the dot product of the guard's facing and the direction to the player is greater than {{threshold}}. The direction to the player is ({{ex}}, {{ey}}, {{ez}}). Is the player detected? (Answer 'yes' or 'no')",
              "solution": "(fx * ex + fy * ey + fz * ez) > threshold ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute dot = guard_facing \u00b7 direction_to_player.",
                "Compare dot to the threshold of {{threshold}}.",
                "If dot > {{threshold}}, the player is within the guard's vision cone."
              ]
            },
            {
              "id": "vec-l7-015",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "threshold": "randfloat(0.2, 0.7, 1)"
              },
              "scenario": "A guard faces direction ({{fx}}, {{fy}}, {{fz}}). A player is detected if the dot product of the guard's facing and the direction to the player is greater than {{threshold}}. The direction to the player is ({{ex}}, {{ey}}, {{ez}}). Is the player detected? (Answer 'yes' or 'no')",
              "solution": "(fx * ex + fy * ey + fz * ez) > threshold ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute dot = guard_facing \u00b7 direction_to_player.",
                "Compare dot to the threshold of {{threshold}}.",
                "If dot > {{threshold}}, the player is within the guard's vision cone."
              ]
            },
            {
              "id": "vec-l7-016",
              "level": 7,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "threshold": "randfloat(0.2, 0.7, 1)"
              },
              "scenario": "A guard faces direction ({{fx}}, {{fy}}, {{fz}}). A player is detected if the dot product of the guard's facing and the direction to the player is greater than {{threshold}}. The direction to the player is ({{ex}}, {{ey}}, {{ez}}). Is the player detected? (Answer 'yes' or 'no')",
              "solution": "(fx * ex + fy * ey + fz * ez) > threshold ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute dot = guard_facing \u00b7 direction_to_player.",
                "Compare dot to the threshold of {{threshold}}.",
                "If dot > {{threshold}}, the player is within the guard's vision cone."
              ]
            },
            {
              "id": "vec-l7-017",
              "level": 7,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)"
              },
              "scenario": "An attacker is facing ({{ax}}, {{ay}}, {{az}}). A defender is facing ({{dx}}, {{dy}}, {{dz}}). The attacker gets a backstab bonus if the dot product of their facing with the defender's facing is greater than 0.5 (meaning they're facing roughly the same way, so the attacker is behind the defender). Do they get the bonus? (Answer 'yes' or 'no')",
              "solution": "let d = ax*dx + ay*dy + az*dz; d > 0.5 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two facing directions tells you alignment.",
                "If both face the same direction (dot > 0.5), the attacker is behind the defender.",
                "Compute dot and compare to 0.5."
              ]
            },
            {
              "id": "vec-l7-018",
              "level": 7,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)"
              },
              "scenario": "An attacker is facing ({{ax}}, {{ay}}, {{az}}). A defender is facing ({{dx}}, {{dy}}, {{dz}}). The attacker gets a backstab bonus if the dot product of their facing with the defender's facing is greater than 0.5 (meaning they're facing roughly the same way, so the attacker is behind the defender). Do they get the bonus? (Answer 'yes' or 'no')",
              "solution": "let d = ax*dx + ay*dy + az*dz; d > 0.5 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two facing directions tells you alignment.",
                "If both face the same direction (dot > 0.5), the attacker is behind the defender.",
                "Compute dot and compare to 0.5."
              ]
            },
            {
              "id": "vec-l7-019",
              "level": 7,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)"
              },
              "scenario": "An attacker is facing ({{ax}}, {{ay}}, {{az}}). A defender is facing ({{dx}}, {{dy}}, {{dz}}). The attacker gets a backstab bonus if the dot product of their facing with the defender's facing is greater than 0.5 (meaning they're facing roughly the same way, so the attacker is behind the defender). Do they get the bonus? (Answer 'yes' or 'no')",
              "solution": "let d = ax*dx + ay*dy + az*dz; d > 0.5 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two facing directions tells you alignment.",
                "If both face the same direction (dot > 0.5), the attacker is behind the defender.",
                "Compute dot and compare to 0.5."
              ]
            },
            {
              "id": "vec-l7-020",
              "level": 7,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)"
              },
              "scenario": "An attacker is facing ({{ax}}, {{ay}}, {{az}}). A defender is facing ({{dx}}, {{dy}}, {{dz}}). The attacker gets a backstab bonus if the dot product of their facing with the defender's facing is greater than 0.5 (meaning they're facing roughly the same way, so the attacker is behind the defender). Do they get the bonus? (Answer 'yes' or 'no')",
              "solution": "let d = ax*dx + ay*dy + az*dz; d > 0.5 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two facing directions tells you alignment.",
                "If both face the same direction (dot > 0.5), the attacker is behind the defender.",
                "Compute dot and compare to 0.5."
              ]
            },
            {
              "id": "vec-l7-021",
              "level": 7,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)"
              },
              "scenario": "An attacker is facing ({{ax}}, {{ay}}, {{az}}). A defender is facing ({{dx}}, {{dy}}, {{dz}}). The attacker gets a backstab bonus if the dot product of their facing with the defender's facing is greater than 0.5 (meaning they're facing roughly the same way, so the attacker is behind the defender). Do they get the bonus? (Answer 'yes' or 'no')",
              "solution": "let d = ax*dx + ay*dy + az*dz; d > 0.5 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two facing directions tells you alignment.",
                "If both face the same direction (dot > 0.5), the attacker is behind the defender.",
                "Compute dot and compare to 0.5."
              ]
            },
            {
              "id": "vec-l7-022",
              "level": 7,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)"
              },
              "scenario": "An attacker is facing ({{ax}}, {{ay}}, {{az}}). A defender is facing ({{dx}}, {{dy}}, {{dz}}). The attacker gets a backstab bonus if the dot product of their facing with the defender's facing is greater than 0.5 (meaning they're facing roughly the same way, so the attacker is behind the defender). Do they get the bonus? (Answer 'yes' or 'no')",
              "solution": "let d = ax*dx + ay*dy + az*dz; d > 0.5 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two facing directions tells you alignment.",
                "If both face the same direction (dot > 0.5), the attacker is behind the defender.",
                "Compute dot and compare to 0.5."
              ]
            },
            {
              "id": "vec-l7-023",
              "level": 7,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "randint(-10, 10)"
              },
              "scenario": "An attacker is facing ({{ax}}, {{ay}}, {{az}}). A defender is facing ({{dx}}, {{dy}}, {{dz}}). The attacker gets a backstab bonus if the dot product of their facing with the defender's facing is greater than 0.5 (meaning they're facing roughly the same way, so the attacker is behind the defender). Do they get the bonus? (Answer 'yes' or 'no')",
              "solution": "let d = ax*dx + ay*dy + az*dz; d > 0.5 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two facing directions tells you alignment.",
                "If both face the same direction (dot > 0.5), the attacker is behind the defender.",
                "Compute dot and compare to 0.5."
              ]
            },
            {
              "id": "vec-l7-024",
              "level": 7,
              "params": {
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A plane has a normal vector of the ground: ({{px}}, {{py}}, {{pz}}). The player's velocity is ({{vx}}, {{vy}}, {{vz}}). A dot product close to 1 means the player is moving perpendicular to the surface (straight into it). A dot close to 0 means sliding along it. Is the player mainly sliding along the surface? (yes if |dot| < 0.3, no otherwise). Enter 'yes' or 'no'.",
              "solution": "let dot = abs(px*vx + py*vy + pz*vz); dot < 0.3 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute the absolute dot product of the normal and velocity.",
                "If |dot| < 0.3, the movement is mostly parallel to the surface (sliding).",
                "If |dot| is large, the movement is pushing into or away from the surface."
              ]
            },
            {
              "id": "vec-l7-025",
              "level": 7,
              "params": {
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A plane has a normal vector of the ground: ({{px}}, {{py}}, {{pz}}). The player's velocity is ({{vx}}, {{vy}}, {{vz}}). A dot product close to 1 means the player is moving perpendicular to the surface (straight into it). A dot close to 0 means sliding along it. Is the player mainly sliding along the surface? (yes if |dot| < 0.3, no otherwise). Enter 'yes' or 'no'.",
              "solution": "let dot = abs(px*vx + py*vy + pz*vz); dot < 0.3 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute the absolute dot product of the normal and velocity.",
                "If |dot| < 0.3, the movement is mostly parallel to the surface (sliding).",
                "If |dot| is large, the movement is pushing into or away from the surface."
              ]
            },
            {
              "id": "vec-l7-026",
              "level": 7,
              "params": {
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A plane has a normal vector of the ground: ({{px}}, {{py}}, {{pz}}). The player's velocity is ({{vx}}, {{vy}}, {{vz}}). A dot product close to 1 means the player is moving perpendicular to the surface (straight into it). A dot close to 0 means sliding along it. Is the player mainly sliding along the surface? (yes if |dot| < 0.3, no otherwise). Enter 'yes' or 'no'.",
              "solution": "let dot = abs(px*vx + py*vy + pz*vz); dot < 0.3 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute the absolute dot product of the normal and velocity.",
                "If |dot| < 0.3, the movement is mostly parallel to the surface (sliding).",
                "If |dot| is large, the movement is pushing into or away from the surface."
              ]
            },
            {
              "id": "vec-l7-027",
              "level": 7,
              "params": {
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A plane has a normal vector of the ground: ({{px}}, {{py}}, {{pz}}). The player's velocity is ({{vx}}, {{vy}}, {{vz}}). A dot product close to 1 means the player is moving perpendicular to the surface (straight into it). A dot close to 0 means sliding along it. Is the player mainly sliding along the surface? (yes if |dot| < 0.3, no otherwise). Enter 'yes' or 'no'.",
              "solution": "let dot = abs(px*vx + py*vy + pz*vz); dot < 0.3 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute the absolute dot product of the normal and velocity.",
                "If |dot| < 0.3, the movement is mostly parallel to the surface (sliding).",
                "If |dot| is large, the movement is pushing into or away from the surface."
              ]
            },
            {
              "id": "vec-l7-028",
              "level": 7,
              "params": {
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A plane has a normal vector of the ground: ({{px}}, {{py}}, {{pz}}). The player's velocity is ({{vx}}, {{vy}}, {{vz}}). A dot product close to 1 means the player is moving perpendicular to the surface (straight into it). A dot close to 0 means sliding along it. Is the player mainly sliding along the surface? (yes if |dot| < 0.3, no otherwise). Enter 'yes' or 'no'.",
              "solution": "let dot = abs(px*vx + py*vy + pz*vz); dot < 0.3 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute the absolute dot product of the normal and velocity.",
                "If |dot| < 0.3, the movement is mostly parallel to the surface (sliding).",
                "If |dot| is large, the movement is pushing into or away from the surface."
              ]
            },
            {
              "id": "vec-l7-029",
              "level": 7,
              "params": {
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A plane has a normal vector of the ground: ({{px}}, {{py}}, {{pz}}). The player's velocity is ({{vx}}, {{vy}}, {{vz}}). A dot product close to 1 means the player is moving perpendicular to the surface (straight into it). A dot close to 0 means sliding along it. Is the player mainly sliding along the surface? (yes if |dot| < 0.3, no otherwise). Enter 'yes' or 'no'.",
              "solution": "let dot = abs(px*vx + py*vy + pz*vz); dot < 0.3 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute the absolute dot product of the normal and velocity.",
                "If |dot| < 0.3, the movement is mostly parallel to the surface (sliding).",
                "If |dot| is large, the movement is pushing into or away from the surface."
              ]
            },
            {
              "id": "vec-l7-030",
              "level": 7,
              "params": {
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "Two cars have velocity vectors ({{v1x}}, {{v1y}}, {{v1z}}) and ({{v2x}}, {{v2y}}, {{v2z}}). Are they heading toward each other (a head-on collision course)? (Answer 'yes' if the dot product is negative, 'no' if positive)",
              "solution": "(v1x * v2x + v1y * v2y + v1z * v2z) < 0 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two velocity vectors: if negative, they're moving in opposite directions.",
                "A negative dot means the angle between them is > 90\u00b0, so they approach each other.",
                "Calculate dot = v1x*v2x + v1y*v2y + v1z*v2z. Negative = toward each other."
              ]
            },
            {
              "id": "vec-l7-031",
              "level": 7,
              "params": {
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "Two cars have velocity vectors ({{v1x}}, {{v1y}}, {{v1z}}) and ({{v2x}}, {{v2y}}, {{v2z}}). Are they heading toward each other (a head-on collision course)? (Answer 'yes' if the dot product is negative, 'no' if positive)",
              "solution": "(v1x * v2x + v1y * v2y + v1z * v2z) < 0 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two velocity vectors: if negative, they're moving in opposite directions.",
                "A negative dot means the angle between them is > 90\u00b0, so they approach each other.",
                "Calculate dot = v1x*v2x + v1y*v2y + v1z*v2z. Negative = toward each other."
              ]
            },
            {
              "id": "vec-l7-032",
              "level": 7,
              "params": {
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "Two cars have velocity vectors ({{v1x}}, {{v1y}}, {{v1z}}) and ({{v2x}}, {{v2y}}, {{v2z}}). Are they heading toward each other (a head-on collision course)? (Answer 'yes' if the dot product is negative, 'no' if positive)",
              "solution": "(v1x * v2x + v1y * v2y + v1z * v2z) < 0 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two velocity vectors: if negative, they're moving in opposite directions.",
                "A negative dot means the angle between them is > 90\u00b0, so they approach each other.",
                "Calculate dot = v1x*v2x + v1y*v2y + v1z*v2z. Negative = toward each other."
              ]
            },
            {
              "id": "vec-l7-033",
              "level": 7,
              "params": {
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "Two cars have velocity vectors ({{v1x}}, {{v1y}}, {{v1z}}) and ({{v2x}}, {{v2y}}, {{v2z}}). Are they heading toward each other (a head-on collision course)? (Answer 'yes' if the dot product is negative, 'no' if positive)",
              "solution": "(v1x * v2x + v1y * v2y + v1z * v2z) < 0 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two velocity vectors: if negative, they're moving in opposite directions.",
                "A negative dot means the angle between them is > 90\u00b0, so they approach each other.",
                "Calculate dot = v1x*v2x + v1y*v2y + v1z*v2z. Negative = toward each other."
              ]
            },
            {
              "id": "vec-l7-034",
              "level": 7,
              "params": {
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "Two cars have velocity vectors ({{v1x}}, {{v1y}}, {{v1z}}) and ({{v2x}}, {{v2y}}, {{v2z}}). Are they heading toward each other (a head-on collision course)? (Answer 'yes' if the dot product is negative, 'no' if positive)",
              "solution": "(v1x * v2x + v1y * v2y + v1z * v2z) < 0 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two velocity vectors: if negative, they're moving in opposite directions.",
                "A negative dot means the angle between them is > 90\u00b0, so they approach each other.",
                "Calculate dot = v1x*v2x + v1y*v2y + v1z*v2z. Negative = toward each other."
              ]
            },
            {
              "id": "vec-l7-035",
              "level": 7,
              "params": {
                "v1x": "randint(-10, 10)",
                "v1y": "randint(-10, 10)",
                "v1z": "randint(-10, 10)",
                "v2x": "randint(-10, 10)",
                "v2y": "randint(-10, 10)",
                "v2z": "randint(-10, 10)"
              },
              "scenario": "Two cars have velocity vectors ({{v1x}}, {{v1y}}, {{v1z}}) and ({{v2x}}, {{v2y}}, {{v2z}}). Are they heading toward each other (a head-on collision course)? (Answer 'yes' if the dot product is negative, 'no' if positive)",
              "solution": "(v1x * v2x + v1y * v2y + v1z * v2z) < 0 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two velocity vectors: if negative, they're moving in opposite directions.",
                "A negative dot means the angle between them is > 90\u00b0, so they approach each other.",
                "Calculate dot = v1x*v2x + v1y*v2y + v1z*v2z. Negative = toward each other."
              ]
            }
          ]
        },
        {
          "level": 8,
          "title": "Dot Product \u2014 Angle Between",
          "questions": [
            {
              "id": "vec-l8-001",
              "level": 8,
              "params": {
                "f1x": "randint(-10, 10)",
                "f1y": "randint(-10, 10)",
                "f1z": "randint(-10, 10)",
                "f2x": "randint(-10, 10)",
                "f2y": "randint(-10, 10)",
                "f2z": "randint(-10, 10)"
              },
              "scenario": "A character is facing direction A = ({{f1x}}, {{f1y}}, {{f1z}}) and wants to face direction B = ({{f2x}}, {{f2y}}, {{f2z}}). What is the angle (in degrees) between these two directions? Round to 1 decimal.",
              "solution": "let d = f1x*f2x + f1y*f2y + f1z*f2z; let m1 = sqrt(f1x*f1x + f1y*f1y + f1z*f1z); let m2 = sqrt(f2x*f2x + f2y*f2y + f2z*f2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Angle between vectors: theta = arccos((A\u00b7B) / (|A|*|B|)).",
                "Compute dot product, then divide by product of magnitudes.",
                "Then use arccos and convert from radians to degrees (multiply by 180/PI)."
              ]
            },
            {
              "id": "vec-l8-002",
              "level": 8,
              "params": {
                "f1x": "randint(-10, 10)",
                "f1y": "randint(-10, 10)",
                "f1z": "randint(-10, 10)",
                "f2x": "randint(-10, 10)",
                "f2y": "randint(-10, 10)",
                "f2z": "randint(-10, 10)"
              },
              "scenario": "A character is facing direction A = ({{f1x}}, {{f1y}}, {{f1z}}) and wants to face direction B = ({{f2x}}, {{f2y}}, {{f2z}}). What is the angle (in degrees) between these two directions? Round to 1 decimal.",
              "solution": "let d = f1x*f2x + f1y*f2y + f1z*f2z; let m1 = sqrt(f1x*f1x + f1y*f1y + f1z*f1z); let m2 = sqrt(f2x*f2x + f2y*f2y + f2z*f2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Angle between vectors: theta = arccos((A\u00b7B) / (|A|*|B|)).",
                "Compute dot product, then divide by product of magnitudes.",
                "Then use arccos and convert from radians to degrees (multiply by 180/PI)."
              ]
            },
            {
              "id": "vec-l8-003",
              "level": 8,
              "params": {
                "f1x": "randint(-10, 10)",
                "f1y": "randint(-10, 10)",
                "f1z": "randint(-10, 10)",
                "f2x": "randint(-10, 10)",
                "f2y": "randint(-10, 10)",
                "f2z": "randint(-10, 10)"
              },
              "scenario": "A character is facing direction A = ({{f1x}}, {{f1y}}, {{f1z}}) and wants to face direction B = ({{f2x}}, {{f2y}}, {{f2z}}). What is the angle (in degrees) between these two directions? Round to 1 decimal.",
              "solution": "let d = f1x*f2x + f1y*f2y + f1z*f2z; let m1 = sqrt(f1x*f1x + f1y*f1y + f1z*f1z); let m2 = sqrt(f2x*f2x + f2y*f2y + f2z*f2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Angle between vectors: theta = arccos((A\u00b7B) / (|A|*|B|)).",
                "Compute dot product, then divide by product of magnitudes.",
                "Then use arccos and convert from radians to degrees (multiply by 180/PI)."
              ]
            },
            {
              "id": "vec-l8-004",
              "level": 8,
              "params": {
                "f1x": "randint(-10, 10)",
                "f1y": "randint(-10, 10)",
                "f1z": "randint(-10, 10)",
                "f2x": "randint(-10, 10)",
                "f2y": "randint(-10, 10)",
                "f2z": "randint(-10, 10)"
              },
              "scenario": "A character is facing direction A = ({{f1x}}, {{f1y}}, {{f1z}}) and wants to face direction B = ({{f2x}}, {{f2y}}, {{f2z}}). What is the angle (in degrees) between these two directions? Round to 1 decimal.",
              "solution": "let d = f1x*f2x + f1y*f2y + f1z*f2z; let m1 = sqrt(f1x*f1x + f1y*f1y + f1z*f1z); let m2 = sqrt(f2x*f2x + f2y*f2y + f2z*f2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Angle between vectors: theta = arccos((A\u00b7B) / (|A|*|B|)).",
                "Compute dot product, then divide by product of magnitudes.",
                "Then use arccos and convert from radians to degrees (multiply by 180/PI)."
              ]
            },
            {
              "id": "vec-l8-005",
              "level": 8,
              "params": {
                "f1x": "randint(-10, 10)",
                "f1y": "randint(-10, 10)",
                "f1z": "randint(-10, 10)",
                "f2x": "randint(-10, 10)",
                "f2y": "randint(-10, 10)",
                "f2z": "randint(-10, 10)"
              },
              "scenario": "A character is facing direction A = ({{f1x}}, {{f1y}}, {{f1z}}) and wants to face direction B = ({{f2x}}, {{f2y}}, {{f2z}}). What is the angle (in degrees) between these two directions? Round to 1 decimal.",
              "solution": "let d = f1x*f2x + f1y*f2y + f1z*f2z; let m1 = sqrt(f1x*f1x + f1y*f1y + f1z*f1z); let m2 = sqrt(f2x*f2x + f2y*f2y + f2z*f2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Angle between vectors: theta = arccos((A\u00b7B) / (|A|*|B|)).",
                "Compute dot product, then divide by product of magnitudes.",
                "Then use arccos and convert from radians to degrees (multiply by 180/PI)."
              ]
            },
            {
              "id": "vec-l8-006",
              "level": 8,
              "params": {
                "f1x": "randint(-10, 10)",
                "f1y": "randint(-10, 10)",
                "f1z": "randint(-10, 10)",
                "f2x": "randint(-10, 10)",
                "f2y": "randint(-10, 10)",
                "f2z": "randint(-10, 10)"
              },
              "scenario": "A character is facing direction A = ({{f1x}}, {{f1y}}, {{f1z}}) and wants to face direction B = ({{f2x}}, {{f2y}}, {{f2z}}). What is the angle (in degrees) between these two directions? Round to 1 decimal.",
              "solution": "let d = f1x*f2x + f1y*f2y + f1z*f2z; let m1 = sqrt(f1x*f1x + f1y*f1y + f1z*f1z); let m2 = sqrt(f2x*f2x + f2y*f2y + f2z*f2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Angle between vectors: theta = arccos((A\u00b7B) / (|A|*|B|)).",
                "Compute dot product, then divide by product of magnitudes.",
                "Then use arccos and convert from radians to degrees (multiply by 180/PI)."
              ]
            },
            {
              "id": "vec-l8-007",
              "level": 8,
              "params": {
                "f1x": "randint(-10, 10)",
                "f1y": "randint(-10, 10)",
                "f1z": "randint(-10, 10)",
                "f2x": "randint(-10, 10)",
                "f2y": "randint(-10, 10)",
                "f2z": "randint(-10, 10)"
              },
              "scenario": "A character is facing direction A = ({{f1x}}, {{f1y}}, {{f1z}}) and wants to face direction B = ({{f2x}}, {{f2y}}, {{f2z}}). What is the angle (in degrees) between these two directions? Round to 1 decimal.",
              "solution": "let d = f1x*f2x + f1y*f2y + f1z*f2z; let m1 = sqrt(f1x*f1x + f1y*f1y + f1z*f1z); let m2 = sqrt(f2x*f2x + f2y*f2y + f2z*f2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Angle between vectors: theta = arccos((A\u00b7B) / (|A|*|B|)).",
                "Compute dot product, then divide by product of magnitudes.",
                "Then use arccos and convert from radians to degrees (multiply by 180/PI)."
              ]
            },
            {
              "id": "vec-l8-008",
              "level": 8,
              "params": {
                "f1x": "randint(-10, 10)",
                "f1y": "randint(-10, 10)",
                "f1z": "randint(-10, 10)",
                "f2x": "randint(-10, 10)",
                "f2y": "randint(-10, 10)",
                "f2z": "randint(-10, 10)"
              },
              "scenario": "A character is facing direction A = ({{f1x}}, {{f1y}}, {{f1z}}) and wants to face direction B = ({{f2x}}, {{f2y}}, {{f2z}}). What is the angle (in degrees) between these two directions? Round to 1 decimal.",
              "solution": "let d = f1x*f2x + f1y*f2y + f1z*f2z; let m1 = sqrt(f1x*f1x + f1y*f1y + f1z*f1z); let m2 = sqrt(f2x*f2x + f2y*f2y + f2z*f2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Angle between vectors: theta = arccos((A\u00b7B) / (|A|*|B|)).",
                "Compute dot product, then divide by product of magnitudes.",
                "Then use arccos and convert from radians to degrees (multiply by 180/PI)."
              ]
            },
            {
              "id": "vec-l8-009",
              "level": 8,
              "params": {
                "f1x": "randint(-10, 10)",
                "f1y": "randint(-10, 10)",
                "f1z": "randint(-10, 10)",
                "f2x": "randint(-10, 10)",
                "f2y": "randint(-10, 10)",
                "f2z": "randint(-10, 10)"
              },
              "scenario": "A character is facing direction A = ({{f1x}}, {{f1y}}, {{f1z}}) and wants to face direction B = ({{f2x}}, {{f2y}}, {{f2z}}). What is the angle (in degrees) between these two directions? Round to 1 decimal.",
              "solution": "let d = f1x*f2x + f1y*f2y + f1z*f2z; let m1 = sqrt(f1x*f1x + f1y*f1y + f1z*f1z); let m2 = sqrt(f2x*f2x + f2y*f2y + f2z*f2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Angle between vectors: theta = arccos((A\u00b7B) / (|A|*|B|)).",
                "Compute dot product, then divide by product of magnitudes.",
                "Then use arccos and convert from radians to degrees (multiply by 180/PI)."
              ]
            },
            {
              "id": "vec-l8-010",
              "level": 8,
              "params": {
                "f1x": "randint(-10, 10)",
                "f1y": "randint(-10, 10)",
                "f1z": "randint(-10, 10)",
                "f2x": "randint(-10, 10)",
                "f2y": "randint(-10, 10)",
                "f2z": "randint(-10, 10)"
              },
              "scenario": "A character is facing direction A = ({{f1x}}, {{f1y}}, {{f1z}}) and wants to face direction B = ({{f2x}}, {{f2y}}, {{f2z}}). What is the angle (in degrees) between these two directions? Round to 1 decimal.",
              "solution": "let d = f1x*f2x + f1y*f2y + f1z*f2z; let m1 = sqrt(f1x*f1x + f1y*f1y + f1z*f1z); let m2 = sqrt(f2x*f2x + f2y*f2y + f2z*f2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Angle between vectors: theta = arccos((A\u00b7B) / (|A|*|B|)).",
                "Compute dot product, then divide by product of magnitudes.",
                "Then use arccos and convert from radians to degrees (multiply by 180/PI)."
              ]
            },
            {
              "id": "vec-l8-011",
              "level": 8,
              "params": {
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)",
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)"
              },
              "scenario": "A turret at ({{px}}, {{py}}, {{pz}}) currently points in direction ({{fx}}, {{fy}}, {{fz}}). A target is at ({{tx}}, {{ty}}, {{tz}}). How many degrees does the turret need to rotate to face the target? Round to 1 decimal.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "First find the direction from turret to target: target - turret.",
                "Then compute the angle between the turret's facing and the target direction.",
                "Angle = arccos(dot(facing, target_dir) / (|facing| * |target_dir|))."
              ]
            },
            {
              "id": "vec-l8-012",
              "level": 8,
              "params": {
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)",
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)"
              },
              "scenario": "A turret at ({{px}}, {{py}}, {{pz}}) currently points in direction ({{fx}}, {{fy}}, {{fz}}). A target is at ({{tx}}, {{ty}}, {{tz}}). How many degrees does the turret need to rotate to face the target? Round to 1 decimal.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "First find the direction from turret to target: target - turret.",
                "Then compute the angle between the turret's facing and the target direction.",
                "Angle = arccos(dot(facing, target_dir) / (|facing| * |target_dir|))."
              ]
            },
            {
              "id": "vec-l8-013",
              "level": 8,
              "params": {
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)",
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)"
              },
              "scenario": "A turret at ({{px}}, {{py}}, {{pz}}) currently points in direction ({{fx}}, {{fy}}, {{fz}}). A target is at ({{tx}}, {{ty}}, {{tz}}). How many degrees does the turret need to rotate to face the target? Round to 1 decimal.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "First find the direction from turret to target: target - turret.",
                "Then compute the angle between the turret's facing and the target direction.",
                "Angle = arccos(dot(facing, target_dir) / (|facing| * |target_dir|))."
              ]
            },
            {
              "id": "vec-l8-014",
              "level": 8,
              "params": {
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)",
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)"
              },
              "scenario": "A turret at ({{px}}, {{py}}, {{pz}}) currently points in direction ({{fx}}, {{fy}}, {{fz}}). A target is at ({{tx}}, {{ty}}, {{tz}}). How many degrees does the turret need to rotate to face the target? Round to 1 decimal.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "First find the direction from turret to target: target - turret.",
                "Then compute the angle between the turret's facing and the target direction.",
                "Angle = arccos(dot(facing, target_dir) / (|facing| * |target_dir|))."
              ]
            },
            {
              "id": "vec-l8-015",
              "level": 8,
              "params": {
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)",
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)"
              },
              "scenario": "A turret at ({{px}}, {{py}}, {{pz}}) currently points in direction ({{fx}}, {{fy}}, {{fz}}). A target is at ({{tx}}, {{ty}}, {{tz}}). How many degrees does the turret need to rotate to face the target? Round to 1 decimal.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "First find the direction from turret to target: target - turret.",
                "Then compute the angle between the turret's facing and the target direction.",
                "Angle = arccos(dot(facing, target_dir) / (|facing| * |target_dir|))."
              ]
            },
            {
              "id": "vec-l8-016",
              "level": 8,
              "params": {
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)",
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)"
              },
              "scenario": "A turret at ({{px}}, {{py}}, {{pz}}) currently points in direction ({{fx}}, {{fy}}, {{fz}}). A target is at ({{tx}}, {{ty}}, {{tz}}). How many degrees does the turret need to rotate to face the target? Round to 1 decimal.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "First find the direction from turret to target: target - turret.",
                "Then compute the angle between the turret's facing and the target direction.",
                "Angle = arccos(dot(facing, target_dir) / (|facing| * |target_dir|))."
              ]
            },
            {
              "id": "vec-l8-017",
              "level": 8,
              "params": {
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)",
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)"
              },
              "scenario": "A turret at ({{px}}, {{py}}, {{pz}}) currently points in direction ({{fx}}, {{fy}}, {{fz}}). A target is at ({{tx}}, {{ty}}, {{tz}}). How many degrees does the turret need to rotate to face the target? Round to 1 decimal.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "First find the direction from turret to target: target - turret.",
                "Then compute the angle between the turret's facing and the target direction.",
                "Angle = arccos(dot(facing, target_dir) / (|facing| * |target_dir|))."
              ]
            },
            {
              "id": "vec-l8-018",
              "level": 8,
              "params": {
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)",
                "px": "randint(-20, 20)",
                "py": "randint(-20, 20)",
                "pz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)"
              },
              "scenario": "A turret at ({{px}}, {{py}}, {{pz}}) currently points in direction ({{fx}}, {{fy}}, {{fz}}). A target is at ({{tx}}, {{ty}}, {{tz}}). How many degrees does the turret need to rotate to face the target? Round to 1 decimal.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "First find the direction from turret to target: target - turret.",
                "Then compute the angle between the turret's facing and the target direction.",
                "Angle = arccos(dot(facing, target_dir) / (|facing| * |target_dir|))."
              ]
            },
            {
              "id": "vec-l8-019",
              "level": 8,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "arc": "randint(30, 120, 10)"
              },
              "scenario": "A melee swing covers an arc of {{arc}} degrees (half-angle = {{arc/2}}\u00b0). The attacker faces ({{fx}}, {{fy}}, {{fz}}). The target is in direction ({{ex}}, {{ey}}, {{ez}}). The angle between facing and target direction is calculated. Is the target within the swing arc? (Angle between them <= {{arc/2}}\u00b0) Answer 'yes' or 'no'.",
              "solution": "let d = fx*ex + fy*ey + fz*ez; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(ex*ex + ey*ey + ez*ez); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (arc / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the angle between the attack direction and the direction to the target.",
                "Compare this angle to half the swing arc ({{arc}}\u00b0/2 = {{arc/2}}\u00b0).",
                "If angle <= {{arc/2}}\u00b0, the target gets hit."
              ]
            },
            {
              "id": "vec-l8-020",
              "level": 8,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "arc": "randint(30, 120, 10)"
              },
              "scenario": "A melee swing covers an arc of {{arc}} degrees (half-angle = {{arc/2}}\u00b0). The attacker faces ({{fx}}, {{fy}}, {{fz}}). The target is in direction ({{ex}}, {{ey}}, {{ez}}). The angle between facing and target direction is calculated. Is the target within the swing arc? (Angle between them <= {{arc/2}}\u00b0) Answer 'yes' or 'no'.",
              "solution": "let d = fx*ex + fy*ey + fz*ez; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(ex*ex + ey*ey + ez*ez); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (arc / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the angle between the attack direction and the direction to the target.",
                "Compare this angle to half the swing arc ({{arc}}\u00b0/2 = {{arc/2}}\u00b0).",
                "If angle <= {{arc/2}}\u00b0, the target gets hit."
              ]
            },
            {
              "id": "vec-l8-021",
              "level": 8,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "arc": "randint(30, 120, 10)"
              },
              "scenario": "A melee swing covers an arc of {{arc}} degrees (half-angle = {{arc/2}}\u00b0). The attacker faces ({{fx}}, {{fy}}, {{fz}}). The target is in direction ({{ex}}, {{ey}}, {{ez}}). The angle between facing and target direction is calculated. Is the target within the swing arc? (Angle between them <= {{arc/2}}\u00b0) Answer 'yes' or 'no'.",
              "solution": "let d = fx*ex + fy*ey + fz*ez; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(ex*ex + ey*ey + ez*ez); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (arc / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the angle between the attack direction and the direction to the target.",
                "Compare this angle to half the swing arc ({{arc}}\u00b0/2 = {{arc/2}}\u00b0).",
                "If angle <= {{arc/2}}\u00b0, the target gets hit."
              ]
            },
            {
              "id": "vec-l8-022",
              "level": 8,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "arc": "randint(30, 120, 10)"
              },
              "scenario": "A melee swing covers an arc of {{arc}} degrees (half-angle = {{arc/2}}\u00b0). The attacker faces ({{fx}}, {{fy}}, {{fz}}). The target is in direction ({{ex}}, {{ey}}, {{ez}}). The angle between facing and target direction is calculated. Is the target within the swing arc? (Angle between them <= {{arc/2}}\u00b0) Answer 'yes' or 'no'.",
              "solution": "let d = fx*ex + fy*ey + fz*ez; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(ex*ex + ey*ey + ez*ez); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (arc / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the angle between the attack direction and the direction to the target.",
                "Compare this angle to half the swing arc ({{arc}}\u00b0/2 = {{arc/2}}\u00b0).",
                "If angle <= {{arc/2}}\u00b0, the target gets hit."
              ]
            },
            {
              "id": "vec-l8-023",
              "level": 8,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "arc": "randint(30, 120, 10)"
              },
              "scenario": "A melee swing covers an arc of {{arc}} degrees (half-angle = {{arc/2}}\u00b0). The attacker faces ({{fx}}, {{fy}}, {{fz}}). The target is in direction ({{ex}}, {{ey}}, {{ez}}). The angle between facing and target direction is calculated. Is the target within the swing arc? (Angle between them <= {{arc/2}}\u00b0) Answer 'yes' or 'no'.",
              "solution": "let d = fx*ex + fy*ey + fz*ez; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(ex*ex + ey*ey + ez*ez); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (arc / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the angle between the attack direction and the direction to the target.",
                "Compare this angle to half the swing arc ({{arc}}\u00b0/2 = {{arc/2}}\u00b0).",
                "If angle <= {{arc/2}}\u00b0, the target gets hit."
              ]
            },
            {
              "id": "vec-l8-024",
              "level": 8,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "arc": "randint(30, 120, 10)"
              },
              "scenario": "A melee swing covers an arc of {{arc}} degrees (half-angle = {{arc/2}}\u00b0). The attacker faces ({{fx}}, {{fy}}, {{fz}}). The target is in direction ({{ex}}, {{ey}}, {{ez}}). The angle between facing and target direction is calculated. Is the target within the swing arc? (Angle between them <= {{arc/2}}\u00b0) Answer 'yes' or 'no'.",
              "solution": "let d = fx*ex + fy*ey + fz*ez; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(ex*ex + ey*ey + ez*ez); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (arc / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the angle between the attack direction and the direction to the target.",
                "Compare this angle to half the swing arc ({{arc}}\u00b0/2 = {{arc/2}}\u00b0).",
                "If angle <= {{arc/2}}\u00b0, the target gets hit."
              ]
            },
            {
              "id": "vec-l8-025",
              "level": 8,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ex": "randint(-10, 10)",
                "ey": "randint(-10, 10)",
                "ez": "randint(-10, 10)",
                "arc": "randint(30, 120, 10)"
              },
              "scenario": "A melee swing covers an arc of {{arc}} degrees (half-angle = {{arc/2}}\u00b0). The attacker faces ({{fx}}, {{fy}}, {{fz}}). The target is in direction ({{ex}}, {{ey}}, {{ez}}). The angle between facing and target direction is calculated. Is the target within the swing arc? (Angle between them <= {{arc/2}}\u00b0) Answer 'yes' or 'no'.",
              "solution": "let d = fx*ex + fy*ey + fz*ez; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(ex*ex + ey*ey + ez*ez); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (arc / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the angle between the attack direction and the direction to the target.",
                "Compare this angle to half the swing arc ({{arc}}\u00b0/2 = {{arc/2}}\u00b0).",
                "If angle <= {{arc/2}}\u00b0, the target gets hit."
              ]
            },
            {
              "id": "vec-l8-026",
              "level": 8,
              "params": {
                "sx": "randint(-20, 20)",
                "sy": "randint(-20, 20)",
                "sz": "randint(-20, 20)",
                "lx": "randint(-20, 20)",
                "ly": "randint(-20, 20)",
                "lz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "cone": "randint(30, 90, 10)"
              },
              "scenario": "A listener at ({{lx}}, {{ly}}, {{lz}}) is facing ({{fx}}, {{fy}}, {{fz}}) and has a hearing cone of {{cone}} degrees (half-angle = {{cone/2}}\u00b0). A sound source is at ({{sx}}, {{sy}}, {{sz}}). Is the sound source within the hearing cone? Answer 'yes' or 'no'.",
              "solution": "let dx = sx - lx; let dy = sy - ly; let dz = sz - lz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (cone / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Find direction from listener to sound: sound - listener.",
                "Compute angle between listener's facing and direction to sound.",
                "If angle <= half the hearing cone ({{cone}}\u00b0/2 = {{cone/2}}\u00b0), the sound is heard."
              ]
            },
            {
              "id": "vec-l8-027",
              "level": 8,
              "params": {
                "sx": "randint(-20, 20)",
                "sy": "randint(-20, 20)",
                "sz": "randint(-20, 20)",
                "lx": "randint(-20, 20)",
                "ly": "randint(-20, 20)",
                "lz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "cone": "randint(30, 90, 10)"
              },
              "scenario": "A listener at ({{lx}}, {{ly}}, {{lz}}) is facing ({{fx}}, {{fy}}, {{fz}}) and has a hearing cone of {{cone}} degrees (half-angle = {{cone/2}}\u00b0). A sound source is at ({{sx}}, {{sy}}, {{sz}}). Is the sound source within the hearing cone? Answer 'yes' or 'no'.",
              "solution": "let dx = sx - lx; let dy = sy - ly; let dz = sz - lz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (cone / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Find direction from listener to sound: sound - listener.",
                "Compute angle between listener's facing and direction to sound.",
                "If angle <= half the hearing cone ({{cone}}\u00b0/2 = {{cone/2}}\u00b0), the sound is heard."
              ]
            },
            {
              "id": "vec-l8-028",
              "level": 8,
              "params": {
                "sx": "randint(-20, 20)",
                "sy": "randint(-20, 20)",
                "sz": "randint(-20, 20)",
                "lx": "randint(-20, 20)",
                "ly": "randint(-20, 20)",
                "lz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "cone": "randint(30, 90, 10)"
              },
              "scenario": "A listener at ({{lx}}, {{ly}}, {{lz}}) is facing ({{fx}}, {{fy}}, {{fz}}) and has a hearing cone of {{cone}} degrees (half-angle = {{cone/2}}\u00b0). A sound source is at ({{sx}}, {{sy}}, {{sz}}). Is the sound source within the hearing cone? Answer 'yes' or 'no'.",
              "solution": "let dx = sx - lx; let dy = sy - ly; let dz = sz - lz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (cone / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Find direction from listener to sound: sound - listener.",
                "Compute angle between listener's facing and direction to sound.",
                "If angle <= half the hearing cone ({{cone}}\u00b0/2 = {{cone/2}}\u00b0), the sound is heard."
              ]
            },
            {
              "id": "vec-l8-029",
              "level": 8,
              "params": {
                "sx": "randint(-20, 20)",
                "sy": "randint(-20, 20)",
                "sz": "randint(-20, 20)",
                "lx": "randint(-20, 20)",
                "ly": "randint(-20, 20)",
                "lz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "cone": "randint(30, 90, 10)"
              },
              "scenario": "A listener at ({{lx}}, {{ly}}, {{lz}}) is facing ({{fx}}, {{fy}}, {{fz}}) and has a hearing cone of {{cone}} degrees (half-angle = {{cone/2}}\u00b0). A sound source is at ({{sx}}, {{sy}}, {{sz}}). Is the sound source within the hearing cone? Answer 'yes' or 'no'.",
              "solution": "let dx = sx - lx; let dy = sy - ly; let dz = sz - lz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (cone / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Find direction from listener to sound: sound - listener.",
                "Compute angle between listener's facing and direction to sound.",
                "If angle <= half the hearing cone ({{cone}}\u00b0/2 = {{cone/2}}\u00b0), the sound is heard."
              ]
            },
            {
              "id": "vec-l8-030",
              "level": 8,
              "params": {
                "sx": "randint(-20, 20)",
                "sy": "randint(-20, 20)",
                "sz": "randint(-20, 20)",
                "lx": "randint(-20, 20)",
                "ly": "randint(-20, 20)",
                "lz": "randint(-20, 20)",
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "cone": "randint(30, 90, 10)"
              },
              "scenario": "A listener at ({{lx}}, {{ly}}, {{lz}}) is facing ({{fx}}, {{fy}}, {{fz}}) and has a hearing cone of {{cone}} degrees (half-angle = {{cone/2}}\u00b0). A sound source is at ({{sx}}, {{sy}}, {{sz}}). Is the sound source within the hearing cone? Answer 'yes' or 'no'.",
              "solution": "let dx = sx - lx; let dy = sy - ly; let dz = sz - lz; let d = fx*dx + fy*dy + fz*dz; let m1 = sqrt(fx*fx + fy*fy + fz*fz); let m2 = sqrt(dx*dx + dy*dy + dz*dz); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); let angle = acos(cClamped) * 180 / PI; angle <= (cone / 2) ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Find direction from listener to sound: sound - listener.",
                "Compute angle between listener's facing and direction to sound.",
                "If angle <= half the hearing cone ({{cone}}\u00b0/2 = {{cone/2}}\u00b0), the sound is heard."
              ]
            },
            {
              "id": "vec-l8-031",
              "level": 8,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "az": "randint(-15, 15)",
                "e1x": "randint(-15, 15)",
                "e1y": "randint(-15, 15)",
                "e1z": "randint(-15, 15)",
                "e2x": "randint(-15, 15)",
                "e2y": "randint(-15, 15)",
                "e2z": "randint(-15, 15)"
              },
              "scenario": "An ally at ({{ax}}, {{ay}}, {{az}}) aims at enemy 1 at ({{e1x}}, {{e1y}}, {{e1z}}), then swings to aim at enemy 2 at ({{e2x}}, {{e2y}}, {{e2z}}). What is the angle (in degrees) between the two aim directions? Round to 1 decimal.",
              "solution": "let d1x = e1x - ax; let d1y = e1y - ay; let d1z = e1z - az; let d2x = e2x - ax; let d2y = e2y - ay; let d2z = e2z - az; let d = d1x*d2x + d1y*d2y + d1z*d2z; let m1 = sqrt(d1x*d1x + d1y*d1y + d1z*d1z); let m2 = sqrt(d2x*d2x + d2y*d2y + d2z*d2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Find direction vectors from ally to each enemy.",
                "Then compute the angle between those two direction vectors.",
                "Angle = arccos(dot(dir1, dir2) / (|dir1| * |dir2|))."
              ]
            },
            {
              "id": "vec-l8-032",
              "level": 8,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "az": "randint(-15, 15)",
                "e1x": "randint(-15, 15)",
                "e1y": "randint(-15, 15)",
                "e1z": "randint(-15, 15)",
                "e2x": "randint(-15, 15)",
                "e2y": "randint(-15, 15)",
                "e2z": "randint(-15, 15)"
              },
              "scenario": "An ally at ({{ax}}, {{ay}}, {{az}}) aims at enemy 1 at ({{e1x}}, {{e1y}}, {{e1z}}), then swings to aim at enemy 2 at ({{e2x}}, {{e2y}}, {{e2z}}). What is the angle (in degrees) between the two aim directions? Round to 1 decimal.",
              "solution": "let d1x = e1x - ax; let d1y = e1y - ay; let d1z = e1z - az; let d2x = e2x - ax; let d2y = e2y - ay; let d2z = e2z - az; let d = d1x*d2x + d1y*d2y + d1z*d2z; let m1 = sqrt(d1x*d1x + d1y*d1y + d1z*d1z); let m2 = sqrt(d2x*d2x + d2y*d2y + d2z*d2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Find direction vectors from ally to each enemy.",
                "Then compute the angle between those two direction vectors.",
                "Angle = arccos(dot(dir1, dir2) / (|dir1| * |dir2|))."
              ]
            },
            {
              "id": "vec-l8-033",
              "level": 8,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "az": "randint(-15, 15)",
                "e1x": "randint(-15, 15)",
                "e1y": "randint(-15, 15)",
                "e1z": "randint(-15, 15)",
                "e2x": "randint(-15, 15)",
                "e2y": "randint(-15, 15)",
                "e2z": "randint(-15, 15)"
              },
              "scenario": "An ally at ({{ax}}, {{ay}}, {{az}}) aims at enemy 1 at ({{e1x}}, {{e1y}}, {{e1z}}), then swings to aim at enemy 2 at ({{e2x}}, {{e2y}}, {{e2z}}). What is the angle (in degrees) between the two aim directions? Round to 1 decimal.",
              "solution": "let d1x = e1x - ax; let d1y = e1y - ay; let d1z = e1z - az; let d2x = e2x - ax; let d2y = e2y - ay; let d2z = e2z - az; let d = d1x*d2x + d1y*d2y + d1z*d2z; let m1 = sqrt(d1x*d1x + d1y*d1y + d1z*d1z); let m2 = sqrt(d2x*d2x + d2y*d2y + d2z*d2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Find direction vectors from ally to each enemy.",
                "Then compute the angle between those two direction vectors.",
                "Angle = arccos(dot(dir1, dir2) / (|dir1| * |dir2|))."
              ]
            },
            {
              "id": "vec-l8-034",
              "level": 8,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "az": "randint(-15, 15)",
                "e1x": "randint(-15, 15)",
                "e1y": "randint(-15, 15)",
                "e1z": "randint(-15, 15)",
                "e2x": "randint(-15, 15)",
                "e2y": "randint(-15, 15)",
                "e2z": "randint(-15, 15)"
              },
              "scenario": "An ally at ({{ax}}, {{ay}}, {{az}}) aims at enemy 1 at ({{e1x}}, {{e1y}}, {{e1z}}), then swings to aim at enemy 2 at ({{e2x}}, {{e2y}}, {{e2z}}). What is the angle (in degrees) between the two aim directions? Round to 1 decimal.",
              "solution": "let d1x = e1x - ax; let d1y = e1y - ay; let d1z = e1z - az; let d2x = e2x - ax; let d2y = e2y - ay; let d2z = e2z - az; let d = d1x*d2x + d1y*d2y + d1z*d2z; let m1 = sqrt(d1x*d1x + d1y*d1y + d1z*d1z); let m2 = sqrt(d2x*d2x + d2y*d2y + d2z*d2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Find direction vectors from ally to each enemy.",
                "Then compute the angle between those two direction vectors.",
                "Angle = arccos(dot(dir1, dir2) / (|dir1| * |dir2|))."
              ]
            },
            {
              "id": "vec-l8-035",
              "level": 8,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "az": "randint(-15, 15)",
                "e1x": "randint(-15, 15)",
                "e1y": "randint(-15, 15)",
                "e1z": "randint(-15, 15)",
                "e2x": "randint(-15, 15)",
                "e2y": "randint(-15, 15)",
                "e2z": "randint(-15, 15)"
              },
              "scenario": "An ally at ({{ax}}, {{ay}}, {{az}}) aims at enemy 1 at ({{e1x}}, {{e1y}}, {{e1z}}), then swings to aim at enemy 2 at ({{e2x}}, {{e2y}}, {{e2z}}). What is the angle (in degrees) between the two aim directions? Round to 1 decimal.",
              "solution": "let d1x = e1x - ax; let d1y = e1y - ay; let d1z = e1z - az; let d2x = e2x - ax; let d2y = e2y - ay; let d2z = e2z - az; let d = d1x*d2x + d1y*d2y + d1z*d2z; let m1 = sqrt(d1x*d1x + d1y*d1y + d1z*d1z); let m2 = sqrt(d2x*d2x + d2y*d2y + d2z*d2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Find direction vectors from ally to each enemy.",
                "Then compute the angle between those two direction vectors.",
                "Angle = arccos(dot(dir1, dir2) / (|dir1| * |dir2|))."
              ]
            }
          ]
        },
        {
          "level": 9,
          "title": "Coordinate Systems",
          "questions": [
            {
              "id": "vec-l9-c01",
              "level": 9,
              "params": {
                "fx": "randint(-8,8)",
                "fy": "randint(-8,8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). World up is (0, 1, 0). Compute the RIGHT vector using cross(forward, up). Normalize. Round to 3 decimals.",
              "solution": "let ux=0;let uy=1;let uz=0;let rx=fy*uz - fz*uy;let ry=fz*ux - fx*uz;let rz=fx*uy - fy*ux;let mag=sqrt(rx*rx+ry*ry+rz*rz);[rx/mag,ry/mag,rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up).",
                "cross = (fy\u00d7uz - fz\u00d7uy, fz\u00d7ux - fx\u00d7uz, fx\u00d7uy - fy\u00d7ux)."
              ]
            },
            {
              "id": "vec-l9-c02",
              "level": 9,
              "params": {
                "fx": "randint(-8,8)",
                "fy": "randint(-8,8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). World up is (0, 1, 0). Compute the RIGHT vector using cross(forward, up). Normalize. Round to 3 decimals.",
              "solution": "let ux=0;let uy=1;let uz=0;let rx=fy*uz - fz*uy;let ry=fz*ux - fx*uz;let rz=fx*uy - fy*ux;let mag=sqrt(rx*rx+ry*ry+rz*rz);[rx/mag,ry/mag,rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up).",
                "cross = (fy\u00d7uz - fz\u00d7uy, fz\u00d7ux - fx\u00d7uz, fx\u00d7uy - fy\u00d7ux)."
              ]
            },
            {
              "id": "vec-l9-c03",
              "level": 9,
              "params": {
                "fx": "randint(-8,8)",
                "fy": "randint(-8,8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). World up is (0, 1, 0). Compute the RIGHT vector using cross(forward, up). Normalize. Round to 3 decimals.",
              "solution": "let ux=0;let uy=1;let uz=0;let rx=fy*uz - fz*uy;let ry=fz*ux - fx*uz;let rz=fx*uy - fy*ux;let mag=sqrt(rx*rx+ry*ry+rz*rz);[rx/mag,ry/mag,rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up).",
                "cross = (fy\u00d7uz - fz\u00d7uy, fz\u00d7ux - fx\u00d7uz, fx\u00d7uy - fy\u00d7ux)."
              ]
            },
            {
              "id": "vec-l9-c04",
              "level": 9,
              "params": {
                "fx": "randint(-8,8)",
                "fy": "randint(-8,8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). World up is (0, 1, 0). Compute the RIGHT vector using cross(forward, up). Normalize. Round to 3 decimals.",
              "solution": "let ux=0;let uy=1;let uz=0;let rx=fy*uz - fz*uy;let ry=fz*ux - fx*uz;let rz=fx*uy - fy*ux;let mag=sqrt(rx*rx+ry*ry+rz*rz);[rx/mag,ry/mag,rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up).",
                "cross = (fy\u00d7uz - fz\u00d7uy, fz\u00d7ux - fx\u00d7uz, fx\u00d7uy - fy\u00d7ux)."
              ]
            },
            {
              "id": "vec-l9-c05",
              "level": 9,
              "params": {
                "fx": "randint(-8,8)",
                "fy": "randint(-8,8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). World up is (0, 1, 0). Compute the RIGHT vector using cross(forward, up). Normalize. Round to 3 decimals.",
              "solution": "let ux=0;let uy=1;let uz=0;let rx=fy*uz - fz*uy;let ry=fz*ux - fx*uz;let rz=fx*uy - fy*ux;let mag=sqrt(rx*rx+ry*ry+rz*rz);[rx/mag,ry/mag,rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up).",
                "cross = (fy\u00d7uz - fz\u00d7uy, fz\u00d7ux - fx\u00d7uz, fx\u00d7uy - fy\u00d7ux)."
              ]
            },
            {
              "id": "vec-l9-c06",
              "level": 9,
              "params": {
                "px": "randint(-15,15)",
                "py": "randint(-15,15)",
                "pz": "randint(-15,15)"
              },
              "scenario": "A point in Blender (Z-up, Y-forward, X-right) is ({{px}}, {{py}}, {{pz}}). Convert to Unreal Engine coordinates (Z-up, X-forward, Y-right). Round to 1 decimal.",
              "solution": "[-py, px, pz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "UE forward (+X) = Blender's Y axis. UE right (+Y) = Blender's X axis.",
                "X_UE = -Y_Blender, Y_UE = X_Blender, Z stays the same."
              ]
            },
            {
              "id": "vec-l9-c07",
              "level": 9,
              "params": {
                "px": "randint(-15,15)",
                "py": "randint(-15,15)",
                "pz": "randint(-15,15)"
              },
              "scenario": "A point in Blender (Z-up, Y-forward, X-right) is ({{px}}, {{py}}, {{pz}}). Convert to Unreal Engine coordinates (Z-up, X-forward, Y-right). Round to 1 decimal.",
              "solution": "[-py, px, pz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "UE forward (+X) = Blender's Y axis. UE right (+Y) = Blender's X axis.",
                "X_UE = -Y_Blender, Y_UE = X_Blender, Z stays the same."
              ]
            },
            {
              "id": "vec-l9-c08",
              "level": 9,
              "params": {
                "px": "randint(-15,15)",
                "py": "randint(-15,15)",
                "pz": "randint(-15,15)"
              },
              "scenario": "A point in Blender (Z-up, Y-forward, X-right) is ({{px}}, {{py}}, {{pz}}). Convert to Unreal Engine coordinates (Z-up, X-forward, Y-right). Round to 1 decimal.",
              "solution": "[-py, px, pz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "UE forward (+X) = Blender's Y axis. UE right (+Y) = Blender's X axis.",
                "X_UE = -Y_Blender, Y_UE = X_Blender, Z stays the same."
              ]
            },
            {
              "id": "vec-l9-c09",
              "level": 9,
              "params": {
                "px": "randint(-15,15)",
                "py": "randint(-15,15)",
                "pz": "randint(-15,15)"
              },
              "scenario": "A point in Blender (Z-up, Y-forward, X-right) is ({{px}}, {{py}}, {{pz}}). Convert to Unreal Engine coordinates (Z-up, X-forward, Y-right). Round to 1 decimal.",
              "solution": "[-py, px, pz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "UE forward (+X) = Blender's Y axis. UE right (+Y) = Blender's X axis.",
                "X_UE = -Y_Blender, Y_UE = X_Blender, Z stays the same."
              ]
            },
            {
              "id": "vec-l9-c10",
              "level": 9,
              "params": {
                "px": "randint(-15,15)",
                "py": "randint(-15,15)",
                "pz": "randint(-15,15)"
              },
              "scenario": "A point in Blender (Z-up, Y-forward, X-right) is ({{px}}, {{py}}, {{pz}}). Convert to Unreal Engine coordinates (Z-up, X-forward, Y-right). Round to 1 decimal.",
              "solution": "[-py, px, pz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "UE forward (+X) = Blender's Y axis. UE right (+Y) = Blender's X axis.",
                "X_UE = -Y_Blender, Y_UE = X_Blender, Z stays the same."
              ]
            },
            {
              "id": "vec-l9-c11",
              "level": 9,
              "params": {
                "ax": "randint(-10,10)",
                "ay": "randint(-10,10)",
                "az": "randint(-10,10)",
                "bx": "randint(-10,10)",
                "by": "randint(-10,10)",
                "bz": "randint(-10,10)",
                "cx": "randint(-10,10)",
                "cy": "randint(-10,10)",
                "cz": "randint(-10,10)"
              },
              "scenario": "Triangle vertices: A({{ax}},{{ay}},{{az}}), B({{bx}},{{by}},{{bz}}), C({{cx}},{{cy}},{{cz}}). Compute cross(AB, AC). Does the resulting normal face UPWARD (y > 0) or DOWNWARD (y < 0)? (Answer 'upward' or 'downward')",
              "solution": "let abx=bx-ax;let aby=by-ay;let abz=bz-az;let acx=cx-ax;let acy=cy-ay;let acz=cz-az;let ny=abz*acx - abx*acz;ny > 0 ? 'upward' : 'downward'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Cross product gives a perpendicular vector. Check the y-component.",
                "If y > 0, the normal points upward."
              ]
            },
            {
              "id": "vec-l9-c12",
              "level": 9,
              "params": {
                "ax": "randint(-10,10)",
                "ay": "randint(-10,10)",
                "az": "randint(-10,10)",
                "bx": "randint(-10,10)",
                "by": "randint(-10,10)",
                "bz": "randint(-10,10)",
                "cx": "randint(-10,10)",
                "cy": "randint(-10,10)",
                "cz": "randint(-10,10)"
              },
              "scenario": "Triangle vertices: A({{ax}},{{ay}},{{az}}), B({{bx}},{{by}},{{bz}}), C({{cx}},{{cy}},{{cz}}). Compute cross(AB, AC). Does the resulting normal face UPWARD (y > 0) or DOWNWARD (y < 0)? (Answer 'upward' or 'downward')",
              "solution": "let abx=bx-ax;let aby=by-ay;let abz=bz-az;let acx=cx-ax;let acy=cy-ay;let acz=cz-az;let ny=abz*acx - abx*acz;ny > 0 ? 'upward' : 'downward'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Cross product gives a perpendicular vector. Check the y-component.",
                "If y > 0, the normal points upward."
              ]
            },
            {
              "id": "vec-l9-c13",
              "level": 9,
              "params": {
                "ax": "randint(-10,10)",
                "ay": "randint(-10,10)",
                "az": "randint(-10,10)",
                "bx": "randint(-10,10)",
                "by": "randint(-10,10)",
                "bz": "randint(-10,10)",
                "cx": "randint(-10,10)",
                "cy": "randint(-10,10)",
                "cz": "randint(-10,10)"
              },
              "scenario": "Triangle vertices: A({{ax}},{{ay}},{{az}}), B({{bx}},{{by}},{{bz}}), C({{cx}},{{cy}},{{cz}}). Compute cross(AB, AC). Does the resulting normal face UPWARD (y > 0) or DOWNWARD (y < 0)? (Answer 'upward' or 'downward')",
              "solution": "let abx=bx-ax;let aby=by-ay;let abz=bz-az;let acx=cx-ax;let acy=cy-ay;let acz=cz-az;let ny=abz*acx - abx*acz;ny > 0 ? 'upward' : 'downward'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Cross product gives a perpendicular vector. Check the y-component.",
                "If y > 0, the normal points upward."
              ]
            },
            {
              "id": "vec-l9-c14",
              "level": 9,
              "params": {
                "ax": "randint(-10,10)",
                "ay": "randint(-10,10)",
                "az": "randint(-10,10)",
                "bx": "randint(-10,10)",
                "by": "randint(-10,10)",
                "bz": "randint(-10,10)",
                "cx": "randint(-10,10)",
                "cy": "randint(-10,10)",
                "cz": "randint(-10,10)"
              },
              "scenario": "Triangle vertices: A({{ax}},{{ay}},{{az}}), B({{bx}},{{by}},{{bz}}), C({{cx}},{{cy}},{{cz}}). Compute cross(AB, AC). Does the resulting normal face UPWARD (y > 0) or DOWNWARD (y < 0)? (Answer 'upward' or 'downward')",
              "solution": "let abx=bx-ax;let aby=by-ay;let abz=bz-az;let acx=cx-ax;let acy=cy-ay;let acz=cz-az;let ny=abz*acx - abx*acz;ny > 0 ? 'upward' : 'downward'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Cross product gives a perpendicular vector. Check the y-component.",
                "If y > 0, the normal points upward."
              ]
            },
            {
              "id": "vec-l9-c15",
              "level": 9,
              "params": {
                "fx": "randint(-6,6)",
                "fy": "randint(-6,6)",
                "fz": "randint(-6,6)"
              },
              "scenario": "In a left-handed system (Unreal), a character faces ({{fx}}, {{fy}}, {{fz}}) and up is (0, 0, 1). Compute the RIGHT vector = cross(up, forward). Normalize. Round to 3 decimals.",
              "solution": "let ux=0;let uy=0;let uz=1;let rx=uy*fz - uz*fy;let ry=uz*fx - ux*fz;let rz=ux*fy - uy*fx;let mag=sqrt(rx*rx+ry*ry+rz*rz);[rx/mag,ry/mag,rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Left-handed: right = cross(up, forward).",
                "cross((0,0,1), ({{fx}},{{fy}},{{fz}})). Then normalize."
              ]
            },
            {
              "id": "vec-l9-c16",
              "level": 9,
              "params": {
                "fx": "randint(-6,6)",
                "fy": "randint(-6,6)",
                "fz": "randint(-6,6)"
              },
              "scenario": "In a left-handed system (Unreal), a character faces ({{fx}}, {{fy}}, {{fz}}) and up is (0, 0, 1). Compute the RIGHT vector = cross(up, forward). Normalize. Round to 3 decimals.",
              "solution": "let ux=0;let uy=0;let uz=1;let rx=uy*fz - uz*fy;let ry=uz*fx - ux*fz;let rz=ux*fy - uy*fx;let mag=sqrt(rx*rx+ry*ry+rz*rz);[rx/mag,ry/mag,rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Left-handed: right = cross(up, forward).",
                "cross((0,0,1), ({{fx}},{{fy}},{{fz}})). Then normalize."
              ]
            },
            {
              "id": "vec-l9-c17",
              "level": 9,
              "params": {
                "fx": "randint(-6,6)",
                "fy": "randint(-6,6)",
                "fz": "randint(-6,6)"
              },
              "scenario": "In a left-handed system (Unreal), a character faces ({{fx}}, {{fy}}, {{fz}}) and up is (0, 0, 1). Compute the RIGHT vector = cross(up, forward). Normalize. Round to 3 decimals.",
              "solution": "let ux=0;let uy=0;let uz=1;let rx=uy*fz - uz*fy;let ry=uz*fx - ux*fz;let rz=ux*fy - uy*fx;let mag=sqrt(rx*rx+ry*ry+rz*rz);[rx/mag,ry/mag,rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Left-handed: right = cross(up, forward).",
                "cross((0,0,1), ({{fx}},{{fy}},{{fz}})). Then normalize."
              ]
            },
            {
              "id": "vec-l9-c18",
              "level": 9,
              "params": {
                "fx": "randint(-8,8)",
                "fy": "randint(-8,8)",
                "fz": "randint(-8,8)",
                "rx": "randint(-8,8)",
                "ry": "randint(-8,8)",
                "rz": "0"
              },
              "scenario": "A player faces ({{fx}}, {{fy}}, {{fz}}). Their RIGHT vector is ({{rx}}, {{ry}}, 0). In a left-handed system with up=(0,0,1), is this right vector correct? (Compute cross(up, forward) and compare within \u00b10.5). Answer 'yes' or 'no'.",
              "solution": "let cx=0*fz-1*fy;let cy=1*fx-0*fz;let cz=0*fy-0*fx;abs(cx-rx)<0.5 && abs(cy-ry)<0.5 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute correct right: cross((0,0,1), forward) = (-fy, fx, 0).",
                "Compare to ({{rx}}, {{ry}}, 0) within 0.5 per component."
              ]
            },
            {
              "id": "vec-l9-c19",
              "level": 9,
              "params": {
                "fx": "randint(-8,8)",
                "fy": "randint(-8,8)",
                "fz": "randint(-8,8)",
                "rx": "randint(-8,8)",
                "ry": "randint(-8,8)",
                "rz": "0"
              },
              "scenario": "A player faces ({{fx}}, {{fy}}, {{fz}}). Their RIGHT vector is ({{rx}}, {{ry}}, 0). In a left-handed system with up=(0,0,1), is this right vector correct? (Compute cross(up, forward) and compare within \u00b10.5). Answer 'yes' or 'no'.",
              "solution": "let cx=0*fz-1*fy;let cy=1*fx-0*fz;let cz=0*fy-0*fx;abs(cx-rx)<0.5 && abs(cy-ry)<0.5 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute correct right: cross((0,0,1), forward) = (-fy, fx, 0).",
                "Compare to ({{rx}}, {{ry}}, 0) within 0.5 per component."
              ]
            },
            {
              "id": "vec-l9-c20",
              "level": 9,
              "params": {
                "fx": "randint(-8,8)",
                "fy": "randint(-8,8)",
                "fz": "randint(-8,8)",
                "rx": "randint(-8,8)",
                "ry": "randint(-8,8)",
                "rz": "0"
              },
              "scenario": "A player faces ({{fx}}, {{fy}}, {{fz}}). Their RIGHT vector is ({{rx}}, {{ry}}, 0). In a left-handed system with up=(0,0,1), is this right vector correct? (Compute cross(up, forward) and compare within \u00b10.5). Answer 'yes' or 'no'.",
              "solution": "let cx=0*fz-1*fy;let cy=1*fx-0*fz;let cz=0*fy-0*fx;abs(cx-rx)<0.5 && abs(cy-ry)<0.5 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Compute correct right: cross((0,0,1), forward) = (-fy, fx, 0).",
                "Compare to ({{rx}}, {{ry}}, 0) within 0.5 per component."
              ]
            }
          ]
        },
        {
          "level": 10,
          "title": "Cross Product \u2014 Left/Right",
          "questions": [
            {
              "id": "vec-l10-001",
              "level": 10,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "0",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "0"
              },
              "scenario": "A player faces direction ({{fx}}, {{fy}}, 0). An enemy is at offset ({{dx}}, {{dy}}, 0) relative to the player. Compute the Z-component of the cross product (facing \u00d7 offset). If positive, the enemy is to the LEFT. If negative, to the RIGHT. Which side is the enemy on?",
              "solution": "(fx * dy - fy * dx) > 0 ? 'left' : ((fx * dy - fy * dx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product in 2D: z-component = fx * dy - fy * dx.",
                "If z > 0, the vector is to the left. If z < 0, to the right.",
                "Compute {{fx}} * {{dy}} - {{fy}} * {{dx}}. Sign tells the side."
              ]
            },
            {
              "id": "vec-l10-002",
              "level": 10,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "0",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "0"
              },
              "scenario": "A player faces direction ({{fx}}, {{fy}}, 0). An enemy is at offset ({{dx}}, {{dy}}, 0) relative to the player. Compute the Z-component of the cross product (facing \u00d7 offset). If positive, the enemy is to the LEFT. If negative, to the RIGHT. Which side is the enemy on?",
              "solution": "(fx * dy - fy * dx) > 0 ? 'left' : ((fx * dy - fy * dx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product in 2D: z-component = fx * dy - fy * dx.",
                "If z > 0, the vector is to the left. If z < 0, to the right.",
                "Compute {{fx}} * {{dy}} - {{fy}} * {{dx}}. Sign tells the side."
              ]
            },
            {
              "id": "vec-l10-003",
              "level": 10,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "0",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "0"
              },
              "scenario": "A player faces direction ({{fx}}, {{fy}}, 0). An enemy is at offset ({{dx}}, {{dy}}, 0) relative to the player. Compute the Z-component of the cross product (facing \u00d7 offset). If positive, the enemy is to the LEFT. If negative, to the RIGHT. Which side is the enemy on?",
              "solution": "(fx * dy - fy * dx) > 0 ? 'left' : ((fx * dy - fy * dx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product in 2D: z-component = fx * dy - fy * dx.",
                "If z > 0, the vector is to the left. If z < 0, to the right.",
                "Compute {{fx}} * {{dy}} - {{fy}} * {{dx}}. Sign tells the side."
              ]
            },
            {
              "id": "vec-l10-004",
              "level": 10,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "0",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "0"
              },
              "scenario": "A player faces direction ({{fx}}, {{fy}}, 0). An enemy is at offset ({{dx}}, {{dy}}, 0) relative to the player. Compute the Z-component of the cross product (facing \u00d7 offset). If positive, the enemy is to the LEFT. If negative, to the RIGHT. Which side is the enemy on?",
              "solution": "(fx * dy - fy * dx) > 0 ? 'left' : ((fx * dy - fy * dx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product in 2D: z-component = fx * dy - fy * dx.",
                "If z > 0, the vector is to the left. If z < 0, to the right.",
                "Compute {{fx}} * {{dy}} - {{fy}} * {{dx}}. Sign tells the side."
              ]
            },
            {
              "id": "vec-l10-005",
              "level": 10,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "0",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "0"
              },
              "scenario": "A player faces direction ({{fx}}, {{fy}}, 0). An enemy is at offset ({{dx}}, {{dy}}, 0) relative to the player. Compute the Z-component of the cross product (facing \u00d7 offset). If positive, the enemy is to the LEFT. If negative, to the RIGHT. Which side is the enemy on?",
              "solution": "(fx * dy - fy * dx) > 0 ? 'left' : ((fx * dy - fy * dx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product in 2D: z-component = fx * dy - fy * dx.",
                "If z > 0, the vector is to the left. If z < 0, to the right.",
                "Compute {{fx}} * {{dy}} - {{fy}} * {{dx}}. Sign tells the side."
              ]
            },
            {
              "id": "vec-l10-006",
              "level": 10,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "0",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "0"
              },
              "scenario": "A player faces direction ({{fx}}, {{fy}}, 0). An enemy is at offset ({{dx}}, {{dy}}, 0) relative to the player. Compute the Z-component of the cross product (facing \u00d7 offset). If positive, the enemy is to the LEFT. If negative, to the RIGHT. Which side is the enemy on?",
              "solution": "(fx * dy - fy * dx) > 0 ? 'left' : ((fx * dy - fy * dx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product in 2D: z-component = fx * dy - fy * dx.",
                "If z > 0, the vector is to the left. If z < 0, to the right.",
                "Compute {{fx}} * {{dy}} - {{fy}} * {{dx}}. Sign tells the side."
              ]
            },
            {
              "id": "vec-l10-007",
              "level": 10,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "0",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "0"
              },
              "scenario": "A player faces direction ({{fx}}, {{fy}}, 0). An enemy is at offset ({{dx}}, {{dy}}, 0) relative to the player. Compute the Z-component of the cross product (facing \u00d7 offset). If positive, the enemy is to the LEFT. If negative, to the RIGHT. Which side is the enemy on?",
              "solution": "(fx * dy - fy * dx) > 0 ? 'left' : ((fx * dy - fy * dx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product in 2D: z-component = fx * dy - fy * dx.",
                "If z > 0, the vector is to the left. If z < 0, to the right.",
                "Compute {{fx}} * {{dy}} - {{fy}} * {{dx}}. Sign tells the side."
              ]
            },
            {
              "id": "vec-l10-008",
              "level": 10,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "0",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "0"
              },
              "scenario": "A player faces direction ({{fx}}, {{fy}}, 0). An enemy is at offset ({{dx}}, {{dy}}, 0) relative to the player. Compute the Z-component of the cross product (facing \u00d7 offset). If positive, the enemy is to the LEFT. If negative, to the RIGHT. Which side is the enemy on?",
              "solution": "(fx * dy - fy * dx) > 0 ? 'left' : ((fx * dy - fy * dx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product in 2D: z-component = fx * dy - fy * dx.",
                "If z > 0, the vector is to the left. If z < 0, to the right.",
                "Compute {{fx}} * {{dy}} - {{fy}} * {{dx}}. Sign tells the side."
              ]
            },
            {
              "id": "vec-l10-009",
              "level": 10,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "0",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "0"
              },
              "scenario": "A player faces direction ({{fx}}, {{fy}}, 0). An enemy is at offset ({{dx}}, {{dy}}, 0) relative to the player. Compute the Z-component of the cross product (facing \u00d7 offset). If positive, the enemy is to the LEFT. If negative, to the RIGHT. Which side is the enemy on?",
              "solution": "(fx * dy - fy * dx) > 0 ? 'left' : ((fx * dy - fy * dx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product in 2D: z-component = fx * dy - fy * dx.",
                "If z > 0, the vector is to the left. If z < 0, to the right.",
                "Compute {{fx}} * {{dy}} - {{fy}} * {{dx}}. Sign tells the side."
              ]
            },
            {
              "id": "vec-l10-010",
              "level": 10,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "0",
                "dx": "randint(-10, 10)",
                "dy": "randint(-10, 10)",
                "dz": "0"
              },
              "scenario": "A player faces direction ({{fx}}, {{fy}}, 0). An enemy is at offset ({{dx}}, {{dy}}, 0) relative to the player. Compute the Z-component of the cross product (facing \u00d7 offset). If positive, the enemy is to the LEFT. If negative, to the RIGHT. Which side is the enemy on?",
              "solution": "(fx * dy - fy * dx) > 0 ? 'left' : ((fx * dy - fy * dx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product in 2D: z-component = fx * dy - fy * dx.",
                "If z > 0, the vector is to the left. If z < 0, to the right.",
                "Compute {{fx}} * {{dy}} - {{fy}} * {{dx}}. Sign tells the side."
              ]
            },
            {
              "id": "vec-l10-011",
              "level": 10,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "bx": "randint(-15, 15)",
                "by": "randint(-15, 15)",
                "cx": "randint(-15, 15)",
                "cy": "randint(-15, 15)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ]
            },
            {
              "id": "vec-l10-012",
              "level": 10,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "bx": "randint(-15, 15)",
                "by": "randint(-15, 15)",
                "cx": "randint(-15, 15)",
                "cy": "randint(-15, 15)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ]
            },
            {
              "id": "vec-l10-013",
              "level": 10,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "bx": "randint(-15, 15)",
                "by": "randint(-15, 15)",
                "cx": "randint(-15, 15)",
                "cy": "randint(-15, 15)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ]
            },
            {
              "id": "vec-l10-014",
              "level": 10,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "bx": "randint(-15, 15)",
                "by": "randint(-15, 15)",
                "cx": "randint(-15, 15)",
                "cy": "randint(-15, 15)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ]
            },
            {
              "id": "vec-l10-015",
              "level": 10,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "bx": "randint(-15, 15)",
                "by": "randint(-15, 15)",
                "cx": "randint(-15, 15)",
                "cy": "randint(-15, 15)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ]
            },
            {
              "id": "vec-l10-016",
              "level": 10,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "bx": "randint(-15, 15)",
                "by": "randint(-15, 15)",
                "cx": "randint(-15, 15)",
                "cy": "randint(-15, 15)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ]
            },
            {
              "id": "vec-l10-017",
              "level": 10,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "bx": "randint(-15, 15)",
                "by": "randint(-15, 15)",
                "cx": "randint(-15, 15)",
                "cy": "randint(-15, 15)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ]
            },
            {
              "id": "vec-l10-018",
              "level": 10,
              "params": {
                "ax": "randint(-15, 15)",
                "ay": "randint(-15, 15)",
                "bx": "randint(-15, 15)",
                "by": "randint(-15, 15)",
                "cx": "randint(-15, 15)",
                "cy": "randint(-15, 15)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ]
            },
            {
              "id": "vec-l10-019",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). They want to strafe RIGHT. What is the unit right vector? (In a left-handed coordinate system, right = cross(down, forward) where down = (0, -1, 0)). Use 2D: rotate forward 90\u00b0 clockwise: right = (fy, -fx). Normalize and round to 3 decimals.",
              "solution": "let nx = fy; let ny = -fx; let mag = sqrt(nx*nx + ny*ny); [nx/mag, ny/mag, 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "In 2D, rotating a vector 90\u00b0 clockwise: (x, y) \u2192 (y, -x).",
                "Right = rotate forward 90\u00b0 clockwise: (fy, -fx).",
                "Then normalize: divide by sqrt(fy^2 + (-fx)^2)."
              ]
            },
            {
              "id": "vec-l10-020",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). They want to strafe RIGHT. What is the unit right vector? (In a left-handed coordinate system, right = cross(down, forward) where down = (0, -1, 0)). Use 2D: rotate forward 90\u00b0 clockwise: right = (fy, -fx). Normalize and round to 3 decimals.",
              "solution": "let nx = fy; let ny = -fx; let mag = sqrt(nx*nx + ny*ny); [nx/mag, ny/mag, 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "In 2D, rotating a vector 90\u00b0 clockwise: (x, y) \u2192 (y, -x).",
                "Right = rotate forward 90\u00b0 clockwise: (fy, -fx).",
                "Then normalize: divide by sqrt(fy^2 + (-fx)^2)."
              ]
            },
            {
              "id": "vec-l10-021",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). They want to strafe RIGHT. What is the unit right vector? (In a left-handed coordinate system, right = cross(down, forward) where down = (0, -1, 0)). Use 2D: rotate forward 90\u00b0 clockwise: right = (fy, -fx). Normalize and round to 3 decimals.",
              "solution": "let nx = fy; let ny = -fx; let mag = sqrt(nx*nx + ny*ny); [nx/mag, ny/mag, 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "In 2D, rotating a vector 90\u00b0 clockwise: (x, y) \u2192 (y, -x).",
                "Right = rotate forward 90\u00b0 clockwise: (fy, -fx).",
                "Then normalize: divide by sqrt(fy^2 + (-fx)^2)."
              ]
            },
            {
              "id": "vec-l10-022",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). They want to strafe RIGHT. What is the unit right vector? (In a left-handed coordinate system, right = cross(down, forward) where down = (0, -1, 0)). Use 2D: rotate forward 90\u00b0 clockwise: right = (fy, -fx). Normalize and round to 3 decimals.",
              "solution": "let nx = fy; let ny = -fx; let mag = sqrt(nx*nx + ny*ny); [nx/mag, ny/mag, 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "In 2D, rotating a vector 90\u00b0 clockwise: (x, y) \u2192 (y, -x).",
                "Right = rotate forward 90\u00b0 clockwise: (fy, -fx).",
                "Then normalize: divide by sqrt(fy^2 + (-fx)^2)."
              ]
            },
            {
              "id": "vec-l10-023",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). They want to strafe RIGHT. What is the unit right vector? (In a left-handed coordinate system, right = cross(down, forward) where down = (0, -1, 0)). Use 2D: rotate forward 90\u00b0 clockwise: right = (fy, -fx). Normalize and round to 3 decimals.",
              "solution": "let nx = fy; let ny = -fx; let mag = sqrt(nx*nx + ny*ny); [nx/mag, ny/mag, 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "In 2D, rotating a vector 90\u00b0 clockwise: (x, y) \u2192 (y, -x).",
                "Right = rotate forward 90\u00b0 clockwise: (fy, -fx).",
                "Then normalize: divide by sqrt(fy^2 + (-fx)^2)."
              ]
            },
            {
              "id": "vec-l10-024",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). They want to strafe RIGHT. What is the unit right vector? (In a left-handed coordinate system, right = cross(down, forward) where down = (0, -1, 0)). Use 2D: rotate forward 90\u00b0 clockwise: right = (fy, -fx). Normalize and round to 3 decimals.",
              "solution": "let nx = fy; let ny = -fx; let mag = sqrt(nx*nx + ny*ny); [nx/mag, ny/mag, 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "In 2D, rotating a vector 90\u00b0 clockwise: (x, y) \u2192 (y, -x).",
                "Right = rotate forward 90\u00b0 clockwise: (fy, -fx).",
                "Then normalize: divide by sqrt(fy^2 + (-fx)^2)."
              ]
            },
            {
              "id": "vec-l10-025",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0"
              },
              "scenario": "A character faces direction ({{fx}}, {{fy}}, 0). They want to strafe RIGHT. What is the unit right vector? (In a left-handed coordinate system, right = cross(down, forward) where down = (0, -1, 0)). Use 2D: rotate forward 90\u00b0 clockwise: right = (fy, -fx). Normalize and round to 3 decimals.",
              "solution": "let nx = fy; let ny = -fx; let mag = sqrt(nx*nx + ny*ny); [nx/mag, ny/mag, 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "In 2D, rotating a vector 90\u00b0 clockwise: (x, y) \u2192 (y, -x).",
                "Right = rotate forward 90\u00b0 clockwise: (fy, -fx).",
                "Then normalize: divide by sqrt(fy^2 + (-fx)^2)."
              ]
            },
            {
              "id": "vec-l10-026",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0",
                "tx": "randint(-15, 15)",
                "ty": "randint(-15, 15)",
                "tz": "0"
              },
              "scenario": "An AI agent faces direction ({{fx}}, {{fy}}, 0). A target is at relative offset ({{tx}}, {{ty}}, 0). Should the agent turn LEFT or RIGHT to face the target? (Use z-component of cross product).",
              "solution": "(fx * ty - fy * tx) > 0 ? 'left' : ((fx * ty - fy * tx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product z = facing.x * target.y - facing.y * target.x.",
                "If cross z > 0, target is to the left \u2014 turn left.",
                "If cross z < 0, target is to the right \u2014 turn right."
              ]
            },
            {
              "id": "vec-l10-027",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0",
                "tx": "randint(-15, 15)",
                "ty": "randint(-15, 15)",
                "tz": "0"
              },
              "scenario": "An AI agent faces direction ({{fx}}, {{fy}}, 0). A target is at relative offset ({{tx}}, {{ty}}, 0). Should the agent turn LEFT or RIGHT to face the target? (Use z-component of cross product).",
              "solution": "(fx * ty - fy * tx) > 0 ? 'left' : ((fx * ty - fy * tx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product z = facing.x * target.y - facing.y * target.x.",
                "If cross z > 0, target is to the left \u2014 turn left.",
                "If cross z < 0, target is to the right \u2014 turn right."
              ]
            },
            {
              "id": "vec-l10-028",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0",
                "tx": "randint(-15, 15)",
                "ty": "randint(-15, 15)",
                "tz": "0"
              },
              "scenario": "An AI agent faces direction ({{fx}}, {{fy}}, 0). A target is at relative offset ({{tx}}, {{ty}}, 0). Should the agent turn LEFT or RIGHT to face the target? (Use z-component of cross product).",
              "solution": "(fx * ty - fy * tx) > 0 ? 'left' : ((fx * ty - fy * tx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product z = facing.x * target.y - facing.y * target.x.",
                "If cross z > 0, target is to the left \u2014 turn left.",
                "If cross z < 0, target is to the right \u2014 turn right."
              ]
            },
            {
              "id": "vec-l10-029",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0",
                "tx": "randint(-15, 15)",
                "ty": "randint(-15, 15)",
                "tz": "0"
              },
              "scenario": "An AI agent faces direction ({{fx}}, {{fy}}, 0). A target is at relative offset ({{tx}}, {{ty}}, 0). Should the agent turn LEFT or RIGHT to face the target? (Use z-component of cross product).",
              "solution": "(fx * ty - fy * tx) > 0 ? 'left' : ((fx * ty - fy * tx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product z = facing.x * target.y - facing.y * target.x.",
                "If cross z > 0, target is to the left \u2014 turn left.",
                "If cross z < 0, target is to the right \u2014 turn right."
              ]
            },
            {
              "id": "vec-l10-030",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0",
                "tx": "randint(-15, 15)",
                "ty": "randint(-15, 15)",
                "tz": "0"
              },
              "scenario": "An AI agent faces direction ({{fx}}, {{fy}}, 0). A target is at relative offset ({{tx}}, {{ty}}, 0). Should the agent turn LEFT or RIGHT to face the target? (Use z-component of cross product).",
              "solution": "(fx * ty - fy * tx) > 0 ? 'left' : ((fx * ty - fy * tx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Cross product z = facing.x * target.y - facing.y * target.x.",
                "If cross z > 0, target is to the left \u2014 turn left.",
                "If cross z < 0, target is to the right \u2014 turn right."
              ]
            },
            {
              "id": "vec-l10-031",
              "level": 10,
              "params": {
                "ex": "randint(-15, 15)",
                "ey": "randint(-15, 15)",
                "e2x": "randint(-15, 15)",
                "e2y": "randint(-15, 15)",
                "px": "randint(-10, 10)",
                "py": "randint(-10, 10)"
              },
              "scenario": "Player at ({{px}}, {{py}}). Enemy A at ({{ex}}, {{ey}}), Enemy B at ({{e2x}}, {{e2y}}). Looking from the player to Enemy A as the forward direction, is Enemy B to the LEFT or RIGHT?",
              "solution": "let fx = ex - px; let fy = ey - py; let bx = e2x - px; let by = e2y - py; (fx * by - fy * bx) > 0 ? 'left' : ((fx * by - fy * bx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Forward = Enemy A - Player. Direction to B = Enemy B - Player.",
                "Cross product z = forward.x * B.y - forward.y * B.x.",
                "Sign tells whether B is to the left or right of A."
              ]
            },
            {
              "id": "vec-l10-032",
              "level": 10,
              "params": {
                "ex": "randint(-15, 15)",
                "ey": "randint(-15, 15)",
                "e2x": "randint(-15, 15)",
                "e2y": "randint(-15, 15)",
                "px": "randint(-10, 10)",
                "py": "randint(-10, 10)"
              },
              "scenario": "Player at ({{px}}, {{py}}). Enemy A at ({{ex}}, {{ey}}), Enemy B at ({{e2x}}, {{e2y}}). Looking from the player to Enemy A as the forward direction, is Enemy B to the LEFT or RIGHT?",
              "solution": "let fx = ex - px; let fy = ey - py; let bx = e2x - px; let by = e2y - py; (fx * by - fy * bx) > 0 ? 'left' : ((fx * by - fy * bx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Forward = Enemy A - Player. Direction to B = Enemy B - Player.",
                "Cross product z = forward.x * B.y - forward.y * B.x.",
                "Sign tells whether B is to the left or right of A."
              ]
            },
            {
              "id": "vec-l10-033",
              "level": 10,
              "params": {
                "ex": "randint(-15, 15)",
                "ey": "randint(-15, 15)",
                "e2x": "randint(-15, 15)",
                "e2y": "randint(-15, 15)",
                "px": "randint(-10, 10)",
                "py": "randint(-10, 10)"
              },
              "scenario": "Player at ({{px}}, {{py}}). Enemy A at ({{ex}}, {{ey}}), Enemy B at ({{e2x}}, {{e2y}}). Looking from the player to Enemy A as the forward direction, is Enemy B to the LEFT or RIGHT?",
              "solution": "let fx = ex - px; let fy = ey - py; let bx = e2x - px; let by = e2y - py; (fx * by - fy * bx) > 0 ? 'left' : ((fx * by - fy * bx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Forward = Enemy A - Player. Direction to B = Enemy B - Player.",
                "Cross product z = forward.x * B.y - forward.y * B.x.",
                "Sign tells whether B is to the left or right of A."
              ]
            },
            {
              "id": "vec-l10-034",
              "level": 10,
              "params": {
                "ex": "randint(-15, 15)",
                "ey": "randint(-15, 15)",
                "e2x": "randint(-15, 15)",
                "e2y": "randint(-15, 15)",
                "px": "randint(-10, 10)",
                "py": "randint(-10, 10)"
              },
              "scenario": "Player at ({{px}}, {{py}}). Enemy A at ({{ex}}, {{ey}}), Enemy B at ({{e2x}}, {{e2y}}). Looking from the player to Enemy A as the forward direction, is Enemy B to the LEFT or RIGHT?",
              "solution": "let fx = ex - px; let fy = ey - py; let bx = e2x - px; let by = e2y - py; (fx * by - fy * bx) > 0 ? 'left' : ((fx * by - fy * bx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Forward = Enemy A - Player. Direction to B = Enemy B - Player.",
                "Cross product z = forward.x * B.y - forward.y * B.x.",
                "Sign tells whether B is to the left or right of A."
              ]
            },
            {
              "id": "vec-l10-035",
              "level": 10,
              "params": {
                "ex": "randint(-15, 15)",
                "ey": "randint(-15, 15)",
                "e2x": "randint(-15, 15)",
                "e2y": "randint(-15, 15)",
                "px": "randint(-10, 10)",
                "py": "randint(-10, 10)"
              },
              "scenario": "Player at ({{px}}, {{py}}). Enemy A at ({{ex}}, {{ey}}), Enemy B at ({{e2x}}, {{e2y}}). Looking from the player to Enemy A as the forward direction, is Enemy B to the LEFT or RIGHT?",
              "solution": "let fx = ex - px; let fy = ey - py; let bx = e2x - px; let by = e2y - py; (fx * by - fy * bx) > 0 ? 'left' : ((fx * by - fy * bx) < 0 ? 'right' : 'zero')",
              "answerType": "left_right",
              "units": "",
              "hints": [
                "Forward = Enemy A - Player. Direction to B = Enemy B - Player.",
                "Cross product z = forward.x * B.y - forward.y * B.x.",
                "Sign tells whether B is to the left or right of A."
              ]
            }
          ]
        },
        {
          "level": 11,
          "title": "Cross Product \u2014 Surface Normals",
          "questions": [
            {
              "id": "vec-l11-001",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A triangle in a 3D mesh has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the surface normal using cross(AB, AC). Give the non-normalized normal vector.\n(Hint: AB = B-A, AC = C-A, then cross(AB, AC)).",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; [aby*acz - abz*acy, abz*acx - abx*acz, abx*acy - aby*acx]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edge vectors: AB = B - A, AC = C - A.",
                "Cross product: normal = AB \u00d7 AC.",
                "cross = (ABy*ACz - ABz*ACy, ABz*ACx - ABx*ACz, ABx*ACy - ABy*ACx)."
              ]
            },
            {
              "id": "vec-l11-002",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A triangle in a 3D mesh has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the surface normal using cross(AB, AC). Give the non-normalized normal vector.\n(Hint: AB = B-A, AC = C-A, then cross(AB, AC)).",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; [aby*acz - abz*acy, abz*acx - abx*acz, abx*acy - aby*acx]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edge vectors: AB = B - A, AC = C - A.",
                "Cross product: normal = AB \u00d7 AC.",
                "cross = (ABy*ACz - ABz*ACy, ABz*ACx - ABx*ACz, ABx*ACy - ABy*ACx)."
              ]
            },
            {
              "id": "vec-l11-003",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A triangle in a 3D mesh has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the surface normal using cross(AB, AC). Give the non-normalized normal vector.\n(Hint: AB = B-A, AC = C-A, then cross(AB, AC)).",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; [aby*acz - abz*acy, abz*acx - abx*acz, abx*acy - aby*acx]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edge vectors: AB = B - A, AC = C - A.",
                "Cross product: normal = AB \u00d7 AC.",
                "cross = (ABy*ACz - ABz*ACy, ABz*ACx - ABx*ACz, ABx*ACy - ABy*ACx)."
              ]
            },
            {
              "id": "vec-l11-004",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A triangle in a 3D mesh has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the surface normal using cross(AB, AC). Give the non-normalized normal vector.\n(Hint: AB = B-A, AC = C-A, then cross(AB, AC)).",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; [aby*acz - abz*acy, abz*acx - abx*acz, abx*acy - aby*acx]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edge vectors: AB = B - A, AC = C - A.",
                "Cross product: normal = AB \u00d7 AC.",
                "cross = (ABy*ACz - ABz*ACy, ABz*ACx - ABx*ACz, ABx*ACy - ABy*ACx)."
              ]
            },
            {
              "id": "vec-l11-005",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A triangle in a 3D mesh has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the surface normal using cross(AB, AC). Give the non-normalized normal vector.\n(Hint: AB = B-A, AC = C-A, then cross(AB, AC)).",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; [aby*acz - abz*acy, abz*acx - abx*acz, abx*acy - aby*acx]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edge vectors: AB = B - A, AC = C - A.",
                "Cross product: normal = AB \u00d7 AC.",
                "cross = (ABy*ACz - ABz*ACy, ABz*ACx - ABx*ACz, ABx*ACy - ABy*ACx)."
              ]
            },
            {
              "id": "vec-l11-006",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A triangle in a 3D mesh has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the surface normal using cross(AB, AC). Give the non-normalized normal vector.\n(Hint: AB = B-A, AC = C-A, then cross(AB, AC)).",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; [aby*acz - abz*acy, abz*acx - abx*acz, abx*acy - aby*acx]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edge vectors: AB = B - A, AC = C - A.",
                "Cross product: normal = AB \u00d7 AC.",
                "cross = (ABy*ACz - ABz*ACy, ABz*ACx - ABx*ACz, ABx*ACy - ABy*ACx)."
              ]
            },
            {
              "id": "vec-l11-007",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A triangle in a 3D mesh has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the surface normal using cross(AB, AC). Give the non-normalized normal vector.\n(Hint: AB = B-A, AC = C-A, then cross(AB, AC)).",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; [aby*acz - abz*acy, abz*acx - abx*acz, abx*acy - aby*acx]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edge vectors: AB = B - A, AC = C - A.",
                "Cross product: normal = AB \u00d7 AC.",
                "cross = (ABy*ACz - ABz*ACy, ABz*ACx - ABx*ACz, ABx*ACy - ABy*ACx)."
              ]
            },
            {
              "id": "vec-l11-008",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A triangle in a 3D mesh has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the surface normal using cross(AB, AC). Give the non-normalized normal vector.\n(Hint: AB = B-A, AC = C-A, then cross(AB, AC)).",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; [aby*acz - abz*acy, abz*acx - abx*acz, abx*acy - aby*acx]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edge vectors: AB = B - A, AC = C - A.",
                "Cross product: normal = AB \u00d7 AC.",
                "cross = (ABy*ACz - ABz*ACy, ABz*ACx - ABx*ACz, ABx*ACy - ABy*ACx)."
              ]
            },
            {
              "id": "vec-l11-009",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A triangle in a 3D mesh has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the surface normal using cross(AB, AC). Give the non-normalized normal vector.\n(Hint: AB = B-A, AC = C-A, then cross(AB, AC)).",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; [aby*acz - abz*acy, abz*acx - abx*acz, abx*acy - aby*acx]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edge vectors: AB = B - A, AC = C - A.",
                "Cross product: normal = AB \u00d7 AC.",
                "cross = (ABy*ACz - ABz*ACy, ABz*ACx - ABx*ACz, ABx*ACy - ABy*ACx)."
              ]
            },
            {
              "id": "vec-l11-010",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A triangle in a 3D mesh has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the surface normal using cross(AB, AC). Give the non-normalized normal vector.\n(Hint: AB = B-A, AC = C-A, then cross(AB, AC)).",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; [aby*acz - abz*acy, abz*acx - abx*acz, abx*acy - aby*acx]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edge vectors: AB = B - A, AC = C - A.",
                "Cross product: normal = AB \u00d7 AC.",
                "cross = (ABy*ACz - ABz*ACy, ABz*ACx - ABx*ACz, ABx*ACy - ABy*ACx)."
              ]
            },
            {
              "id": "vec-l11-011",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "0",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "0",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(1, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A floor triangle has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the normalized surface normal (unit normal). Round to 3 decimals.",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edges AB and AC, then cross product.",
                "Normalize the resulting normal: divide by its magnitude.",
                "The y-component of the normal tells you how steep the floor is."
              ]
            },
            {
              "id": "vec-l11-012",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "0",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "0",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(1, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A floor triangle has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the normalized surface normal (unit normal). Round to 3 decimals.",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edges AB and AC, then cross product.",
                "Normalize the resulting normal: divide by its magnitude.",
                "The y-component of the normal tells you how steep the floor is."
              ]
            },
            {
              "id": "vec-l11-013",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "0",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "0",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(1, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A floor triangle has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the normalized surface normal (unit normal). Round to 3 decimals.",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edges AB and AC, then cross product.",
                "Normalize the resulting normal: divide by its magnitude.",
                "The y-component of the normal tells you how steep the floor is."
              ]
            },
            {
              "id": "vec-l11-014",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "0",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "0",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(1, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A floor triangle has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the normalized surface normal (unit normal). Round to 3 decimals.",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edges AB and AC, then cross product.",
                "Normalize the resulting normal: divide by its magnitude.",
                "The y-component of the normal tells you how steep the floor is."
              ]
            },
            {
              "id": "vec-l11-015",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "0",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "0",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(1, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A floor triangle has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the normalized surface normal (unit normal). Round to 3 decimals.",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edges AB and AC, then cross product.",
                "Normalize the resulting normal: divide by its magnitude.",
                "The y-component of the normal tells you how steep the floor is."
              ]
            },
            {
              "id": "vec-l11-016",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "0",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "0",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(1, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A floor triangle has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the normalized surface normal (unit normal). Round to 3 decimals.",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edges AB and AC, then cross product.",
                "Normalize the resulting normal: divide by its magnitude.",
                "The y-component of the normal tells you how steep the floor is."
              ]
            },
            {
              "id": "vec-l11-017",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "0",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "0",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(1, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A floor triangle has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the normalized surface normal (unit normal). Round to 3 decimals.",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edges AB and AC, then cross product.",
                "Normalize the resulting normal: divide by its magnitude.",
                "The y-component of the normal tells you how steep the floor is."
              ]
            },
            {
              "id": "vec-l11-018",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "0",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "0",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(1, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A floor triangle has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the normalized surface normal (unit normal). Round to 3 decimals.",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edges AB and AC, then cross product.",
                "Normalize the resulting normal: divide by its magnitude.",
                "The y-component of the normal tells you how steep the floor is."
              ]
            },
            {
              "id": "vec-l11-019",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "0",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "0",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(1, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A floor triangle has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the normalized surface normal (unit normal). Round to 3 decimals.",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edges AB and AC, then cross product.",
                "Normalize the resulting normal: divide by its magnitude.",
                "The y-component of the normal tells you how steep the floor is."
              ]
            },
            {
              "id": "vec-l11-020",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "0",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "0",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(1, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A floor triangle has vertices: A({{ax}}, {{ay}}, {{az}}), B({{bx}}, {{by}}, {{bz}}), C({{cx}}, {{cy}}, {{cz}}). Compute the normalized surface normal (unit normal). Round to 3 decimals.",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Compute edges AB and AC, then cross product.",
                "Normalize the resulting normal: divide by its magnitude.",
                "The y-component of the normal tells you how steep the floor is."
              ]
            },
            {
              "id": "vec-l11-021",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A wall is defined by three points: W1({{ax}}, {{ay}}, {{az}}), W2({{bx}}, {{by}}, {{bz}}), W3({{cx}}, {{cy}}, {{cz}}). A projectile with velocity V = ({{ax+5}}, {{ay-3}}, {{az+2}}) hits this wall. What is the normal of the wall (normalized, rounded to 3 decimals)?",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Wall normal = cross product of two edge vectors on the wall.",
                "Pick W1\u2192W2 and W1\u2192W3 as the edges, compute cross product.",
                "Normalize the result to get the unit normal."
              ]
            },
            {
              "id": "vec-l11-022",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A wall is defined by three points: W1({{ax}}, {{ay}}, {{az}}), W2({{bx}}, {{by}}, {{bz}}), W3({{cx}}, {{cy}}, {{cz}}). A projectile with velocity V = ({{ax+5}}, {{ay-3}}, {{az+2}}) hits this wall. What is the normal of the wall (normalized, rounded to 3 decimals)?",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Wall normal = cross product of two edge vectors on the wall.",
                "Pick W1\u2192W2 and W1\u2192W3 as the edges, compute cross product.",
                "Normalize the result to get the unit normal."
              ]
            },
            {
              "id": "vec-l11-023",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A wall is defined by three points: W1({{ax}}, {{ay}}, {{az}}), W2({{bx}}, {{by}}, {{bz}}), W3({{cx}}, {{cy}}, {{cz}}). A projectile with velocity V = ({{ax+5}}, {{ay-3}}, {{az+2}}) hits this wall. What is the normal of the wall (normalized, rounded to 3 decimals)?",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Wall normal = cross product of two edge vectors on the wall.",
                "Pick W1\u2192W2 and W1\u2192W3 as the edges, compute cross product.",
                "Normalize the result to get the unit normal."
              ]
            },
            {
              "id": "vec-l11-024",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A wall is defined by three points: W1({{ax}}, {{ay}}, {{az}}), W2({{bx}}, {{by}}, {{bz}}), W3({{cx}}, {{cy}}, {{cz}}). A projectile with velocity V = ({{ax+5}}, {{ay-3}}, {{az+2}}) hits this wall. What is the normal of the wall (normalized, rounded to 3 decimals)?",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Wall normal = cross product of two edge vectors on the wall.",
                "Pick W1\u2192W2 and W1\u2192W3 as the edges, compute cross product.",
                "Normalize the result to get the unit normal."
              ]
            },
            {
              "id": "vec-l11-025",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A wall is defined by three points: W1({{ax}}, {{ay}}, {{az}}), W2({{bx}}, {{by}}, {{bz}}), W3({{cx}}, {{cy}}, {{cz}}). A projectile with velocity V = ({{ax+5}}, {{ay-3}}, {{az+2}}) hits this wall. What is the normal of the wall (normalized, rounded to 3 decimals)?",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Wall normal = cross product of two edge vectors on the wall.",
                "Pick W1\u2192W2 and W1\u2192W3 as the edges, compute cross product.",
                "Normalize the result to get the unit normal."
              ]
            },
            {
              "id": "vec-l11-026",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A wall is defined by three points: W1({{ax}}, {{ay}}, {{az}}), W2({{bx}}, {{by}}, {{bz}}), W3({{cx}}, {{cy}}, {{cz}}). A projectile with velocity V = ({{ax+5}}, {{ay-3}}, {{az+2}}) hits this wall. What is the normal of the wall (normalized, rounded to 3 decimals)?",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Wall normal = cross product of two edge vectors on the wall.",
                "Pick W1\u2192W2 and W1\u2192W3 as the edges, compute cross product.",
                "Normalize the result to get the unit normal."
              ]
            },
            {
              "id": "vec-l11-027",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A wall is defined by three points: W1({{ax}}, {{ay}}, {{az}}), W2({{bx}}, {{by}}, {{bz}}), W3({{cx}}, {{cy}}, {{cz}}). A projectile with velocity V = ({{ax+5}}, {{ay-3}}, {{az+2}}) hits this wall. What is the normal of the wall (normalized, rounded to 3 decimals)?",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Wall normal = cross product of two edge vectors on the wall.",
                "Pick W1\u2192W2 and W1\u2192W3 as the edges, compute cross product.",
                "Normalize the result to get the unit normal."
              ]
            },
            {
              "id": "vec-l11-028",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A wall is defined by three points: W1({{ax}}, {{ay}}, {{az}}), W2({{bx}}, {{by}}, {{bz}}), W3({{cx}}, {{cy}}, {{cz}}). A projectile with velocity V = ({{ax+5}}, {{ay-3}}, {{az+2}}) hits this wall. What is the normal of the wall (normalized, rounded to 3 decimals)?",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Wall normal = cross product of two edge vectors on the wall.",
                "Pick W1\u2192W2 and W1\u2192W3 as the edges, compute cross product.",
                "Normalize the result to get the unit normal."
              ]
            },
            {
              "id": "vec-l11-029",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A wall is defined by three points: W1({{ax}}, {{ay}}, {{az}}), W2({{bx}}, {{by}}, {{bz}}), W3({{cx}}, {{cy}}, {{cz}}). A projectile with velocity V = ({{ax+5}}, {{ay-3}}, {{az+2}}) hits this wall. What is the normal of the wall (normalized, rounded to 3 decimals)?",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Wall normal = cross product of two edge vectors on the wall.",
                "Pick W1\u2192W2 and W1\u2192W3 as the edges, compute cross product.",
                "Normalize the result to get the unit normal."
              ]
            },
            {
              "id": "vec-l11-030",
              "level": 11,
              "params": {
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)",
                "bx": "randint(-10, 10)",
                "by": "randint(-10, 10)",
                "bz": "randint(-10, 10)",
                "cx": "randint(-10, 10)",
                "cy": "randint(-10, 10)",
                "cz": "randint(-10, 10)"
              },
              "scenario": "A wall is defined by three points: W1({{ax}}, {{ay}}, {{az}}), W2({{bx}}, {{by}}, {{bz}}), W3({{cx}}, {{cy}}, {{cz}}). A projectile with velocity V = ({{ax+5}}, {{ay-3}}, {{az+2}}) hits this wall. What is the normal of the wall (normalized, rounded to 3 decimals)?",
              "solution": "let abx = bx - ax; let aby = by - ay; let abz = bz - az; let acx = cx - ax; let acy = cy - ay; let acz = cz - az; let nx = aby*acz - abz*acy; let ny = abz*acx - abx*acz; let nz = abx*acy - aby*acx; let mag = sqrt(nx*nx + ny*ny + nz*nz); [nx/mag, ny/mag, nz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Wall normal = cross product of two edge vectors on the wall.",
                "Pick W1\u2192W2 and W1\u2192W3 as the edges, compute cross product.",
                "Normalize the result to get the unit normal."
              ]
            }
          ]
        },
        {
          "level": 12,
          "title": "Reflection",
          "questions": [
            {
              "id": "vec-l12-001",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A projectile with velocity ({{vx}}, {{vy}}, {{vz}}) hits a surface with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected velocity vector? (Use formula R = V - 2*(V\u00b7N)*N). Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; [vx - 2*s*nx, vy - 2*s*ny, vz - 2*s*nz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflection formula: R = V - 2*(V\u00b7N)*N (if N is normalized).",
                "If N is not normalized: R = V - 2*(V\u00b7N)/(N\u00b7N)*N.",
                "Compute dot product, scale factor, subtract from V."
              ]
            },
            {
              "id": "vec-l12-002",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A projectile with velocity ({{vx}}, {{vy}}, {{vz}}) hits a surface with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected velocity vector? (Use formula R = V - 2*(V\u00b7N)*N). Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; [vx - 2*s*nx, vy - 2*s*ny, vz - 2*s*nz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflection formula: R = V - 2*(V\u00b7N)*N (if N is normalized).",
                "If N is not normalized: R = V - 2*(V\u00b7N)/(N\u00b7N)*N.",
                "Compute dot product, scale factor, subtract from V."
              ]
            },
            {
              "id": "vec-l12-003",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A projectile with velocity ({{vx}}, {{vy}}, {{vz}}) hits a surface with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected velocity vector? (Use formula R = V - 2*(V\u00b7N)*N). Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; [vx - 2*s*nx, vy - 2*s*ny, vz - 2*s*nz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflection formula: R = V - 2*(V\u00b7N)*N (if N is normalized).",
                "If N is not normalized: R = V - 2*(V\u00b7N)/(N\u00b7N)*N.",
                "Compute dot product, scale factor, subtract from V."
              ]
            },
            {
              "id": "vec-l12-004",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A projectile with velocity ({{vx}}, {{vy}}, {{vz}}) hits a surface with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected velocity vector? (Use formula R = V - 2*(V\u00b7N)*N). Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; [vx - 2*s*nx, vy - 2*s*ny, vz - 2*s*nz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflection formula: R = V - 2*(V\u00b7N)*N (if N is normalized).",
                "If N is not normalized: R = V - 2*(V\u00b7N)/(N\u00b7N)*N.",
                "Compute dot product, scale factor, subtract from V."
              ]
            },
            {
              "id": "vec-l12-005",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A projectile with velocity ({{vx}}, {{vy}}, {{vz}}) hits a surface with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected velocity vector? (Use formula R = V - 2*(V\u00b7N)*N). Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; [vx - 2*s*nx, vy - 2*s*ny, vz - 2*s*nz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflection formula: R = V - 2*(V\u00b7N)*N (if N is normalized).",
                "If N is not normalized: R = V - 2*(V\u00b7N)/(N\u00b7N)*N.",
                "Compute dot product, scale factor, subtract from V."
              ]
            },
            {
              "id": "vec-l12-006",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A projectile with velocity ({{vx}}, {{vy}}, {{vz}}) hits a surface with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected velocity vector? (Use formula R = V - 2*(V\u00b7N)*N). Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; [vx - 2*s*nx, vy - 2*s*ny, vz - 2*s*nz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflection formula: R = V - 2*(V\u00b7N)*N (if N is normalized).",
                "If N is not normalized: R = V - 2*(V\u00b7N)/(N\u00b7N)*N.",
                "Compute dot product, scale factor, subtract from V."
              ]
            },
            {
              "id": "vec-l12-007",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A projectile with velocity ({{vx}}, {{vy}}, {{vz}}) hits a surface with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected velocity vector? (Use formula R = V - 2*(V\u00b7N)*N). Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; [vx - 2*s*nx, vy - 2*s*ny, vz - 2*s*nz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflection formula: R = V - 2*(V\u00b7N)*N (if N is normalized).",
                "If N is not normalized: R = V - 2*(V\u00b7N)/(N\u00b7N)*N.",
                "Compute dot product, scale factor, subtract from V."
              ]
            },
            {
              "id": "vec-l12-008",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A projectile with velocity ({{vx}}, {{vy}}, {{vz}}) hits a surface with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected velocity vector? (Use formula R = V - 2*(V\u00b7N)*N). Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; [vx - 2*s*nx, vy - 2*s*ny, vz - 2*s*nz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflection formula: R = V - 2*(V\u00b7N)*N (if N is normalized).",
                "If N is not normalized: R = V - 2*(V\u00b7N)/(N\u00b7N)*N.",
                "Compute dot product, scale factor, subtract from V."
              ]
            },
            {
              "id": "vec-l12-009",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A projectile with velocity ({{vx}}, {{vy}}, {{vz}}) hits a surface with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected velocity vector? (Use formula R = V - 2*(V\u00b7N)*N). Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; [vx - 2*s*nx, vy - 2*s*ny, vz - 2*s*nz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflection formula: R = V - 2*(V\u00b7N)*N (if N is normalized).",
                "If N is not normalized: R = V - 2*(V\u00b7N)/(N\u00b7N)*N.",
                "Compute dot product, scale factor, subtract from V."
              ]
            },
            {
              "id": "vec-l12-010",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A projectile with velocity ({{vx}}, {{vy}}, {{vz}}) hits a surface with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected velocity vector? (Use formula R = V - 2*(V\u00b7N)*N). Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; [vx - 2*s*nx, vy - 2*s*ny, vz - 2*s*nz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflection formula: R = V - 2*(V\u00b7N)*N (if N is normalized).",
                "If N is not normalized: R = V - 2*(V\u00b7N)/(N\u00b7N)*N.",
                "Compute dot product, scale factor, subtract from V."
              ]
            },
            {
              "id": "vec-l12-011",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-15, -2)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A ball is thrown with velocity ({{vx}}, {{vy}}, {{vz}}) and hits the ground (normal = (0, 1, 0)). Assuming perfect bounce, what is the reflected velocity? Round to 1 decimal.",
              "solution": "[vx, -vy, vz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "With a flat ground (normal (0,1,0)), reflection inverts the y-component.",
                "R = V - 2*(V\u00b7N)*N. V\u00b7N = vy. So R = (vx, vy - 2*vy, vz) = (vx, -vy, vz).",
                "Only the vertical component flips sign."
              ]
            },
            {
              "id": "vec-l12-012",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-15, -2)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A ball is thrown with velocity ({{vx}}, {{vy}}, {{vz}}) and hits the ground (normal = (0, 1, 0)). Assuming perfect bounce, what is the reflected velocity? Round to 1 decimal.",
              "solution": "[vx, -vy, vz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "With a flat ground (normal (0,1,0)), reflection inverts the y-component.",
                "R = V - 2*(V\u00b7N)*N. V\u00b7N = vy. So R = (vx, vy - 2*vy, vz) = (vx, -vy, vz).",
                "Only the vertical component flips sign."
              ]
            },
            {
              "id": "vec-l12-013",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-15, -2)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A ball is thrown with velocity ({{vx}}, {{vy}}, {{vz}}) and hits the ground (normal = (0, 1, 0)). Assuming perfect bounce, what is the reflected velocity? Round to 1 decimal.",
              "solution": "[vx, -vy, vz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "With a flat ground (normal (0,1,0)), reflection inverts the y-component.",
                "R = V - 2*(V\u00b7N)*N. V\u00b7N = vy. So R = (vx, vy - 2*vy, vz) = (vx, -vy, vz).",
                "Only the vertical component flips sign."
              ]
            },
            {
              "id": "vec-l12-014",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-15, -2)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A ball is thrown with velocity ({{vx}}, {{vy}}, {{vz}}) and hits the ground (normal = (0, 1, 0)). Assuming perfect bounce, what is the reflected velocity? Round to 1 decimal.",
              "solution": "[vx, -vy, vz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "With a flat ground (normal (0,1,0)), reflection inverts the y-component.",
                "R = V - 2*(V\u00b7N)*N. V\u00b7N = vy. So R = (vx, vy - 2*vy, vz) = (vx, -vy, vz).",
                "Only the vertical component flips sign."
              ]
            },
            {
              "id": "vec-l12-015",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-15, -2)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A ball is thrown with velocity ({{vx}}, {{vy}}, {{vz}}) and hits the ground (normal = (0, 1, 0)). Assuming perfect bounce, what is the reflected velocity? Round to 1 decimal.",
              "solution": "[vx, -vy, vz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "With a flat ground (normal (0,1,0)), reflection inverts the y-component.",
                "R = V - 2*(V\u00b7N)*N. V\u00b7N = vy. So R = (vx, vy - 2*vy, vz) = (vx, -vy, vz).",
                "Only the vertical component flips sign."
              ]
            },
            {
              "id": "vec-l12-016",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-15, -2)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A ball is thrown with velocity ({{vx}}, {{vy}}, {{vz}}) and hits the ground (normal = (0, 1, 0)). Assuming perfect bounce, what is the reflected velocity? Round to 1 decimal.",
              "solution": "[vx, -vy, vz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "With a flat ground (normal (0,1,0)), reflection inverts the y-component.",
                "R = V - 2*(V\u00b7N)*N. V\u00b7N = vy. So R = (vx, vy - 2*vy, vz) = (vx, -vy, vz).",
                "Only the vertical component flips sign."
              ]
            },
            {
              "id": "vec-l12-017",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-15, -2)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A ball is thrown with velocity ({{vx}}, {{vy}}, {{vz}}) and hits the ground (normal = (0, 1, 0)). Assuming perfect bounce, what is the reflected velocity? Round to 1 decimal.",
              "solution": "[vx, -vy, vz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "With a flat ground (normal (0,1,0)), reflection inverts the y-component.",
                "R = V - 2*(V\u00b7N)*N. V\u00b7N = vy. So R = (vx, vy - 2*vy, vz) = (vx, -vy, vz).",
                "Only the vertical component flips sign."
              ]
            },
            {
              "id": "vec-l12-018",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-15, -2)",
                "vz": "randint(-10, 10)"
              },
              "scenario": "A ball is thrown with velocity ({{vx}}, {{vy}}, {{vz}}) and hits the ground (normal = (0, 1, 0)). Assuming perfect bounce, what is the reflected velocity? Round to 1 decimal.",
              "solution": "[vx, -vy, vz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "With a flat ground (normal (0,1,0)), reflection inverts the y-component.",
                "R = V - 2*(V\u00b7N)*N. V\u00b7N = vy. So R = (vx, vy - 2*vy, vz) = (vx, -vy, vz).",
                "Only the vertical component flips sign."
              ]
            },
            {
              "id": "vec-l12-019",
              "level": 12,
              "params": {
                "lx": "randint(-10, 10)",
                "ly": "randint(-10, 10)",
                "lz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A laser beam travels in direction ({{lx}}, {{ly}}, {{lz}}) and hits a mirror with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected beam direction? Normalize the result. Round to 3 decimals.",
              "solution": "let d = lx*nx + ly*ny + lz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = lx - 2*s*nx; let ry = ly - 2*s*ny; let rz = lz - 2*s*nz; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflect: R = L - 2*(L\u00b7N)*N (for non-normalized N, divide dot by N\u00b7N).",
                "After reflection, normalize R to get a unit direction vector.",
                "Round each component to 3 decimals."
              ]
            },
            {
              "id": "vec-l12-020",
              "level": 12,
              "params": {
                "lx": "randint(-10, 10)",
                "ly": "randint(-10, 10)",
                "lz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A laser beam travels in direction ({{lx}}, {{ly}}, {{lz}}) and hits a mirror with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected beam direction? Normalize the result. Round to 3 decimals.",
              "solution": "let d = lx*nx + ly*ny + lz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = lx - 2*s*nx; let ry = ly - 2*s*ny; let rz = lz - 2*s*nz; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflect: R = L - 2*(L\u00b7N)*N (for non-normalized N, divide dot by N\u00b7N).",
                "After reflection, normalize R to get a unit direction vector.",
                "Round each component to 3 decimals."
              ]
            },
            {
              "id": "vec-l12-021",
              "level": 12,
              "params": {
                "lx": "randint(-10, 10)",
                "ly": "randint(-10, 10)",
                "lz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A laser beam travels in direction ({{lx}}, {{ly}}, {{lz}}) and hits a mirror with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected beam direction? Normalize the result. Round to 3 decimals.",
              "solution": "let d = lx*nx + ly*ny + lz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = lx - 2*s*nx; let ry = ly - 2*s*ny; let rz = lz - 2*s*nz; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflect: R = L - 2*(L\u00b7N)*N (for non-normalized N, divide dot by N\u00b7N).",
                "After reflection, normalize R to get a unit direction vector.",
                "Round each component to 3 decimals."
              ]
            },
            {
              "id": "vec-l12-022",
              "level": 12,
              "params": {
                "lx": "randint(-10, 10)",
                "ly": "randint(-10, 10)",
                "lz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A laser beam travels in direction ({{lx}}, {{ly}}, {{lz}}) and hits a mirror with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected beam direction? Normalize the result. Round to 3 decimals.",
              "solution": "let d = lx*nx + ly*ny + lz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = lx - 2*s*nx; let ry = ly - 2*s*ny; let rz = lz - 2*s*nz; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflect: R = L - 2*(L\u00b7N)*N (for non-normalized N, divide dot by N\u00b7N).",
                "After reflection, normalize R to get a unit direction vector.",
                "Round each component to 3 decimals."
              ]
            },
            {
              "id": "vec-l12-023",
              "level": 12,
              "params": {
                "lx": "randint(-10, 10)",
                "ly": "randint(-10, 10)",
                "lz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A laser beam travels in direction ({{lx}}, {{ly}}, {{lz}}) and hits a mirror with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected beam direction? Normalize the result. Round to 3 decimals.",
              "solution": "let d = lx*nx + ly*ny + lz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = lx - 2*s*nx; let ry = ly - 2*s*ny; let rz = lz - 2*s*nz; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflect: R = L - 2*(L\u00b7N)*N (for non-normalized N, divide dot by N\u00b7N).",
                "After reflection, normalize R to get a unit direction vector.",
                "Round each component to 3 decimals."
              ]
            },
            {
              "id": "vec-l12-024",
              "level": 12,
              "params": {
                "lx": "randint(-10, 10)",
                "ly": "randint(-10, 10)",
                "lz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A laser beam travels in direction ({{lx}}, {{ly}}, {{lz}}) and hits a mirror with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected beam direction? Normalize the result. Round to 3 decimals.",
              "solution": "let d = lx*nx + ly*ny + lz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = lx - 2*s*nx; let ry = ly - 2*s*ny; let rz = lz - 2*s*nz; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflect: R = L - 2*(L\u00b7N)*N (for non-normalized N, divide dot by N\u00b7N).",
                "After reflection, normalize R to get a unit direction vector.",
                "Round each component to 3 decimals."
              ]
            },
            {
              "id": "vec-l12-025",
              "level": 12,
              "params": {
                "lx": "randint(-10, 10)",
                "ly": "randint(-10, 10)",
                "lz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "A laser beam travels in direction ({{lx}}, {{ly}}, {{lz}}) and hits a mirror with normal ({{nx}}, {{ny}}, {{nz}}). What is the reflected beam direction? Normalize the result. Round to 3 decimals.",
              "solution": "let d = lx*nx + ly*ny + lz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = lx - 2*s*nx; let ry = ly - 2*s*ny; let rz = lz - 2*s*nz; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Reflect: R = L - 2*(L\u00b7N)*N (for non-normalized N, divide dot by N\u00b7N).",
                "After reflection, normalize R to get a unit direction vector.",
                "Round each component to 3 decimals."
              ]
            },
            {
              "id": "vec-l12-026",
              "level": 12,
              "params": {
                "px": "randint(-10, 10)",
                "py": "randint(-10, 10)",
                "pz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)",
                "jump": "randint(5, 15)"
              },
              "scenario": "A player collides with a wall (normal = ({{nx}}, {{ny}}, {{nz}})) while moving at velocity ({{px}}, {{py}}, {{pz}}). They perform a wall jump, launching off with {{jump}} m/s in the direction of the normal. The sliding velocity is V - (V\u00b7N)*N (removing the part going into the wall). What is their total new velocity (slide + jump * normal)? Round to 1 decimal.",
              "solution": "let d = px*nx + py*ny + pz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = px - s*nx; let sy = py - s*ny; let sz = pz - s*nz; [sx + jump*nx/sqrt(m), sy + jump*ny/sqrt(m), sz + jump*nz/sqrt(m)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Slide velocity = V - projection of V onto N.",
                "Projection = (V\u00b7N)/(N\u00b7N) * N. Subtract from V to get slide.",
                "Add jump force in the normal direction (normalize N first)."
              ]
            },
            {
              "id": "vec-l12-027",
              "level": 12,
              "params": {
                "px": "randint(-10, 10)",
                "py": "randint(-10, 10)",
                "pz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)",
                "jump": "randint(5, 15)"
              },
              "scenario": "A player collides with a wall (normal = ({{nx}}, {{ny}}, {{nz}})) while moving at velocity ({{px}}, {{py}}, {{pz}}). They perform a wall jump, launching off with {{jump}} m/s in the direction of the normal. The sliding velocity is V - (V\u00b7N)*N (removing the part going into the wall). What is their total new velocity (slide + jump * normal)? Round to 1 decimal.",
              "solution": "let d = px*nx + py*ny + pz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = px - s*nx; let sy = py - s*ny; let sz = pz - s*nz; [sx + jump*nx/sqrt(m), sy + jump*ny/sqrt(m), sz + jump*nz/sqrt(m)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Slide velocity = V - projection of V onto N.",
                "Projection = (V\u00b7N)/(N\u00b7N) * N. Subtract from V to get slide.",
                "Add jump force in the normal direction (normalize N first)."
              ]
            },
            {
              "id": "vec-l12-028",
              "level": 12,
              "params": {
                "px": "randint(-10, 10)",
                "py": "randint(-10, 10)",
                "pz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)",
                "jump": "randint(5, 15)"
              },
              "scenario": "A player collides with a wall (normal = ({{nx}}, {{ny}}, {{nz}})) while moving at velocity ({{px}}, {{py}}, {{pz}}). They perform a wall jump, launching off with {{jump}} m/s in the direction of the normal. The sliding velocity is V - (V\u00b7N)*N (removing the part going into the wall). What is their total new velocity (slide + jump * normal)? Round to 1 decimal.",
              "solution": "let d = px*nx + py*ny + pz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = px - s*nx; let sy = py - s*ny; let sz = pz - s*nz; [sx + jump*nx/sqrt(m), sy + jump*ny/sqrt(m), sz + jump*nz/sqrt(m)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Slide velocity = V - projection of V onto N.",
                "Projection = (V\u00b7N)/(N\u00b7N) * N. Subtract from V to get slide.",
                "Add jump force in the normal direction (normalize N first)."
              ]
            },
            {
              "id": "vec-l12-029",
              "level": 12,
              "params": {
                "px": "randint(-10, 10)",
                "py": "randint(-10, 10)",
                "pz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)",
                "jump": "randint(5, 15)"
              },
              "scenario": "A player collides with a wall (normal = ({{nx}}, {{ny}}, {{nz}})) while moving at velocity ({{px}}, {{py}}, {{pz}}). They perform a wall jump, launching off with {{jump}} m/s in the direction of the normal. The sliding velocity is V - (V\u00b7N)*N (removing the part going into the wall). What is their total new velocity (slide + jump * normal)? Round to 1 decimal.",
              "solution": "let d = px*nx + py*ny + pz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = px - s*nx; let sy = py - s*ny; let sz = pz - s*nz; [sx + jump*nx/sqrt(m), sy + jump*ny/sqrt(m), sz + jump*nz/sqrt(m)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Slide velocity = V - projection of V onto N.",
                "Projection = (V\u00b7N)/(N\u00b7N) * N. Subtract from V to get slide.",
                "Add jump force in the normal direction (normalize N first)."
              ]
            },
            {
              "id": "vec-l12-030",
              "level": 12,
              "params": {
                "px": "randint(-10, 10)",
                "py": "randint(-10, 10)",
                "pz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)",
                "jump": "randint(5, 15)"
              },
              "scenario": "A player collides with a wall (normal = ({{nx}}, {{ny}}, {{nz}})) while moving at velocity ({{px}}, {{py}}, {{pz}}). They perform a wall jump, launching off with {{jump}} m/s in the direction of the normal. The sliding velocity is V - (V\u00b7N)*N (removing the part going into the wall). What is their total new velocity (slide + jump * normal)? Round to 1 decimal.",
              "solution": "let d = px*nx + py*ny + pz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = px - s*nx; let sy = py - s*ny; let sz = pz - s*nz; [sx + jump*nx/sqrt(m), sy + jump*ny/sqrt(m), sz + jump*nz/sqrt(m)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Slide velocity = V - projection of V onto N.",
                "Projection = (V\u00b7N)/(N\u00b7N) * N. Subtract from V to get slide.",
                "Add jump force in the normal direction (normalize N first)."
              ]
            },
            {
              "id": "vec-l12-031",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)",
                "energy": "randfloat(0.6, 0.95, 2)"
              },
              "scenario": "A grenade with velocity ({{vx}}, {{vy}}, {{vz}}) bounces off a surface with normal ({{nx}}, {{ny}}, {{nz}}), losing some energy. The reflected velocity magnitude is multiplied by {{energy}} (coefficient of restitution). What is the final velocity? Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = vx - 2*s*nx; let ry = vy - 2*s*ny; let rz = vz - 2*s*nz; [rx*energy, ry*energy, rz*energy]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First compute perfect reflection: R = V - 2*(V\u00b7N)*N.",
                "Then scale the reflected vector by the energy coefficient {{energy}}.",
                "Final = R * {{energy}}."
              ]
            },
            {
              "id": "vec-l12-032",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)",
                "energy": "randfloat(0.6, 0.95, 2)"
              },
              "scenario": "A grenade with velocity ({{vx}}, {{vy}}, {{vz}}) bounces off a surface with normal ({{nx}}, {{ny}}, {{nz}}), losing some energy. The reflected velocity magnitude is multiplied by {{energy}} (coefficient of restitution). What is the final velocity? Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = vx - 2*s*nx; let ry = vy - 2*s*ny; let rz = vz - 2*s*nz; [rx*energy, ry*energy, rz*energy]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First compute perfect reflection: R = V - 2*(V\u00b7N)*N.",
                "Then scale the reflected vector by the energy coefficient {{energy}}.",
                "Final = R * {{energy}}."
              ]
            },
            {
              "id": "vec-l12-033",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)",
                "energy": "randfloat(0.6, 0.95, 2)"
              },
              "scenario": "A grenade with velocity ({{vx}}, {{vy}}, {{vz}}) bounces off a surface with normal ({{nx}}, {{ny}}, {{nz}}), losing some energy. The reflected velocity magnitude is multiplied by {{energy}} (coefficient of restitution). What is the final velocity? Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = vx - 2*s*nx; let ry = vy - 2*s*ny; let rz = vz - 2*s*nz; [rx*energy, ry*energy, rz*energy]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First compute perfect reflection: R = V - 2*(V\u00b7N)*N.",
                "Then scale the reflected vector by the energy coefficient {{energy}}.",
                "Final = R * {{energy}}."
              ]
            },
            {
              "id": "vec-l12-034",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)",
                "energy": "randfloat(0.6, 0.95, 2)"
              },
              "scenario": "A grenade with velocity ({{vx}}, {{vy}}, {{vz}}) bounces off a surface with normal ({{nx}}, {{ny}}, {{nz}}), losing some energy. The reflected velocity magnitude is multiplied by {{energy}} (coefficient of restitution). What is the final velocity? Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = vx - 2*s*nx; let ry = vy - 2*s*ny; let rz = vz - 2*s*nz; [rx*energy, ry*energy, rz*energy]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First compute perfect reflection: R = V - 2*(V\u00b7N)*N.",
                "Then scale the reflected vector by the energy coefficient {{energy}}.",
                "Final = R * {{energy}}."
              ]
            },
            {
              "id": "vec-l12-035",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-10, 10)",
                "vz": "randint(-10, 10)",
                "nx": "randint(-5, 5)",
                "ny": "randint(-5, 5)",
                "nz": "randint(-5, 5)",
                "energy": "randfloat(0.6, 0.95, 2)"
              },
              "scenario": "A grenade with velocity ({{vx}}, {{vy}}, {{vz}}) bounces off a surface with normal ({{nx}}, {{ny}}, {{nz}}), losing some energy. The reflected velocity magnitude is multiplied by {{energy}} (coefficient of restitution). What is the final velocity? Round to 1 decimal.",
              "solution": "let d = vx*nx + vy*ny + vz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let rx = vx - 2*s*nx; let ry = vy - 2*s*ny; let rz = vz - 2*s*nz; [rx*energy, ry*energy, rz*energy]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First compute perfect reflection: R = V - 2*(V\u00b7N)*N.",
                "Then scale the reflected vector by the energy coefficient {{energy}}.",
                "Final = R * {{energy}}."
              ]
            }
          ]
        },
        {
          "level": 13,
          "title": "Decomposition & Projection",
          "questions": [
            {
              "id": "vec-l13-001",
              "level": 13,
              "params": {
                "speed": "randint(5, 30, 5)",
                "angle": "randint(15, 75, 5)"
              },
              "scenario": "A player runs at {{speed}} m/s at an angle of {{angle}}\u00b0 from the X-axis (forward direction). Decompose their velocity into x and y components. Give as (vx, vy, 0). Round to 2 decimals.",
              "solution": "[speed * cos(angle * PI / 180), speed * sin(angle * PI / 180), 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "vx = speed * cos(angle), vy = speed * sin(angle).",
                "Convert {{angle}}\u00b0 to radians first: angle * PI / 180.",
                "Then: vx = {{speed}} * cos({{angle}}\u00b0), vy = {{speed}} * sin({{angle}}\u00b0)."
              ]
            },
            {
              "id": "vec-l13-002",
              "level": 13,
              "params": {
                "speed": "randint(5, 30, 5)",
                "angle": "randint(15, 75, 5)"
              },
              "scenario": "A player runs at {{speed}} m/s at an angle of {{angle}}\u00b0 from the X-axis (forward direction). Decompose their velocity into x and y components. Give as (vx, vy, 0). Round to 2 decimals.",
              "solution": "[speed * cos(angle * PI / 180), speed * sin(angle * PI / 180), 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "vx = speed * cos(angle), vy = speed * sin(angle).",
                "Convert {{angle}}\u00b0 to radians first: angle * PI / 180.",
                "Then: vx = {{speed}} * cos({{angle}}\u00b0), vy = {{speed}} * sin({{angle}}\u00b0)."
              ]
            },
            {
              "id": "vec-l13-003",
              "level": 13,
              "params": {
                "speed": "randint(5, 30, 5)",
                "angle": "randint(15, 75, 5)"
              },
              "scenario": "A player runs at {{speed}} m/s at an angle of {{angle}}\u00b0 from the X-axis (forward direction). Decompose their velocity into x and y components. Give as (vx, vy, 0). Round to 2 decimals.",
              "solution": "[speed * cos(angle * PI / 180), speed * sin(angle * PI / 180), 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "vx = speed * cos(angle), vy = speed * sin(angle).",
                "Convert {{angle}}\u00b0 to radians first: angle * PI / 180.",
                "Then: vx = {{speed}} * cos({{angle}}\u00b0), vy = {{speed}} * sin({{angle}}\u00b0)."
              ]
            },
            {
              "id": "vec-l13-004",
              "level": 13,
              "params": {
                "speed": "randint(5, 30, 5)",
                "angle": "randint(15, 75, 5)"
              },
              "scenario": "A player runs at {{speed}} m/s at an angle of {{angle}}\u00b0 from the X-axis (forward direction). Decompose their velocity into x and y components. Give as (vx, vy, 0). Round to 2 decimals.",
              "solution": "[speed * cos(angle * PI / 180), speed * sin(angle * PI / 180), 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "vx = speed * cos(angle), vy = speed * sin(angle).",
                "Convert {{angle}}\u00b0 to radians first: angle * PI / 180.",
                "Then: vx = {{speed}} * cos({{angle}}\u00b0), vy = {{speed}} * sin({{angle}}\u00b0)."
              ]
            },
            {
              "id": "vec-l13-005",
              "level": 13,
              "params": {
                "speed": "randint(5, 30, 5)",
                "angle": "randint(15, 75, 5)"
              },
              "scenario": "A player runs at {{speed}} m/s at an angle of {{angle}}\u00b0 from the X-axis (forward direction). Decompose their velocity into x and y components. Give as (vx, vy, 0). Round to 2 decimals.",
              "solution": "[speed * cos(angle * PI / 180), speed * sin(angle * PI / 180), 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "vx = speed * cos(angle), vy = speed * sin(angle).",
                "Convert {{angle}}\u00b0 to radians first: angle * PI / 180.",
                "Then: vx = {{speed}} * cos({{angle}}\u00b0), vy = {{speed}} * sin({{angle}}\u00b0)."
              ]
            },
            {
              "id": "vec-l13-006",
              "level": 13,
              "params": {
                "speed": "randint(5, 30, 5)",
                "angle": "randint(15, 75, 5)"
              },
              "scenario": "A player runs at {{speed}} m/s at an angle of {{angle}}\u00b0 from the X-axis (forward direction). Decompose their velocity into x and y components. Give as (vx, vy, 0). Round to 2 decimals.",
              "solution": "[speed * cos(angle * PI / 180), speed * sin(angle * PI / 180), 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "vx = speed * cos(angle), vy = speed * sin(angle).",
                "Convert {{angle}}\u00b0 to radians first: angle * PI / 180.",
                "Then: vx = {{speed}} * cos({{angle}}\u00b0), vy = {{speed}} * sin({{angle}}\u00b0)."
              ]
            },
            {
              "id": "vec-l13-007",
              "level": 13,
              "params": {
                "speed": "randint(5, 30, 5)",
                "angle": "randint(15, 75, 5)"
              },
              "scenario": "A player runs at {{speed}} m/s at an angle of {{angle}}\u00b0 from the X-axis (forward direction). Decompose their velocity into x and y components. Give as (vx, vy, 0). Round to 2 decimals.",
              "solution": "[speed * cos(angle * PI / 180), speed * sin(angle * PI / 180), 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "vx = speed * cos(angle), vy = speed * sin(angle).",
                "Convert {{angle}}\u00b0 to radians first: angle * PI / 180.",
                "Then: vx = {{speed}} * cos({{angle}}\u00b0), vy = {{speed}} * sin({{angle}}\u00b0)."
              ]
            },
            {
              "id": "vec-l13-008",
              "level": 13,
              "params": {
                "speed": "randint(5, 30, 5)",
                "angle": "randint(15, 75, 5)"
              },
              "scenario": "A player runs at {{speed}} m/s at an angle of {{angle}}\u00b0 from the X-axis (forward direction). Decompose their velocity into x and y components. Give as (vx, vy, 0). Round to 2 decimals.",
              "solution": "[speed * cos(angle * PI / 180), speed * sin(angle * PI / 180), 0]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "vx = speed * cos(angle), vy = speed * sin(angle).",
                "Convert {{angle}}\u00b0 to radians first: angle * PI / 180.",
                "Then: vx = {{speed}} * cos({{angle}}\u00b0), vy = {{speed}} * sin({{angle}}\u00b0)."
              ]
            },
            {
              "id": "vec-l13-009",
              "level": 13,
              "params": {
                "mx": "randint(-10, 10)",
                "my": "randint(-10, 10)",
                "mz": "randint(-10, 10)",
                "sx": "randint(-5, 5)",
                "sy": "randint(-5, 5)",
                "sz": "randint(-5, 5)"
              },
              "scenario": "A character tries to move in direction ({{mx}}, {{my}}, {{mz}}) but is on a surface with normal ({{sx}}, {{sy}}, {{sz}}). How much of their movement goes ALONG the surface (the projection onto the surface)? Give the vector. Round to 2 decimals.\n(Hint: along_surface = M - projection of M onto N, where projection = (M\u00b7N)/(N\u00b7N) * N)",
              "solution": "let d = mx*sx + my*sy + mz*sz; let m = sx*sx + sy*sy + sz*sz; let s = d / m; [mx - s*sx, my - s*sy, mz - s*sz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The part perpendicular to the surface = projection onto the normal.",
                "Remove that: surface component = M - (M\u00b7N)/(N\u00b7N) * N.",
                "This is what remains when you strip away the part going into the surface."
              ]
            },
            {
              "id": "vec-l13-010",
              "level": 13,
              "params": {
                "mx": "randint(-10, 10)",
                "my": "randint(-10, 10)",
                "mz": "randint(-10, 10)",
                "sx": "randint(-5, 5)",
                "sy": "randint(-5, 5)",
                "sz": "randint(-5, 5)"
              },
              "scenario": "A character tries to move in direction ({{mx}}, {{my}}, {{mz}}) but is on a surface with normal ({{sx}}, {{sy}}, {{sz}}). How much of their movement goes ALONG the surface (the projection onto the surface)? Give the vector. Round to 2 decimals.\n(Hint: along_surface = M - projection of M onto N, where projection = (M\u00b7N)/(N\u00b7N) * N)",
              "solution": "let d = mx*sx + my*sy + mz*sz; let m = sx*sx + sy*sy + sz*sz; let s = d / m; [mx - s*sx, my - s*sy, mz - s*sz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The part perpendicular to the surface = projection onto the normal.",
                "Remove that: surface component = M - (M\u00b7N)/(N\u00b7N) * N.",
                "This is what remains when you strip away the part going into the surface."
              ]
            },
            {
              "id": "vec-l13-011",
              "level": 13,
              "params": {
                "mx": "randint(-10, 10)",
                "my": "randint(-10, 10)",
                "mz": "randint(-10, 10)",
                "sx": "randint(-5, 5)",
                "sy": "randint(-5, 5)",
                "sz": "randint(-5, 5)"
              },
              "scenario": "A character tries to move in direction ({{mx}}, {{my}}, {{mz}}) but is on a surface with normal ({{sx}}, {{sy}}, {{sz}}). How much of their movement goes ALONG the surface (the projection onto the surface)? Give the vector. Round to 2 decimals.\n(Hint: along_surface = M - projection of M onto N, where projection = (M\u00b7N)/(N\u00b7N) * N)",
              "solution": "let d = mx*sx + my*sy + mz*sz; let m = sx*sx + sy*sy + sz*sz; let s = d / m; [mx - s*sx, my - s*sy, mz - s*sz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The part perpendicular to the surface = projection onto the normal.",
                "Remove that: surface component = M - (M\u00b7N)/(N\u00b7N) * N.",
                "This is what remains when you strip away the part going into the surface."
              ]
            },
            {
              "id": "vec-l13-012",
              "level": 13,
              "params": {
                "mx": "randint(-10, 10)",
                "my": "randint(-10, 10)",
                "mz": "randint(-10, 10)",
                "sx": "randint(-5, 5)",
                "sy": "randint(-5, 5)",
                "sz": "randint(-5, 5)"
              },
              "scenario": "A character tries to move in direction ({{mx}}, {{my}}, {{mz}}) but is on a surface with normal ({{sx}}, {{sy}}, {{sz}}). How much of their movement goes ALONG the surface (the projection onto the surface)? Give the vector. Round to 2 decimals.\n(Hint: along_surface = M - projection of M onto N, where projection = (M\u00b7N)/(N\u00b7N) * N)",
              "solution": "let d = mx*sx + my*sy + mz*sz; let m = sx*sx + sy*sy + sz*sz; let s = d / m; [mx - s*sx, my - s*sy, mz - s*sz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The part perpendicular to the surface = projection onto the normal.",
                "Remove that: surface component = M - (M\u00b7N)/(N\u00b7N) * N.",
                "This is what remains when you strip away the part going into the surface."
              ]
            },
            {
              "id": "vec-l13-013",
              "level": 13,
              "params": {
                "mx": "randint(-10, 10)",
                "my": "randint(-10, 10)",
                "mz": "randint(-10, 10)",
                "sx": "randint(-5, 5)",
                "sy": "randint(-5, 5)",
                "sz": "randint(-5, 5)"
              },
              "scenario": "A character tries to move in direction ({{mx}}, {{my}}, {{mz}}) but is on a surface with normal ({{sx}}, {{sy}}, {{sz}}). How much of their movement goes ALONG the surface (the projection onto the surface)? Give the vector. Round to 2 decimals.\n(Hint: along_surface = M - projection of M onto N, where projection = (M\u00b7N)/(N\u00b7N) * N)",
              "solution": "let d = mx*sx + my*sy + mz*sz; let m = sx*sx + sy*sy + sz*sz; let s = d / m; [mx - s*sx, my - s*sy, mz - s*sz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The part perpendicular to the surface = projection onto the normal.",
                "Remove that: surface component = M - (M\u00b7N)/(N\u00b7N) * N.",
                "This is what remains when you strip away the part going into the surface."
              ]
            },
            {
              "id": "vec-l13-014",
              "level": 13,
              "params": {
                "mx": "randint(-10, 10)",
                "my": "randint(-10, 10)",
                "mz": "randint(-10, 10)",
                "sx": "randint(-5, 5)",
                "sy": "randint(-5, 5)",
                "sz": "randint(-5, 5)"
              },
              "scenario": "A character tries to move in direction ({{mx}}, {{my}}, {{mz}}) but is on a surface with normal ({{sx}}, {{sy}}, {{sz}}). How much of their movement goes ALONG the surface (the projection onto the surface)? Give the vector. Round to 2 decimals.\n(Hint: along_surface = M - projection of M onto N, where projection = (M\u00b7N)/(N\u00b7N) * N)",
              "solution": "let d = mx*sx + my*sy + mz*sz; let m = sx*sx + sy*sy + sz*sz; let s = d / m; [mx - s*sx, my - s*sy, mz - s*sz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The part perpendicular to the surface = projection onto the normal.",
                "Remove that: surface component = M - (M\u00b7N)/(N\u00b7N) * N.",
                "This is what remains when you strip away the part going into the surface."
              ]
            },
            {
              "id": "vec-l13-015",
              "level": 13,
              "params": {
                "mx": "randint(-10, 10)",
                "my": "randint(-10, 10)",
                "mz": "randint(-10, 10)",
                "sx": "randint(-5, 5)",
                "sy": "randint(-5, 5)",
                "sz": "randint(-5, 5)"
              },
              "scenario": "A character tries to move in direction ({{mx}}, {{my}}, {{mz}}) but is on a surface with normal ({{sx}}, {{sy}}, {{sz}}). How much of their movement goes ALONG the surface (the projection onto the surface)? Give the vector. Round to 2 decimals.\n(Hint: along_surface = M - projection of M onto N, where projection = (M\u00b7N)/(N\u00b7N) * N)",
              "solution": "let d = mx*sx + my*sy + mz*sz; let m = sx*sx + sy*sy + sz*sz; let s = d / m; [mx - s*sx, my - s*sy, mz - s*sz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The part perpendicular to the surface = projection onto the normal.",
                "Remove that: surface component = M - (M\u00b7N)/(N\u00b7N) * N.",
                "This is what remains when you strip away the part going into the surface."
              ]
            },
            {
              "id": "vec-l13-016",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1, 8)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "Gravity pulls straight down: (0, -9.8, 0). A character stands on a slope with normal ({{nx}}, {{ny}}, {{nz}}). How much of gravity pulls the character DOWN the slope? Give the magnitude (a positive scalar). Round to 2 decimals.\n(Hint: The force down the slope = |gravity - projection of gravity onto normal|).",
              "solution": "let d = gx*nx + gy*ny + gz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = gx - s*nx; let sy = gy - s*ny; let sz = gz - s*nz; sqrt(sx*sx + sy*sy + sz*sz)",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "Remove the component of gravity that pushes INTO the slope (the normal component).",
                "What's left is the component sliding down the slope.",
                "Compute slide = gravity - (gravity\u00b7N)/(N\u00b7N) * N, then get its magnitude."
              ]
            },
            {
              "id": "vec-l13-017",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1, 8)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "Gravity pulls straight down: (0, -9.8, 0). A character stands on a slope with normal ({{nx}}, {{ny}}, {{nz}}). How much of gravity pulls the character DOWN the slope? Give the magnitude (a positive scalar). Round to 2 decimals.\n(Hint: The force down the slope = |gravity - projection of gravity onto normal|).",
              "solution": "let d = gx*nx + gy*ny + gz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = gx - s*nx; let sy = gy - s*ny; let sz = gz - s*nz; sqrt(sx*sx + sy*sy + sz*sz)",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "Remove the component of gravity that pushes INTO the slope (the normal component).",
                "What's left is the component sliding down the slope.",
                "Compute slide = gravity - (gravity\u00b7N)/(N\u00b7N) * N, then get its magnitude."
              ]
            },
            {
              "id": "vec-l13-018",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1, 8)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "Gravity pulls straight down: (0, -9.8, 0). A character stands on a slope with normal ({{nx}}, {{ny}}, {{nz}}). How much of gravity pulls the character DOWN the slope? Give the magnitude (a positive scalar). Round to 2 decimals.\n(Hint: The force down the slope = |gravity - projection of gravity onto normal|).",
              "solution": "let d = gx*nx + gy*ny + gz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = gx - s*nx; let sy = gy - s*ny; let sz = gz - s*nz; sqrt(sx*sx + sy*sy + sz*sz)",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "Remove the component of gravity that pushes INTO the slope (the normal component).",
                "What's left is the component sliding down the slope.",
                "Compute slide = gravity - (gravity\u00b7N)/(N\u00b7N) * N, then get its magnitude."
              ]
            },
            {
              "id": "vec-l13-019",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1, 8)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "Gravity pulls straight down: (0, -9.8, 0). A character stands on a slope with normal ({{nx}}, {{ny}}, {{nz}}). How much of gravity pulls the character DOWN the slope? Give the magnitude (a positive scalar). Round to 2 decimals.\n(Hint: The force down the slope = |gravity - projection of gravity onto normal|).",
              "solution": "let d = gx*nx + gy*ny + gz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = gx - s*nx; let sy = gy - s*ny; let sz = gz - s*nz; sqrt(sx*sx + sy*sy + sz*sz)",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "Remove the component of gravity that pushes INTO the slope (the normal component).",
                "What's left is the component sliding down the slope.",
                "Compute slide = gravity - (gravity\u00b7N)/(N\u00b7N) * N, then get its magnitude."
              ]
            },
            {
              "id": "vec-l13-020",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1, 8)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "Gravity pulls straight down: (0, -9.8, 0). A character stands on a slope with normal ({{nx}}, {{ny}}, {{nz}}). How much of gravity pulls the character DOWN the slope? Give the magnitude (a positive scalar). Round to 2 decimals.\n(Hint: The force down the slope = |gravity - projection of gravity onto normal|).",
              "solution": "let d = gx*nx + gy*ny + gz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = gx - s*nx; let sy = gy - s*ny; let sz = gz - s*nz; sqrt(sx*sx + sy*sy + sz*sz)",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "Remove the component of gravity that pushes INTO the slope (the normal component).",
                "What's left is the component sliding down the slope.",
                "Compute slide = gravity - (gravity\u00b7N)/(N\u00b7N) * N, then get its magnitude."
              ]
            },
            {
              "id": "vec-l13-021",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1, 8)",
                "nz": "randint(-5, 5)"
              },
              "scenario": "Gravity pulls straight down: (0, -9.8, 0). A character stands on a slope with normal ({{nx}}, {{ny}}, {{nz}}). How much of gravity pulls the character DOWN the slope? Give the magnitude (a positive scalar). Round to 2 decimals.\n(Hint: The force down the slope = |gravity - projection of gravity onto normal|).",
              "solution": "let d = gx*nx + gy*ny + gz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = gx - s*nx; let sy = gy - s*ny; let sz = gz - s*nz; sqrt(sx*sx + sy*sy + sz*sz)",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "Remove the component of gravity that pushes INTO the slope (the normal component).",
                "What's left is the component sliding down the slope.",
                "Compute slide = gravity - (gravity\u00b7N)/(N\u00b7N) * N, then get its magnitude."
              ]
            },
            {
              "id": "vec-l13-022",
              "level": 13,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)"
              },
              "scenario": "A forward-facing vector is ({{fx}}, {{fy}}, {{fz}}). An 'up' reference vector is ({{ax}}, {{ay}}, {{az}}). Compute the RIGHT vector using cross product. Normalize. Round to 3 decimals.\n(Note: In a typical coordinate system, right = cross(down, forward). Use right = cross(forward, up) \u2014 but NORMALIZE the result).",
              "solution": "let rx = fy*az - fz*ay; let ry = fz*ax - fx*az; let rz = fx*ay - fy*ax; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up) gives a vector perpendicular to both.",
                "Compute cross product: (fy*uz - fz*uy, fz*ux - fx*uz, fx*uy - fy*ux).",
                "Normalize by dividing by the magnitude."
              ]
            },
            {
              "id": "vec-l13-023",
              "level": 13,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)"
              },
              "scenario": "A forward-facing vector is ({{fx}}, {{fy}}, {{fz}}). An 'up' reference vector is ({{ax}}, {{ay}}, {{az}}). Compute the RIGHT vector using cross product. Normalize. Round to 3 decimals.\n(Note: In a typical coordinate system, right = cross(down, forward). Use right = cross(forward, up) \u2014 but NORMALIZE the result).",
              "solution": "let rx = fy*az - fz*ay; let ry = fz*ax - fx*az; let rz = fx*ay - fy*ax; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up) gives a vector perpendicular to both.",
                "Compute cross product: (fy*uz - fz*uy, fz*ux - fx*uz, fx*uy - fy*ux).",
                "Normalize by dividing by the magnitude."
              ]
            },
            {
              "id": "vec-l13-024",
              "level": 13,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)"
              },
              "scenario": "A forward-facing vector is ({{fx}}, {{fy}}, {{fz}}). An 'up' reference vector is ({{ax}}, {{ay}}, {{az}}). Compute the RIGHT vector using cross product. Normalize. Round to 3 decimals.\n(Note: In a typical coordinate system, right = cross(down, forward). Use right = cross(forward, up) \u2014 but NORMALIZE the result).",
              "solution": "let rx = fy*az - fz*ay; let ry = fz*ax - fx*az; let rz = fx*ay - fy*ax; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up) gives a vector perpendicular to both.",
                "Compute cross product: (fy*uz - fz*uy, fz*ux - fx*uz, fx*uy - fy*ux).",
                "Normalize by dividing by the magnitude."
              ]
            },
            {
              "id": "vec-l13-025",
              "level": 13,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)"
              },
              "scenario": "A forward-facing vector is ({{fx}}, {{fy}}, {{fz}}). An 'up' reference vector is ({{ax}}, {{ay}}, {{az}}). Compute the RIGHT vector using cross product. Normalize. Round to 3 decimals.\n(Note: In a typical coordinate system, right = cross(down, forward). Use right = cross(forward, up) \u2014 but NORMALIZE the result).",
              "solution": "let rx = fy*az - fz*ay; let ry = fz*ax - fx*az; let rz = fx*ay - fy*ax; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up) gives a vector perpendicular to both.",
                "Compute cross product: (fy*uz - fz*uy, fz*ux - fx*uz, fx*uy - fy*ux).",
                "Normalize by dividing by the magnitude."
              ]
            },
            {
              "id": "vec-l13-026",
              "level": 13,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)"
              },
              "scenario": "A forward-facing vector is ({{fx}}, {{fy}}, {{fz}}). An 'up' reference vector is ({{ax}}, {{ay}}, {{az}}). Compute the RIGHT vector using cross product. Normalize. Round to 3 decimals.\n(Note: In a typical coordinate system, right = cross(down, forward). Use right = cross(forward, up) \u2014 but NORMALIZE the result).",
              "solution": "let rx = fy*az - fz*ay; let ry = fz*ax - fx*az; let rz = fx*ay - fy*ax; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up) gives a vector perpendicular to both.",
                "Compute cross product: (fy*uz - fz*uy, fz*ux - fx*uz, fx*uy - fy*ux).",
                "Normalize by dividing by the magnitude."
              ]
            },
            {
              "id": "vec-l13-027",
              "level": 13,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)"
              },
              "scenario": "A forward-facing vector is ({{fx}}, {{fy}}, {{fz}}). An 'up' reference vector is ({{ax}}, {{ay}}, {{az}}). Compute the RIGHT vector using cross product. Normalize. Round to 3 decimals.\n(Note: In a typical coordinate system, right = cross(down, forward). Use right = cross(forward, up) \u2014 but NORMALIZE the result).",
              "solution": "let rx = fy*az - fz*ay; let ry = fz*ax - fx*az; let rz = fx*ay - fy*ax; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up) gives a vector perpendicular to both.",
                "Compute cross product: (fy*uz - fz*uy, fz*ux - fx*uz, fx*uy - fy*ux).",
                "Normalize by dividing by the magnitude."
              ]
            },
            {
              "id": "vec-l13-028",
              "level": 13,
              "params": {
                "fx": "randint(-10, 10)",
                "fy": "randint(-10, 10)",
                "fz": "randint(-10, 10)",
                "ax": "randint(-10, 10)",
                "ay": "randint(-10, 10)",
                "az": "randint(-10, 10)"
              },
              "scenario": "A forward-facing vector is ({{fx}}, {{fy}}, {{fz}}). An 'up' reference vector is ({{ax}}, {{ay}}, {{az}}). Compute the RIGHT vector using cross product. Normalize. Round to 3 decimals.\n(Note: In a typical coordinate system, right = cross(down, forward). Use right = cross(forward, up) \u2014 but NORMALIZE the result).",
              "solution": "let rx = fy*az - fz*ay; let ry = fz*ax - fx*az; let rz = fx*ay - fy*ax; let mag = sqrt(rx*rx + ry*ry + rz*rz); [rx/mag, ry/mag, rz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Right = cross(forward, up) gives a vector perpendicular to both.",
                "Compute cross product: (fy*uz - fz*uy, fz*ux - fx*uz, fx*uy - fy*ux).",
                "Normalize by dividing by the magnitude."
              ]
            },
            {
              "id": "vec-l13-029",
              "level": 13,
              "params": {
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)",
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ]
            },
            {
              "id": "vec-l13-030",
              "level": 13,
              "params": {
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)",
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ]
            },
            {
              "id": "vec-l13-031",
              "level": 13,
              "params": {
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)",
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ]
            },
            {
              "id": "vec-l13-032",
              "level": 13,
              "params": {
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)",
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ]
            },
            {
              "id": "vec-l13-033",
              "level": 13,
              "params": {
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)",
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ]
            },
            {
              "id": "vec-l13-034",
              "level": 13,
              "params": {
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)",
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ]
            },
            {
              "id": "vec-l13-035",
              "level": 13,
              "params": {
                "cx": "randint(-20, 20)",
                "cy": "randint(-20, 20)",
                "cz": "randint(-20, 20)",
                "tx": "randint(-20, 20)",
                "ty": "randint(-20, 20)",
                "tz": "randint(-20, 20)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ]
            }
          ]
        },
        {
          "level": 14,
          "title": "Which Operation?",
          "questions": [
            {
              "id": "vec-l14-w01",
              "level": 14,
              "params": {},
              "scenario": "Enemy at E, player at P. You need the direction FROM the player TO the enemy. Which operation?\nA) Normalize B) Subtract C) Cross product D) Dot product",
              "solution": "'B'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Direction from A to B = B - A.",
                "Subtraction gives the vector pointing from one to the other.",
                "Answer: B (Subtract)."
              ]
            },
            {
              "id": "vec-l14-w02",
              "level": 14,
              "params": {},
              "scenario": "A projectile hits a wall. You need the direction it bounces. Which operation?\nA) Normalize B) Lerp C) Reflection D) Dot product",
              "solution": "'C'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Reflection = V - 2(V\u00b7N)N.",
                "Standard bounce/ricochet formula.",
                "Answer: C (Reflection)."
              ]
            },
            {
              "id": "vec-l14-w03",
              "level": 14,
              "params": {},
              "scenario": "You need to check if Enemy A is to the LEFT or RIGHT of the player's facing direction. Which operation?\nA) Dot product B) Cross product C) Normalize D) Distance",
              "solution": "'B'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Cross product z-component sign tells left vs right in 2D.",
                "cross(facing, to_enemy).z > 0 = left, < 0 = right.",
                "Answer: B (Cross product)."
              ]
            },
            {
              "id": "vec-l14-w04",
              "level": 14,
              "params": {},
              "scenario": "A camera needs to smoothly follow a player without snapping. Which operation?\nA) Normalize B) Cross product C) Dot product D) Lerp",
              "solution": "'D'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Lerp = A + (B-A)*t moves smoothly between positions.",
                "Each frame closes a percentage of the gap.",
                "Answer: D (Lerp)."
              ]
            },
            {
              "id": "vec-l14-w05",
              "level": 14,
              "params": {},
              "scenario": "You need the angle between the player's facing direction and the direction to a target. Which TWO operations in order?\nA) Cross, arctan B) Dot, arccos C) Normalize, cross D) Dot, normalize",
              "solution": "'B'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot product of two normalized vectors gives cos(angle).",
                "arccos(dot) converts to the angle in radians.",
                "Answer: B (Dot, arccos)."
              ]
            },
            {
              "id": "vec-l14-w06",
              "level": 14,
              "params": {},
              "scenario": "A character walks at 5 m/s in direction (3, 0, -4). You need their velocity vector. On the direction: which operation FIRST?\nA) Cross with up B) Dot with forward C) Normalize D) Lerp",
              "solution": "'C'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "(3,0,-4) is not unit length \u2014 normalize first.",
                "Then scale by speed.",
                "Answer: C (Normalize)."
              ]
            },
            {
              "id": "vec-l14-w07",
              "level": 14,
              "params": {},
              "scenario": "Two characters at positions A and B. You need the straight-line DISTANCE between them. Which operation?\nA) Normalize B) Dot product C) Magnitude of (B-A) D) Cross product",
              "solution": "'C'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Distance = |B - A| = magnitude of the difference.",
                "|V| = sqrt(vx^2 + vy^2 + vz^2).",
                "Answer: C (Magnitude)."
              ]
            },
            {
              "id": "vec-l14-w08",
              "level": 14,
              "params": {},
              "scenario": "You need to know if the player is LOOKING AT the enemy (within a narrow FOV cone). Which operation?\nA) Cross product B) Dot product C) Lerp D) Magnitude",
              "solution": "'B'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot of facing direction and direction to target.",
                "If dot > threshold (e.g., 0.8), the target is in the vision cone.",
                "Answer: B (Dot product)."
              ]
            },
            {
              "id": "vec-l14-w09",
              "level": 14,
              "params": {},
              "scenario": "A bullet flies in direction D and hits a surface with normal N. You need the angle between bullet and surface. Which two operations?\nA) Dot then arccos B) Cross then arctan C) Normalize then dot D) Lerp then dot",
              "solution": "'A'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "dot(D, N) = cos(angle).",
                "arccos(dot) = angle.",
                "Answer: A (Dot then arccos)."
              ]
            },
            {
              "id": "vec-l14-w10",
              "level": 14,
              "params": {},
              "scenario": "A magnet pulls the player toward a target at 3 m/s. Player at P, target at T. Which operations IN ORDER?\nA) Subtract, normalize, scale B) Cross, normalize C) Dot, scale D) Normalize, subtract",
              "solution": "'A'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "T - P = direction. Normalize. Multiply by speed.",
                "Velocity = normalize(target - player) \u00d7 3.",
                "Answer: A (Subtract, normalize, scale)."
              ]
            },
            {
              "id": "vec-l14-w11",
              "level": 14,
              "params": {},
              "scenario": "A guard detects the player only if the player is IN FRONT (within FOV) AND within 15 meters. Which TWO operations?\nA) Cross + magnitude B) Dot + magnitude C) Dot + normalize D) Cross + lerp",
              "solution": "'B'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Dot(guard_forward, to_player) > 0 = in front.",
                "|player - guard| < 15 = within range.",
                "Answer: B (Dot + magnitude)."
              ]
            },
            {
              "id": "vec-l14-w12",
              "level": 14,
              "params": {},
              "scenario": "A spaceship lands on a procedurally generated pad. Given three points on the pad, you need its UPWARD direction (surface normal). Which operation?\nA) Dot product B) Cross product C) Normalize D) Lerp",
              "solution": "'B'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Cross of two edges of the triangle gives the perpendicular normal.",
                "cross(AB, AC) = surface normal.",
                "Answer: B (Cross product)."
              ]
            },
            {
              "id": "vec-l14-w13",
              "level": 14,
              "params": {},
              "scenario": "A physics object hits a wall. You want it to SLIDE along the wall (not bounce). Operation: ___ the component into the wall from the velocity.\nA) Add B) Double C) Remove D) Cross",
              "solution": "'C'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Slide = V - (V\u00b7N)N. Removes the part going into the wall.",
                "This leaves only the component parallel to the surface.",
                "Answer: C (Remove)."
              ]
            },
            {
              "id": "vec-l14-w14",
              "level": 14,
              "params": {},
              "scenario": "A health bar smoothly decreases from 80 to 20 over time. Which operation?\nA) Cross product B) Dot product C) Lerp D) Normalize",
              "solution": "'C'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Lerp works on scalars: lerp(80, 20, t).",
                "Each frame: health += (target - health) \u00d7 speed.",
                "Answer: C (Lerp)."
              ]
            },
            {
              "id": "vec-l14-w15",
              "level": 14,
              "params": {},
              "scenario": "A racing game: the car faces direction F. Player presses RIGHT. Which operation for the strafe direction?\nA) Dot(F, right_input) B) cross(up, F) C) Normalize(F) D) F + (1,0,0)",
              "solution": "'B'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Right = cross(up, forward). Works in any car orientation.",
                "This gives the perpendicular right vector.",
                "Answer: B (cross(up, F))."
              ]
            },
            {
              "id": "vec-l14-w16",
              "level": 14,
              "params": {},
              "scenario": "Movement vector M, slope normal N. You want only the part of M that moves ALONG the slope. Which operation?\nA) Dot(M, N) B) M - (M\u00b7N)N C) cross(M, N) D) Normalize(M)",
              "solution": "'B'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Project onto surface: M_along = M - (M\u00b7N)N.",
                "Strips the normal component, leaving the parallel part.",
                "Answer: B (M - (M\u00b7N)N)."
              ]
            },
            {
              "id": "vec-l14-w17",
              "level": 14,
              "params": {},
              "scenario": "A turret at T needs to rotate toward enemy at E. Which operations to find the needed rotation angle?\nA) Subtract, then dot+arccos B) Cross, then dot C) Dot, then normalize D) Normalize, then cross",
              "solution": "'A'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Direction = E - T.",
                "Angle = arccos(dot(current_facing, direction)).",
                "Answer: A (Subtract, then dot+arccos)."
              ]
            },
            {
              "id": "vec-l14-w18",
              "level": 14,
              "params": {},
              "scenario": "Which of two enemies is CLOSER to the player? Both positions are known. Which operation?\nA) Normalize B) Cross product C) Magnitude of difference D) Dot product",
              "solution": "'C'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Distance = |enemy - player|.",
                "Smaller magnitude = closer. You can compare squared distances to skip sqrt.",
                "Answer: C (Magnitude)."
              ]
            },
            {
              "id": "vec-l14-w19",
              "level": 14,
              "params": {},
              "scenario": "You have a normalized direction D and want the OPPOSITE direction. Which operation?\nA) cross(D, up) B) -D C) dot(D, D) D) Normalize(D)",
              "solution": "'B'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "-D = opposite direction, same magnitude.",
                "Negating flips every component's sign.",
                "Answer: B (-D)."
              ]
            },
            {
              "id": "vec-l14-w20",
              "level": 14,
              "params": {},
              "scenario": "'Is the player's speed above 10 m/s?' Player velocity is V. Which operation extracts speed?\nA) Normalize(V) B) Dot(V, V) C) Magnitude of V D) Scale V by 2",
              "solution": "'C'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Speed = |V| = sqrt(vx^2 + vy^2 + vz^2).",
                "Magnitude gives the scalar speed.",
                "Answer: C (Magnitude)."
              ]
            },
            {
              "id": "vec-l14-w21",
              "level": 14,
              "params": {},
              "scenario": "An NPC walks from waypoint A to B at 2 m/s. Which operations in order?\nA) Subtract, normalize, scale B) Cross, dot C) Lerp, normalize D) Dot, normalize, subtract",
              "solution": "'A'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Direction = B - A. Unit = normalize(direction). Velocity = unit \u00d7 2.",
                "Answer: A (Subtract, normalize, scale)."
              ]
            },
            {
              "id": "vec-l14-w22",
              "level": 14,
              "params": {},
              "scenario": "Water reflection: the surface normal is (0,0,1). Camera look direction is L. Which operation for the reflection direction?\nA) cross(L, N) B) L - 2(L\u00b7N)N C) L + N D) dot(L, N)",
              "solution": "'B'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Reflection: R = L - 2(L\u00b7N)N. Standard mirror formula.",
                "Answer: B (L - 2(L\u00b7N)N)."
              ]
            },
            {
              "id": "vec-l14-w23",
              "level": 14,
              "params": {},
              "scenario": "A character's forward vector is (0,0,0) due to a bug. What happens calling normalize((0,0,0))?\nA) Returns (1,0,0) B) Division by zero / returns zero C) Returns (0,1,0) D) Nothing happens",
              "solution": "'B'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Normalizing zero = division by zero.",
                "Engines either return (0,0,0) or crash. Always guard against zero vectors.",
                "Answer: B."
              ]
            },
            {
              "id": "vec-l14-w24",
              "level": 14,
              "params": {},
              "scenario": "Player presses W to move in the CAMERA's forward direction, not world forward. Camera forward = F, input = 1. Which operation?\nA) F \u00d7 input (scale) B) F + input C) cross(F, up) D) dot(F, input)",
              "solution": "'A'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Scale the camera forward direction by the input value.",
                "velocity = camera_forward \u00d7 input_value.",
                "Answer: A (scale)."
              ]
            },
            {
              "id": "vec-l14-w25",
              "level": 14,
              "params": {},
              "scenario": "A 3D model from Maya (Y-up, Z-forward) is imported to Unreal (Z-up, X-forward). A vertex is at (2, 5, 3) in Maya. Convert to Unreal coordinates. Give (x, y, z).",
              "solution": "[2, 3, 5]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Maya: X-right, Y-up, Z-forward. Unreal: X-forward, Y-right, Z-up.",
                "Maya Y (up) \u2192 Unreal Z (up). Maya Z (forward) \u2192 Unreal X (forward).",
                "(Maya_x, Maya_z, Maya_y) = (2, 3, 5)."
              ]
            }
          ]
        }
      ]
    }
  }
};
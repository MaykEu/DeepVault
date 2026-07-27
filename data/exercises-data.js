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
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-002",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-003",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-004",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-005",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-006",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-007",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-008",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "Two players are in a 3D arena. Player A is at ({{p1x}}, {{p1y}}, {{p1z}}) and Player B is at ({{p2x}}, {{p2y}}, {{p2z}}). What is the vector FROM Player A TO Player B?",
              "solution": "[p2x - p1x, p2y - p1y, p2z - p1z]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Subtract A's position from B's: B - A, component by component.",
                "x: {{p2x}} - ({{p1x}}) = ?  y: {{p2y}} - ({{p1y}}) = ?  z: {{p2z}} - ({{p1z}}) = ?",
                "The result is ({{p2x}} - ({{p1x}}), {{p2y}} - ({{p1y}}), {{p2z}} - ({{p1z}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-009",
              "level": 1,
              "params": {
                "start_x": "randint(-12,12)",
                "start_y": "randint(-12,12)",
                "start_z": "randint(-12,12)",
                "dx": "randint(-12,12)",
                "dy": "randint(-12,12)",
                "dz": "randint(-12,12)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{start_x}}",
                    "y": "{{start_y}}",
                    "z": "{{start_z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{start_x}} + {{dx}}",
                    "y": "{{start_y}} + {{dy}}",
                    "z": "{{start_z}} + {{dz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u0394"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-010",
              "level": 1,
              "params": {
                "start_x": "randint(-12,12)",
                "start_y": "randint(-12,12)",
                "start_z": "randint(-12,12)",
                "dx": "randint(-12,12)",
                "dy": "randint(-12,12)",
                "dz": "randint(-12,12)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{start_x}}",
                    "y": "{{start_y}}",
                    "z": "{{start_z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{start_x}} + {{dx}}",
                    "y": "{{start_y}} + {{dy}}",
                    "z": "{{start_z}} + {{dz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u0394"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-011",
              "level": 1,
              "params": {
                "start_x": "randint(-12,12)",
                "start_y": "randint(-12,12)",
                "start_z": "randint(-12,12)",
                "dx": "randint(-12,12)",
                "dy": "randint(-12,12)",
                "dz": "randint(-12,12)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{start_x}}",
                    "y": "{{start_y}}",
                    "z": "{{start_z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{start_x}} + {{dx}}",
                    "y": "{{start_y}} + {{dy}}",
                    "z": "{{start_z}} + {{dz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u0394"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-012",
              "level": 1,
              "params": {
                "start_x": "randint(-12,12)",
                "start_y": "randint(-12,12)",
                "start_z": "randint(-12,12)",
                "dx": "randint(-12,12)",
                "dy": "randint(-12,12)",
                "dz": "randint(-12,12)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{start_x}}",
                    "y": "{{start_y}}",
                    "z": "{{start_z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{start_x}} + {{dx}}",
                    "y": "{{start_y}} + {{dy}}",
                    "z": "{{start_z}} + {{dz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u0394"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-013",
              "level": 1,
              "params": {
                "start_x": "randint(-12,12)",
                "start_y": "randint(-12,12)",
                "start_z": "randint(-12,12)",
                "dx": "randint(-12,12)",
                "dy": "randint(-12,12)",
                "dz": "randint(-12,12)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{start_x}}",
                    "y": "{{start_y}}",
                    "z": "{{start_z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{start_x}} + {{dx}}",
                    "y": "{{start_y}} + {{dy}}",
                    "z": "{{start_z}} + {{dz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u0394"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-014",
              "level": 1,
              "params": {
                "start_x": "randint(-12,12)",
                "start_y": "randint(-12,12)",
                "start_z": "randint(-12,12)",
                "dx": "randint(-12,12)",
                "dy": "randint(-12,12)",
                "dz": "randint(-12,12)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{start_x}}",
                    "y": "{{start_y}}",
                    "z": "{{start_z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{start_x}} + {{dx}}",
                    "y": "{{start_y}} + {{dy}}",
                    "z": "{{start_z}} + {{dz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u0394"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-015",
              "level": 1,
              "params": {
                "start_x": "randint(-12,12)",
                "start_y": "randint(-12,12)",
                "start_z": "randint(-12,12)",
                "dx": "randint(-12,12)",
                "dy": "randint(-12,12)",
                "dz": "randint(-12,12)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{start_x}}",
                    "y": "{{start_y}}",
                    "z": "{{start_z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{start_x}} + {{dx}}",
                    "y": "{{start_y}} + {{dy}}",
                    "z": "{{start_z}} + {{dz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u0394"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-016",
              "level": 1,
              "params": {
                "start_x": "randint(-12,12)",
                "start_y": "randint(-12,12)",
                "start_z": "randint(-12,12)",
                "dx": "randint(-12,12)",
                "dy": "randint(-12,12)",
                "dz": "randint(-12,12)"
              },
              "scenario": "A character leaves camp at ({{start_x}}, {{start_y}}, {{start_z}}) and walks {{dx}} units along X (forward), {{dy}} units along Y (right), and {{dz}} units along Z (up). What is their new position?",
              "solution": "[start_x + dx, start_y + dy, start_z + dz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Add the displacement to the starting position: start + offset.",
                "x: {{start_x}} + ({{dx}})  y: {{start_y}} + ({{dy}})  z: {{start_z}} + ({{dz}})",
                "Final position: ({{start_x}} + ({{dx}}), {{start_y}} + ({{dy}}), {{start_z}} + ({{dz}}))."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{start_x}}",
                    "y": "{{start_y}}",
                    "z": "{{start_z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{start_x}} + {{dx}}",
                    "y": "{{start_y}} + {{dy}}",
                    "z": "{{start_z}} + {{dz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u0394"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-017",
              "level": 1,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-018",
              "level": 1,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-019",
              "level": 1,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-020",
              "level": 1,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-021",
              "level": 1,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-022",
              "level": 1,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-023",
              "level": 1,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "Two allies want to meet exactly halfway. Ally A is at ({{ax}}, {{ay}}, {{az}}). Ally B is at ({{bx}}, {{by}}, {{bz}}). What position should they meet at?",
              "solution": "[(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "The midpoint is the average of both positions: (A + B) / 2.",
                "x: ({{ax}} + {{bx}}) / 2  y: ({{ay}} + {{by}}) / 2  z: ({{az}} + {{bz}}) / 2",
                "Midpoint: (({{ax}} + {{bx}})/2, ({{ay}} + {{by}})/2, ({{az}} + {{bz}})/2)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-024",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "Mid",
                    "x": "{{p1x}} + {{v1x}}",
                    "y": "{{p1y}} + {{v1y}}",
                    "z": "{{p1z}} + {{v1z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{p1x}} + {{v1x}} + {{v2x}}",
                    "y": "{{p1y}} + {{v1y}} + {{v2y}}",
                    "z": "{{p1z}} + {{v1z}} + {{v2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "v1"
                  },
                  {
                    "from": 1,
                    "to": 2,
                    "label": "v2"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-025",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "Mid",
                    "x": "{{p1x}} + {{v1x}}",
                    "y": "{{p1y}} + {{v1y}}",
                    "z": "{{p1z}} + {{v1z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{p1x}} + {{v1x}} + {{v2x}}",
                    "y": "{{p1y}} + {{v1y}} + {{v2y}}",
                    "z": "{{p1z}} + {{v1z}} + {{v2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "v1"
                  },
                  {
                    "from": 1,
                    "to": 2,
                    "label": "v2"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-026",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "Mid",
                    "x": "{{p1x}} + {{v1x}}",
                    "y": "{{p1y}} + {{v1y}}",
                    "z": "{{p1z}} + {{v1z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{p1x}} + {{v1x}} + {{v2x}}",
                    "y": "{{p1y}} + {{v1y}} + {{v2y}}",
                    "z": "{{p1z}} + {{v1z}} + {{v2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "v1"
                  },
                  {
                    "from": 1,
                    "to": 2,
                    "label": "v2"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-027",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "Mid",
                    "x": "{{p1x}} + {{v1x}}",
                    "y": "{{p1y}} + {{v1y}}",
                    "z": "{{p1z}} + {{v1z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{p1x}} + {{v1x}} + {{v2x}}",
                    "y": "{{p1y}} + {{v1y}} + {{v2y}}",
                    "z": "{{p1z}} + {{v1z}} + {{v2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "v1"
                  },
                  {
                    "from": 1,
                    "to": 2,
                    "label": "v2"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-028",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "Mid",
                    "x": "{{p1x}} + {{v1x}}",
                    "y": "{{p1y}} + {{v1y}}",
                    "z": "{{p1z}} + {{v1z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{p1x}} + {{v1x}} + {{v2x}}",
                    "y": "{{p1y}} + {{v1y}} + {{v2y}}",
                    "z": "{{p1z}} + {{v1z}} + {{v2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "v1"
                  },
                  {
                    "from": 1,
                    "to": 2,
                    "label": "v2"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-029",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "Mid",
                    "x": "{{p1x}} + {{v1x}}",
                    "y": "{{p1y}} + {{v1y}}",
                    "z": "{{p1z}} + {{v1z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{p1x}} + {{v1x}} + {{v2x}}",
                    "y": "{{p1y}} + {{v1y}} + {{v2y}}",
                    "z": "{{p1z}} + {{v1z}} + {{v2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "v1"
                  },
                  {
                    "from": 1,
                    "to": 2,
                    "label": "v2"
                  }
                ]
              }
            },
            {
              "id": "vec-l1-030",
              "level": 1,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Start",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "Mid",
                    "x": "{{p1x}} + {{v1x}}",
                    "y": "{{p1y}} + {{v1y}}",
                    "z": "{{p1z}} + {{v1z}}"
                  },
                  {
                    "label": "End",
                    "x": "{{p1x}} + {{v1x}} + {{v2x}}",
                    "y": "{{p1y}} + {{v1y}} + {{v2y}}",
                    "z": "{{p1z}} + {{v1z}} + {{v2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "v1"
                  },
                  {
                    "from": 1,
                    "to": 2,
                    "label": "v2"
                  }
                ]
              }
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
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-002",
              "level": 2,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-003",
              "level": 2,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-004",
              "level": 2,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-005",
              "level": 2,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-006",
              "level": 2,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-007",
              "level": 2,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-008",
              "level": 2,
              "params": {
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
              },
              "scenario": "A player at ({{p1x}}, {{p1y}}, {{p1z}}) needs to reach an objective at ({{p2x}}, {{p2y}}, {{p2z}}). What is the straight-line distance between them? Round to 2 decimals.",
              "solution": "sqrt((p2x - p1x)**2 + (p2y - p1y)**2 + (p2z - p1z)**2)",
              "answerType": "scalar_magnitude",
              "units": "units",
              "hints": [
                "Distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2).",
                "dx = {{p2x}} - ({{p1x}}), dy = {{p2y}} - ({{p1y}}), dz = {{p2z}} - ({{p1z}}). Square each, sum, sqrt.",
                "d = sqrt(dx^2 + dy^2 + dz^2). Compute and round to 2 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{p1x}}",
                    "y": "{{p1y}}",
                    "z": "{{p1z}}"
                  },
                  {
                    "label": "B",
                    "x": "{{p2x}}",
                    "y": "{{p2y}}",
                    "z": "{{p2z}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "A\u2192B"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-009",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "ez": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "E",
                    "x": "{{ex}}",
                    "y": "{{ey}}",
                    "z": "{{ez}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-010",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "ez": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "E",
                    "x": "{{ex}}",
                    "y": "{{ey}}",
                    "z": "{{ez}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-011",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "ez": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "E",
                    "x": "{{ex}}",
                    "y": "{{ey}}",
                    "z": "{{ez}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-012",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "ez": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "E",
                    "x": "{{ex}}",
                    "y": "{{ey}}",
                    "z": "{{ez}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-013",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "ez": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "E",
                    "x": "{{ex}}",
                    "y": "{{ey}}",
                    "z": "{{ez}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-014",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "ez": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "E",
                    "x": "{{ex}}",
                    "y": "{{ey}}",
                    "z": "{{ez}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-015",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "ez": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "E",
                    "x": "{{ex}}",
                    "y": "{{ey}}",
                    "z": "{{ez}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-016",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
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
              "_enumValues": "['A','B','a','b']",
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-017",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
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
              "_enumValues": "['A','B','a','b']",
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-018",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
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
              "_enumValues": "['A','B','a','b']",
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-019",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
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
              "_enumValues": "['A','B','a','b']",
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-020",
              "level": 2,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
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
              "_enumValues": "['A','B','a','b']",
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-021",
              "level": 2,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "radius": "randint(6,12)"
              },
              "scenario": "A grenade detonates at ({{gx}}, {{gy}}, {{gz}}) with a blast radius of {{radius}} meters. The player is at ({{px}}, {{py}}, {{pz}}). Is the player caught in the blast? (Answer 'yes' or 'no')",
              "solution": "sqrt((px - gx)**2 + (py - gy)**2 + (pz - gz)**2) <= radius ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance from the grenade to the player.",
                "If distance <= {{radius}}, the player is in the blast radius.",
                "Compute sqrt((player.x - grenade.x)^2 + ...) and compare to {{radius}}."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "\ud83d\udca3",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-022",
              "level": 2,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "radius": "randint(6,12)"
              },
              "scenario": "A grenade detonates at ({{gx}}, {{gy}}, {{gz}}) with a blast radius of {{radius}} meters. The player is at ({{px}}, {{py}}, {{pz}}). Is the player caught in the blast? (Answer 'yes' or 'no')",
              "solution": "sqrt((px - gx)**2 + (py - gy)**2 + (pz - gz)**2) <= radius ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance from the grenade to the player.",
                "If distance <= {{radius}}, the player is in the blast radius.",
                "Compute sqrt((player.x - grenade.x)^2 + ...) and compare to {{radius}}."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "\ud83d\udca3",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-023",
              "level": 2,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "radius": "randint(6,12)"
              },
              "scenario": "A grenade detonates at ({{gx}}, {{gy}}, {{gz}}) with a blast radius of {{radius}} meters. The player is at ({{px}}, {{py}}, {{pz}}). Is the player caught in the blast? (Answer 'yes' or 'no')",
              "solution": "sqrt((px - gx)**2 + (py - gy)**2 + (pz - gz)**2) <= radius ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance from the grenade to the player.",
                "If distance <= {{radius}}, the player is in the blast radius.",
                "Compute sqrt((player.x - grenade.x)^2 + ...) and compare to {{radius}}."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "\ud83d\udca3",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-024",
              "level": 2,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "radius": "randint(6,12)"
              },
              "scenario": "A grenade detonates at ({{gx}}, {{gy}}, {{gz}}) with a blast radius of {{radius}} meters. The player is at ({{px}}, {{py}}, {{pz}}). Is the player caught in the blast? (Answer 'yes' or 'no')",
              "solution": "sqrt((px - gx)**2 + (py - gy)**2 + (pz - gz)**2) <= radius ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance from the grenade to the player.",
                "If distance <= {{radius}}, the player is in the blast radius.",
                "Compute sqrt((player.x - grenade.x)^2 + ...) and compare to {{radius}}."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "\ud83d\udca3",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-025",
              "level": 2,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "radius": "randint(6,12)"
              },
              "scenario": "A grenade detonates at ({{gx}}, {{gy}}, {{gz}}) with a blast radius of {{radius}} meters. The player is at ({{px}}, {{py}}, {{pz}}). Is the player caught in the blast? (Answer 'yes' or 'no')",
              "solution": "sqrt((px - gx)**2 + (py - gy)**2 + (pz - gz)**2) <= radius ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Calculate the distance from the grenade to the player.",
                "If distance <= {{radius}}, the player is in the blast radius.",
                "Compute sqrt((player.x - grenade.x)^2 + ...) and compare to {{radius}}."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "\ud83d\udca3",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d=?",
                    "showComponents": true
                  }
                ]
              }
            },
            {
              "id": "vec-l2-026",
              "level": 2,
              "params": {
                "x1": "randint(-12,12)",
                "y1": "randint(-12,12)",
                "z1": "randint(-12,12)",
                "x2": "randint(-12,12)",
                "y2": "randint(-12,12)",
                "z2": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{x1}}",
                    "y": "{{y1}}",
                    "z": "{{z1}}"
                  },
                  {
                    "label": "B",
                    "x": "{{x2}}",
                    "y": "{{y2}}",
                    "z": "{{z2}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-027",
              "level": 2,
              "params": {
                "x1": "randint(-12,12)",
                "y1": "randint(-12,12)",
                "z1": "randint(-12,12)",
                "x2": "randint(-12,12)",
                "y2": "randint(-12,12)",
                "z2": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{x1}}",
                    "y": "{{y1}}",
                    "z": "{{z1}}"
                  },
                  {
                    "label": "B",
                    "x": "{{x2}}",
                    "y": "{{y2}}",
                    "z": "{{z2}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-028",
              "level": 2,
              "params": {
                "x1": "randint(-12,12)",
                "y1": "randint(-12,12)",
                "z1": "randint(-12,12)",
                "x2": "randint(-12,12)",
                "y2": "randint(-12,12)",
                "z2": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{x1}}",
                    "y": "{{y1}}",
                    "z": "{{z1}}"
                  },
                  {
                    "label": "B",
                    "x": "{{x2}}",
                    "y": "{{y2}}",
                    "z": "{{z2}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-029",
              "level": 2,
              "params": {
                "x1": "randint(-12,12)",
                "y1": "randint(-12,12)",
                "z1": "randint(-12,12)",
                "x2": "randint(-12,12)",
                "y2": "randint(-12,12)",
                "z2": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{x1}}",
                    "y": "{{y1}}",
                    "z": "{{z1}}"
                  },
                  {
                    "label": "B",
                    "x": "{{x2}}",
                    "y": "{{y2}}",
                    "z": "{{z2}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d"
                  }
                ]
              }
            },
            {
              "id": "vec-l2-030",
              "level": 2,
              "params": {
                "x1": "randint(-12,12)",
                "y1": "randint(-12,12)",
                "z1": "randint(-12,12)",
                "x2": "randint(-12,12)",
                "y2": "randint(-12,12)",
                "z2": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{x1}}",
                    "y": "{{y1}}",
                    "z": "{{z1}}"
                  },
                  {
                    "label": "B",
                    "x": "{{x2}}",
                    "y": "{{y2}}",
                    "z": "{{z2}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "d"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-017",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-018",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-019",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-020",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-021",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-022",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-023",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Dir",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "Vel",
                    "x": "{{dx}} / mag * {{speed}}",
                    "y": "{{dy}} / mag * {{speed}}",
                    "z": "{{dz}} / mag * {{speed}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7speed"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-s06",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
                "factor": "randfloat(0.1,0.8,1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies speed by {{factor}}. What is the new velocity? Round to 1 decimal.",
              "solution": "[vx * factor, vy * factor, vz * factor]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each component gets multiplied by the speed factor: {{factor}}.",
                "New velocity = old_velocity \u00d7 {{factor}}, component by component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "V'",
                    "x": "{{vx}} * {{factor}}",
                    "y": "{{vy}} * {{factor}}",
                    "z": "{{vz}} * {{factor}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7{{factor}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-s07",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
                "factor": "randfloat(0.1,0.8,1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies speed by {{factor}}. What is the new velocity? Round to 1 decimal.",
              "solution": "[vx * factor, vy * factor, vz * factor]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each component gets multiplied by the speed factor: {{factor}}.",
                "New velocity = old_velocity \u00d7 {{factor}}, component by component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "V'",
                    "x": "{{vx}} * {{factor}}",
                    "y": "{{vy}} * {{factor}}",
                    "z": "{{vz}} * {{factor}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7{{factor}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-s08",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
                "factor": "randfloat(0.1,0.8,1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies speed by {{factor}}. What is the new velocity? Round to 1 decimal.",
              "solution": "[vx * factor, vy * factor, vz * factor]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each component gets multiplied by the speed factor: {{factor}}.",
                "New velocity = old_velocity \u00d7 {{factor}}, component by component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "V'",
                    "x": "{{vx}} * {{factor}}",
                    "y": "{{vy}} * {{factor}}",
                    "z": "{{vz}} * {{factor}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7{{factor}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-s09",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
                "factor": "randfloat(0.1,0.8,1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies speed by {{factor}}. What is the new velocity? Round to 1 decimal.",
              "solution": "[vx * factor, vy * factor, vz * factor]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each component gets multiplied by the speed factor: {{factor}}.",
                "New velocity = old_velocity \u00d7 {{factor}}, component by component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "V'",
                    "x": "{{vx}} * {{factor}}",
                    "y": "{{vy}} * {{factor}}",
                    "z": "{{vz}} * {{factor}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7{{factor}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l3-s10",
              "level": 3,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
                "factor": "randfloat(0.1,0.8,1)"
              },
              "scenario": "A player's velocity is ({{vx}}, {{vy}}, {{vz}}). They enter a slow zone that multiplies speed by {{factor}}. What is the new velocity? Round to 1 decimal.",
              "solution": "[vx * factor, vy * factor, vz * factor]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Each component gets multiplied by the speed factor: {{factor}}.",
                "New velocity = old_velocity \u00d7 {{factor}}, component by component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "V'",
                    "x": "{{vx}} * {{factor}}",
                    "y": "{{vy}} * {{factor}}",
                    "z": "{{vz}} * {{factor}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7{{factor}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "D",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "D'",
                    "x": "{{dx}} * {{scalar}}",
                    "y": "{{dy}} * {{scalar}}",
                    "z": "{{dz}} * {{scalar}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7{{scalar}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "D",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "D'",
                    "x": "{{dx}} * {{scalar}}",
                    "y": "{{dy}} * {{scalar}}",
                    "z": "{{dz}} * {{scalar}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7{{scalar}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "D",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "D'",
                    "x": "{{dx}} * {{scalar}}",
                    "y": "{{dy}} * {{scalar}}",
                    "z": "{{dz}} * {{scalar}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7{{scalar}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "D",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "D'",
                    "x": "{{dx}} * {{scalar}}",
                    "y": "{{dy}} * {{scalar}}",
                    "z": "{{dz}} * {{scalar}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7{{scalar}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "D",
                    "x": "{{dx}}",
                    "y": "{{dy}}",
                    "z": "{{dz}}"
                  },
                  {
                    "label": "D'",
                    "x": "{{dx}} * {{scalar}}",
                    "y": "{{dy}} * {{scalar}}",
                    "z": "{{dz}} * {{scalar}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00d7{{scalar}}"
                  }
                ]
              }
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
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "T",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "dir"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-002",
              "level": 4,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "T",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "dir"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-003",
              "level": 4,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "T",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "dir"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-004",
              "level": 4,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "T",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "dir"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-005",
              "level": 4,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "T",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "dir"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-006",
              "level": 4,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "T",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "dir"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-007",
              "level": 4,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "T",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "dir"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-008",
              "level": 4,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "T",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "dir"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-009",
              "level": 4,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "T",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "dir"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-010",
              "level": 4,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A player at ({{px}}, {{py}}, {{pz}}) wants to move toward a target at ({{tx}}, {{ty}}, {{tz}}). What is the UNIT direction vector pointing from the player to the target? Round each component to 3 decimals.",
              "solution": "let dx = tx - px; let dy = ty - py; let dz = tz - pz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "First find the direction vector: target - player.",
                "Then divide each component by the magnitude to get a unit vector.",
                "Normalized vector = (dx/|d|, dy/|d|, dz/|d|). Round to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  },
                  {
                    "label": "T",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "dir"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-011",
              "level": 4,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "G",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "C",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00fb"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-012",
              "level": 4,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "G",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "C",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00fb"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-013",
              "level": 4,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "G",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "C",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00fb"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-014",
              "level": 4,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "G",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "C",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00fb"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-015",
              "level": 4,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "G",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "C",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00fb"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-016",
              "level": 4,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "G",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "C",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00fb"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-017",
              "level": 4,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "G",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "C",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00fb"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-018",
              "level": 4,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "G",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "C",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00fb"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-019",
              "level": 4,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "G",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "C",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00fb"
                  }
                ]
              }
            },
            {
              "id": "vec-l4-020",
              "level": 4,
              "params": {
                "gx": "randint(-12,12)",
                "gy": "randint(-12,12)",
                "gz": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)"
              },
              "scenario": "A turret at ({{gx}}, {{gy}}, {{gz}}) aims at a crosshair position ({{cx}}, {{cy}}, {{cz}}). What is the normalized direction the projectile should fly? Round to 3 decimals per component.",
              "solution": "let dx = cx - gx; let dy = cy - gy; let dz = cz - gz; let mag = sqrt(dx*dx + dy*dy + dz*dz); [dx/mag, dy/mag, dz/mag]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Direction from gun to crosshair: crosshair - gun.",
                "Normalize: divide by the length of the vector.",
                "Each component of the unit vector rounded to 3 decimals."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "G",
                    "x": "{{gx}}",
                    "y": "{{gy}}",
                    "z": "{{gz}}"
                  },
                  {
                    "label": "C",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u00fb"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
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
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
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
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
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
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
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
                "p1x": "randint(-12,12)",
                "p1y": "randint(-12,12)",
                "p1z": "randint(-12,12)",
                "p2x": "randint(-12,12)",
                "p2y": "randint(-12,12)",
                "p2z": "randint(-12,12)"
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
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "ez": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)"
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
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "ez": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)"
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
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-010",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-011",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-012",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-013",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-014",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-015",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-016",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-024",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-025",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-026",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-027",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-028",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-029",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-030",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{ax}}, {{ay}}, {{az}}) follows a player at ({{bx}}, {{by}}, {{bz}}). Each frame the camera moves 25% closer to the player. What is the camera's new position after one frame? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * 0.25, ay + (by - ay) * 0.25, az + (bz - az) * 0.25]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Smooth follow: camera = camera + (player - camera) * 0.25.",
                "This moves the camera 25% of the way toward the player each frame.",
                "Apply lerp with t=0.25 to each component."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l01",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l02",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l03",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l04",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l05",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l06",
              "level": 6,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "bz": "randint(-12,12)",
                "t": "randfloat(0.15,0.85,2)"
              },
              "scenario": "A character at A({{ax}}, {{ay}}, {{az}}) wants to reach B({{bx}}, {{by}}, {{bz}}). They teleport {{t}} of the way there. Where do they land? Round to 1 decimal.",
              "solution": "[ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Lerp: P = A + (B - A) \u00d7 t.",
                "t = {{t}} means covering {{t}} of the gap from A toward B."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l07",
              "level": 6,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-10,10)",
                "cz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-10,10)",
                "pz": "randint(-12,12)",
                "pct": "randint(15,40,5)"
              },
              "scenario": "A smooth camera at ({{cx}}, {{cy}}, {{cz}}) follows a player at ({{px}}, {{py}}, {{pz}}). Each frame it moves {{pct}}% closer. After one frame, where is the camera? Round to 1 decimal.",
              "solution": "let t = pct / 100; [cx + (px - cx) * t, cy + (py - cy) * t, cz + (pz - cz) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Camera lerps: camera += (player - camera) \u00d7 t.",
                "t = {{pct}}/100 = {{pct/100}}. That fraction of the gap is closed each frame."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Plyr",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u2192"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l08",
              "level": 6,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-10,10)",
                "cz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-10,10)",
                "pz": "randint(-12,12)",
                "pct": "randint(15,40,5)"
              },
              "scenario": "A smooth camera at ({{cx}}, {{cy}}, {{cz}}) follows a player at ({{px}}, {{py}}, {{pz}}). Each frame it moves {{pct}}% closer. After one frame, where is the camera? Round to 1 decimal.",
              "solution": "let t = pct / 100; [cx + (px - cx) * t, cy + (py - cy) * t, cz + (pz - cz) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Camera lerps: camera += (player - camera) \u00d7 t.",
                "t = {{pct}}/100 = {{pct/100}}. That fraction of the gap is closed each frame."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Plyr",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u2192"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l09",
              "level": 6,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-10,10)",
                "cz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-10,10)",
                "pz": "randint(-12,12)",
                "pct": "randint(15,40,5)"
              },
              "scenario": "A smooth camera at ({{cx}}, {{cy}}, {{cz}}) follows a player at ({{px}}, {{py}}, {{pz}}). Each frame it moves {{pct}}% closer. After one frame, where is the camera? Round to 1 decimal.",
              "solution": "let t = pct / 100; [cx + (px - cx) * t, cy + (py - cy) * t, cz + (pz - cz) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Camera lerps: camera += (player - camera) \u00d7 t.",
                "t = {{pct}}/100 = {{pct/100}}. That fraction of the gap is closed each frame."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Plyr",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u2192"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l10",
              "level": 6,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-10,10)",
                "cz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-10,10)",
                "pz": "randint(-12,12)",
                "pct": "randint(15,40,5)"
              },
              "scenario": "A smooth camera at ({{cx}}, {{cy}}, {{cz}}) follows a player at ({{px}}, {{py}}, {{pz}}). Each frame it moves {{pct}}% closer. After one frame, where is the camera? Round to 1 decimal.",
              "solution": "let t = pct / 100; [cx + (px - cx) * t, cy + (py - cy) * t, cz + (pz - cz) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Camera lerps: camera += (player - camera) \u00d7 t.",
                "t = {{pct}}/100 = {{pct/100}}. That fraction of the gap is closed each frame."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Plyr",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u2192"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l11",
              "level": 6,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-10,10)",
                "cz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-10,10)",
                "pz": "randint(-12,12)",
                "pct": "randint(15,40,5)"
              },
              "scenario": "A smooth camera at ({{cx}}, {{cy}}, {{cz}}) follows a player at ({{px}}, {{py}}, {{pz}}). Each frame it moves {{pct}}% closer. After one frame, where is the camera? Round to 1 decimal.",
              "solution": "let t = pct / 100; [cx + (px - cx) * t, cy + (py - cy) * t, cz + (pz - cz) * t]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Camera lerps: camera += (player - camera) \u00d7 t.",
                "t = {{pct}}/100 = {{pct/100}}. That fraction of the gap is closed each frame."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Plyr",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "\u2192"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l12",
              "level": 6,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l13",
              "level": 6,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l14",
              "level": 6,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
            },
            {
              "id": "vec-l6-l15",
              "level": 6,
              "params": {
                "vx": "randint(-12,12)",
                "vy": "randint(-12,12)",
                "vz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{vx}}",
                    "y": "{{vy}}",
                    "z": "{{vz}}"
                  },
                  {
                    "label": "\u00fb",
                    "x": "{{vx}} / |V|",
                    "y": "{{vy}} / |V|",
                    "z": "{{vz}} / |V|"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "normalize"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "fov-cone-3d",
                "coneAngle": "60",
                "targetLabel": "P",
                "guard": {
                  "x": "0",
                  "y": "0",
                  "z": "0"
                },
                "forward": {
                  "x": "{{fx}}",
                  "y": "{{fy}}",
                  "z": "{{fz}}"
                },
                "target": {
                  "x": "{{ex}}",
                  "y": "{{ey}}",
                  "z": "{{ez}}"
                },
                "guardLabel": "Guard"
              }
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
              ],
              "visual": {
                "type": "fov-cone-3d",
                "coneAngle": "60",
                "targetLabel": "P",
                "guard": {
                  "x": "0",
                  "y": "0",
                  "z": "0"
                },
                "forward": {
                  "x": "{{fx}}",
                  "y": "{{fy}}",
                  "z": "{{fz}}"
                },
                "target": {
                  "x": "{{ex}}",
                  "y": "{{ey}}",
                  "z": "{{ez}}"
                },
                "guardLabel": "Guard"
              }
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
              ],
              "visual": {
                "type": "fov-cone-3d",
                "coneAngle": "60",
                "targetLabel": "P",
                "guard": {
                  "x": "0",
                  "y": "0",
                  "z": "0"
                },
                "forward": {
                  "x": "{{fx}}",
                  "y": "{{fy}}",
                  "z": "{{fz}}"
                },
                "target": {
                  "x": "{{ex}}",
                  "y": "{{ey}}",
                  "z": "{{ez}}"
                },
                "guardLabel": "Guard"
              }
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
              ],
              "visual": {
                "type": "fov-cone-3d",
                "coneAngle": "60",
                "targetLabel": "P",
                "guard": {
                  "x": "0",
                  "y": "0",
                  "z": "0"
                },
                "forward": {
                  "x": "{{fx}}",
                  "y": "{{fy}}",
                  "z": "{{fz}}"
                },
                "target": {
                  "x": "{{ex}}",
                  "y": "{{ey}}",
                  "z": "{{ez}}"
                },
                "guardLabel": "Guard"
              }
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
              ],
              "visual": {
                "type": "fov-cone-3d",
                "coneAngle": "60",
                "targetLabel": "P",
                "guard": {
                  "x": "0",
                  "y": "0",
                  "z": "0"
                },
                "forward": {
                  "x": "{{fx}}",
                  "y": "{{fy}}",
                  "z": "{{fz}}"
                },
                "target": {
                  "x": "{{ex}}",
                  "y": "{{ey}}",
                  "z": "{{ez}}"
                },
                "guardLabel": "Guard"
              }
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
              ],
              "visual": {
                "type": "fov-cone-3d",
                "coneAngle": "60",
                "targetLabel": "P",
                "guard": {
                  "x": "0",
                  "y": "0",
                  "z": "0"
                },
                "forward": {
                  "x": "{{fx}}",
                  "y": "{{fy}}",
                  "z": "{{fz}}"
                },
                "target": {
                  "x": "{{ex}}",
                  "y": "{{ey}}",
                  "z": "{{ez}}"
                },
                "guardLabel": "Guard"
              }
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
              ],
              "visual": {
                "type": "fov-cone-3d",
                "coneAngle": "60",
                "targetLabel": "P",
                "guard": {
                  "x": "0",
                  "y": "0",
                  "z": "0"
                },
                "forward": {
                  "x": "{{fx}}",
                  "y": "{{fy}}",
                  "z": "{{fz}}"
                },
                "target": {
                  "x": "{{ex}}",
                  "y": "{{ey}}",
                  "z": "{{ez}}"
                },
                "guardLabel": "Guard"
              }
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
              ],
              "visual": {
                "type": "fov-cone-3d",
                "coneAngle": "60",
                "targetLabel": "P",
                "guard": {
                  "x": "0",
                  "y": "0",
                  "z": "0"
                },
                "forward": {
                  "x": "{{fx}}",
                  "y": "{{fy}}",
                  "z": "{{fz}}"
                },
                "target": {
                  "x": "{{ex}}",
                  "y": "{{ey}}",
                  "z": "{{ez}}"
                },
                "guardLabel": "Guard"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
            },
            {
              "id": "vec-l7-024",
              "level": 7,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
            },
            {
              "id": "vec-l7-025",
              "level": 7,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
            },
            {
              "id": "vec-l7-026",
              "level": 7,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
            },
            {
              "id": "vec-l7-027",
              "level": 7,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
            },
            {
              "id": "vec-l7-028",
              "level": 7,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
            },
            {
              "id": "vec-l7-029",
              "level": 7,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-011",
              "level": 8,
              "params": {
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-012",
              "level": 8,
              "params": {
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-013",
              "level": 8,
              "params": {
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-014",
              "level": 8,
              "params": {
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-015",
              "level": 8,
              "params": {
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-016",
              "level": 8,
              "params": {
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-017",
              "level": 8,
              "params": {
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-018",
              "level": 8,
              "params": {
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)",
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-026",
              "level": 8,
              "params": {
                "sx": "randint(-12,12)",
                "sy": "randint(-12,12)",
                "sz": "randint(-12,12)",
                "lx": "randint(-12,12)",
                "ly": "randint(-12,12)",
                "lz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-027",
              "level": 8,
              "params": {
                "sx": "randint(-12,12)",
                "sy": "randint(-12,12)",
                "sz": "randint(-12,12)",
                "lx": "randint(-12,12)",
                "ly": "randint(-12,12)",
                "lz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-028",
              "level": 8,
              "params": {
                "sx": "randint(-12,12)",
                "sy": "randint(-12,12)",
                "sz": "randint(-12,12)",
                "lx": "randint(-12,12)",
                "ly": "randint(-12,12)",
                "lz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-029",
              "level": 8,
              "params": {
                "sx": "randint(-12,12)",
                "sy": "randint(-12,12)",
                "sz": "randint(-12,12)",
                "lx": "randint(-12,12)",
                "ly": "randint(-12,12)",
                "lz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-030",
              "level": 8,
              "params": {
                "sx": "randint(-12,12)",
                "sy": "randint(-12,12)",
                "sz": "randint(-12,12)",
                "lx": "randint(-12,12)",
                "ly": "randint(-12,12)",
                "lz": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-031",
              "level": 8,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "e1x": "randint(-12,12)",
                "e1y": "randint(-12,12)",
                "e1z": "randint(-12,12)",
                "e2x": "randint(-12,12)",
                "e2y": "randint(-12,12)",
                "e2z": "randint(-12,12)"
              },
              "scenario": "An ally at ({{ax}}, {{ay}}, {{az}}) aims at enemy 1 at ({{e1x}}, {{e1y}}, {{e1z}}), then swings to aim at enemy 2 at ({{e2x}}, {{e2y}}, {{e2z}}). What is the angle (in degrees) between the two aim directions? Round to 1 decimal.",
              "solution": "let d1x = e1x - ax; let d1y = e1y - ay; let d1z = e1z - az; let d2x = e2x - ax; let d2y = e2y - ay; let d2z = e2z - az; let d = d1x*d2x + d1y*d2y + d1z*d2z; let m1 = sqrt(d1x*d1x + d1y*d1y + d1z*d1z); let m2 = sqrt(d2x*d2x + d2y*d2y + d2z*d2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Find direction vectors from ally to each enemy.",
                "Then compute the angle between those two direction vectors.",
                "Angle = arccos(dot(dir1, dir2) / (|dir1| * |dir2|))."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-032",
              "level": 8,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "e1x": "randint(-12,12)",
                "e1y": "randint(-12,12)",
                "e1z": "randint(-12,12)",
                "e2x": "randint(-12,12)",
                "e2y": "randint(-12,12)",
                "e2z": "randint(-12,12)"
              },
              "scenario": "An ally at ({{ax}}, {{ay}}, {{az}}) aims at enemy 1 at ({{e1x}}, {{e1y}}, {{e1z}}), then swings to aim at enemy 2 at ({{e2x}}, {{e2y}}, {{e2z}}). What is the angle (in degrees) between the two aim directions? Round to 1 decimal.",
              "solution": "let d1x = e1x - ax; let d1y = e1y - ay; let d1z = e1z - az; let d2x = e2x - ax; let d2y = e2y - ay; let d2z = e2z - az; let d = d1x*d2x + d1y*d2y + d1z*d2z; let m1 = sqrt(d1x*d1x + d1y*d1y + d1z*d1z); let m2 = sqrt(d2x*d2x + d2y*d2y + d2z*d2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Find direction vectors from ally to each enemy.",
                "Then compute the angle between those two direction vectors.",
                "Angle = arccos(dot(dir1, dir2) / (|dir1| * |dir2|))."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-033",
              "level": 8,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "e1x": "randint(-12,12)",
                "e1y": "randint(-12,12)",
                "e1z": "randint(-12,12)",
                "e2x": "randint(-12,12)",
                "e2y": "randint(-12,12)",
                "e2z": "randint(-12,12)"
              },
              "scenario": "An ally at ({{ax}}, {{ay}}, {{az}}) aims at enemy 1 at ({{e1x}}, {{e1y}}, {{e1z}}), then swings to aim at enemy 2 at ({{e2x}}, {{e2y}}, {{e2z}}). What is the angle (in degrees) between the two aim directions? Round to 1 decimal.",
              "solution": "let d1x = e1x - ax; let d1y = e1y - ay; let d1z = e1z - az; let d2x = e2x - ax; let d2y = e2y - ay; let d2z = e2z - az; let d = d1x*d2x + d1y*d2y + d1z*d2z; let m1 = sqrt(d1x*d1x + d1y*d1y + d1z*d1z); let m2 = sqrt(d2x*d2x + d2y*d2y + d2z*d2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Find direction vectors from ally to each enemy.",
                "Then compute the angle between those two direction vectors.",
                "Angle = arccos(dot(dir1, dir2) / (|dir1| * |dir2|))."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-034",
              "level": 8,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "e1x": "randint(-12,12)",
                "e1y": "randint(-12,12)",
                "e1z": "randint(-12,12)",
                "e2x": "randint(-12,12)",
                "e2y": "randint(-12,12)",
                "e2z": "randint(-12,12)"
              },
              "scenario": "An ally at ({{ax}}, {{ay}}, {{az}}) aims at enemy 1 at ({{e1x}}, {{e1y}}, {{e1z}}), then swings to aim at enemy 2 at ({{e2x}}, {{e2y}}, {{e2z}}). What is the angle (in degrees) between the two aim directions? Round to 1 decimal.",
              "solution": "let d1x = e1x - ax; let d1y = e1y - ay; let d1z = e1z - az; let d2x = e2x - ax; let d2y = e2y - ay; let d2z = e2z - az; let d = d1x*d2x + d1y*d2y + d1z*d2z; let m1 = sqrt(d1x*d1x + d1y*d1y + d1z*d1z); let m2 = sqrt(d2x*d2x + d2y*d2y + d2z*d2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Find direction vectors from ally to each enemy.",
                "Then compute the angle between those two direction vectors.",
                "Angle = arccos(dot(dir1, dir2) / (|dir1| * |dir2|))."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
            },
            {
              "id": "vec-l8-035",
              "level": 8,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "az": "randint(-12,12)",
                "e1x": "randint(-12,12)",
                "e1y": "randint(-12,12)",
                "e1z": "randint(-12,12)",
                "e2x": "randint(-12,12)",
                "e2y": "randint(-12,12)",
                "e2z": "randint(-12,12)"
              },
              "scenario": "An ally at ({{ax}}, {{ay}}, {{az}}) aims at enemy 1 at ({{e1x}}, {{e1y}}, {{e1z}}), then swings to aim at enemy 2 at ({{e2x}}, {{e2y}}, {{e2z}}). What is the angle (in degrees) between the two aim directions? Round to 1 decimal.",
              "solution": "let d1x = e1x - ax; let d1y = e1y - ay; let d1z = e1z - az; let d2x = e2x - ax; let d2y = e2y - ay; let d2z = e2z - az; let d = d1x*d2x + d1y*d2y + d1z*d2z; let m1 = sqrt(d1x*d1x + d1y*d1y + d1z*d1z); let m2 = sqrt(d2x*d2x + d2y*d2y + d2z*d2z); let c = d/(m1*m2); let cClamped = max(-1, min(1, c)); acos(cClamped) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Find direction vectors from ally to each enemy.",
                "Then compute the angle between those two direction vectors.",
                "Angle = arccos(dot(dir1, dir2) / (|dir1| * |dir2|))."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "A",
                "toLabel": "B",
                "resultLabel": "\u03b8"
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l9-c06",
              "level": 9,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)"
              },
              "scenario": "A point in Blender (Z-up, Y-forward, X-right) is ({{px}}, {{py}}, {{pz}}). Convert to Unreal Engine coordinates (Z-up, X-forward, Y-right). Round to 1 decimal.",
              "solution": "[-py, px, pz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "UE forward (+X) = Blender's Y axis. UE right (+Y) = Blender's X axis.",
                "X_UE = -Y_Blender, Y_UE = X_Blender, Z stays the same."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l9-c07",
              "level": 9,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)"
              },
              "scenario": "A point in Blender (Z-up, Y-forward, X-right) is ({{px}}, {{py}}, {{pz}}). Convert to Unreal Engine coordinates (Z-up, X-forward, Y-right). Round to 1 decimal.",
              "solution": "[-py, px, pz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "UE forward (+X) = Blender's Y axis. UE right (+Y) = Blender's X axis.",
                "X_UE = -Y_Blender, Y_UE = X_Blender, Z stays the same."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l9-c08",
              "level": 9,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)"
              },
              "scenario": "A point in Blender (Z-up, Y-forward, X-right) is ({{px}}, {{py}}, {{pz}}). Convert to Unreal Engine coordinates (Z-up, X-forward, Y-right). Round to 1 decimal.",
              "solution": "[-py, px, pz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "UE forward (+X) = Blender's Y axis. UE right (+Y) = Blender's X axis.",
                "X_UE = -Y_Blender, Y_UE = X_Blender, Z stays the same."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l9-c09",
              "level": 9,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)"
              },
              "scenario": "A point in Blender (Z-up, Y-forward, X-right) is ({{px}}, {{py}}, {{pz}}). Convert to Unreal Engine coordinates (Z-up, X-forward, Y-right). Round to 1 decimal.",
              "solution": "[-py, px, pz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "UE forward (+X) = Blender's Y axis. UE right (+Y) = Blender's X axis.",
                "X_UE = -Y_Blender, Y_UE = X_Blender, Z stays the same."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l9-c10",
              "level": 9,
              "params": {
                "px": "randint(-12,12)",
                "py": "randint(-12,12)",
                "pz": "randint(-12,12)"
              },
              "scenario": "A point in Blender (Z-up, Y-forward, X-right) is ({{px}}, {{py}}, {{pz}}). Convert to Unreal Engine coordinates (Z-up, X-forward, Y-right). Round to 1 decimal.",
              "solution": "[-py, px, pz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "UE forward (+X) = Blender's Y axis. UE right (+Y) = Blender's X axis.",
                "X_UE = -Y_Blender, Y_UE = X_Blender, Z stays the same."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P",
                    "x": "{{px}}",
                    "y": "{{py}}",
                    "z": "{{pz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-011",
              "level": 10,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-012",
              "level": 10,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-013",
              "level": 10,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-014",
              "level": 10,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-015",
              "level": 10,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-016",
              "level": 10,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-017",
              "level": 10,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-018",
              "level": 10,
              "params": {
                "ax": "randint(-12,12)",
                "ay": "randint(-12,12)",
                "bx": "randint(-12,12)",
                "by": "randint(-12,12)",
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)"
              },
              "scenario": "A path goes from point A ({{ax}}, {{ay}}) to B ({{bx}}, {{by}}) to C ({{cx}}, {{cy}}). Using the cross product of AB and BC, is the turn at B clockwise or counter-clockwise? (2D, z-component of AB \u00d7 BC)",
              "solution": "let abx = bx - ax; let aby = by - ay; let bcx = cx - bx; let bcy = cy - by; (abx * bcy - aby * bcx) > 0 ? 'counter-clockwise' : ((abx * bcy - aby * bcx) < 0 ? 'clockwise' : 'zero')",
              "answerType": "cw_ccw",
              "units": "",
              "hints": [
                "Vector AB = B - A. Vector BC = C - B.",
                "Cross product z = ABx * BCy - ABy * BCx.",
                "Positive z = counter-clockwise turn. Negative z = clockwise turn."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-026",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-027",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-028",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-029",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-030",
              "level": 10,
              "params": {
                "fx": "randint(-8, 8)",
                "fy": "randint(-8, 8)",
                "fz": "0",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-031",
              "level": 10,
              "params": {
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "e2x": "randint(-12,12)",
                "e2y": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-032",
              "level": 10,
              "params": {
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "e2x": "randint(-12,12)",
                "e2y": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-033",
              "level": 10,
              "params": {
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "e2x": "randint(-12,12)",
                "e2y": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-034",
              "level": 10,
              "params": {
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "e2x": "randint(-12,12)",
                "e2y": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
            },
            {
              "id": "vec-l10-035",
              "level": 10,
              "params": {
                "ex": "randint(-12,12)",
                "ey": "randint(-12,12)",
                "e2x": "randint(-12,12)",
                "e2y": "randint(-12,12)",
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
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "F",
                "toLabel": "E",
                "resultLabel": "z=?"
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
                "cy": "randint(1,10)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
                "cy": "randint(1,10)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
                "cy": "randint(1,10)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
                "cy": "randint(1,10)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
                "cy": "randint(1,10)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
                "cy": "randint(1,10)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
                "cy": "randint(1,10)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
                "cy": "randint(1,10)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
                "cy": "randint(1,10)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
                "cy": "randint(1,10)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "A",
                    "x": "{{ax}}",
                    "y": "{{ay}}",
                    "z": "{{az}}"
                  },
                  {
                    "label": "B",
                    "x": "{{bx}}",
                    "y": "{{by}}",
                    "z": "{{bz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
            },
            {
              "id": "vec-l12-011",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-12,-2)",
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
            },
            {
              "id": "vec-l12-012",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-12,-2)",
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
            },
            {
              "id": "vec-l12-013",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-12,-2)",
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
            },
            {
              "id": "vec-l12-014",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-12,-2)",
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
            },
            {
              "id": "vec-l12-015",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-12,-2)",
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
            },
            {
              "id": "vec-l12-016",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-12,-2)",
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
            },
            {
              "id": "vec-l12-017",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-12,-2)",
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
            },
            {
              "id": "vec-l12-018",
              "level": 12,
              "params": {
                "vx": "randint(-10, 10)",
                "vy": "randint(-12,-2)",
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
                "jump": "randint(5,12)"
              },
              "scenario": "A player collides with a wall (normal = ({{nx}}, {{ny}}, {{nz}})) while moving at velocity ({{px}}, {{py}}, {{pz}}). They perform a wall jump, launching off with {{jump}} m/s in the direction of the normal. The sliding velocity is V - (V\u00b7N)*N (removing the part going into the wall). What is their total new velocity (slide + jump * normal)? Round to 1 decimal.",
              "solution": "let d = px*nx + py*ny + pz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = px - s*nx; let sy = py - s*ny; let sz = pz - s*nz; [sx + jump*nx/sqrt(m), sy + jump*ny/sqrt(m), sz + jump*nz/sqrt(m)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Slide velocity = V - projection of V onto N.",
                "Projection = (V\u00b7N)/(N\u00b7N) * N. Subtract from V to get slide.",
                "Add jump force in the normal direction (normalize N first)."
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
                "jump": "randint(5,12)"
              },
              "scenario": "A player collides with a wall (normal = ({{nx}}, {{ny}}, {{nz}})) while moving at velocity ({{px}}, {{py}}, {{pz}}). They perform a wall jump, launching off with {{jump}} m/s in the direction of the normal. The sliding velocity is V - (V\u00b7N)*N (removing the part going into the wall). What is their total new velocity (slide + jump * normal)? Round to 1 decimal.",
              "solution": "let d = px*nx + py*ny + pz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = px - s*nx; let sy = py - s*ny; let sz = pz - s*nz; [sx + jump*nx/sqrt(m), sy + jump*ny/sqrt(m), sz + jump*nz/sqrt(m)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Slide velocity = V - projection of V onto N.",
                "Projection = (V\u00b7N)/(N\u00b7N) * N. Subtract from V to get slide.",
                "Add jump force in the normal direction (normalize N first)."
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
                "jump": "randint(5,12)"
              },
              "scenario": "A player collides with a wall (normal = ({{nx}}, {{ny}}, {{nz}})) while moving at velocity ({{px}}, {{py}}, {{pz}}). They perform a wall jump, launching off with {{jump}} m/s in the direction of the normal. The sliding velocity is V - (V\u00b7N)*N (removing the part going into the wall). What is their total new velocity (slide + jump * normal)? Round to 1 decimal.",
              "solution": "let d = px*nx + py*ny + pz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = px - s*nx; let sy = py - s*ny; let sz = pz - s*nz; [sx + jump*nx/sqrt(m), sy + jump*ny/sqrt(m), sz + jump*nz/sqrt(m)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Slide velocity = V - projection of V onto N.",
                "Projection = (V\u00b7N)/(N\u00b7N) * N. Subtract from V to get slide.",
                "Add jump force in the normal direction (normalize N first)."
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
                "jump": "randint(5,12)"
              },
              "scenario": "A player collides with a wall (normal = ({{nx}}, {{ny}}, {{nz}})) while moving at velocity ({{px}}, {{py}}, {{pz}}). They perform a wall jump, launching off with {{jump}} m/s in the direction of the normal. The sliding velocity is V - (V\u00b7N)*N (removing the part going into the wall). What is their total new velocity (slide + jump * normal)? Round to 1 decimal.",
              "solution": "let d = px*nx + py*ny + pz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = px - s*nx; let sy = py - s*ny; let sz = pz - s*nz; [sx + jump*nx/sqrt(m), sy + jump*ny/sqrt(m), sz + jump*nz/sqrt(m)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Slide velocity = V - projection of V onto N.",
                "Projection = (V\u00b7N)/(N\u00b7N) * N. Subtract from V to get slide.",
                "Add jump force in the normal direction (normalize N first)."
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
                "jump": "randint(5,12)"
              },
              "scenario": "A player collides with a wall (normal = ({{nx}}, {{ny}}, {{nz}})) while moving at velocity ({{px}}, {{py}}, {{pz}}). They perform a wall jump, launching off with {{jump}} m/s in the direction of the normal. The sliding velocity is V - (V\u00b7N)*N (removing the part going into the wall). What is their total new velocity (slide + jump * normal)? Round to 1 decimal.",
              "solution": "let d = px*nx + py*ny + pz*nz; let m = nx*nx + ny*ny + nz*nz; let s = d / m; let sx = px - s*nx; let sy = py - s*ny; let sz = pz - s*nz; [sx + jump*nx/sqrt(m), sy + jump*ny/sqrt(m), sz + jump*nz/sqrt(m)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Slide velocity = V - projection of V onto N.",
                "Projection = (V\u00b7N)/(N\u00b7N) * N. Subtract from V to get slide.",
                "Add jump force in the normal direction (normalize N first)."
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "reflection",
                "incoming": "V",
                "outgoing": "R",
                "normal": "N"
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{speed}}\u00d7cos({{angle}}\u00b0)",
                    "y": "{{speed}}\u00d7sin({{angle}}\u00b0)",
                    "z": "0"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{speed}}\u00d7cos({{angle}}\u00b0)",
                    "y": "{{speed}}\u00d7sin({{angle}}\u00b0)",
                    "z": "0"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{speed}}\u00d7cos({{angle}}\u00b0)",
                    "y": "{{speed}}\u00d7sin({{angle}}\u00b0)",
                    "z": "0"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{speed}}\u00d7cos({{angle}}\u00b0)",
                    "y": "{{speed}}\u00d7sin({{angle}}\u00b0)",
                    "z": "0"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{speed}}\u00d7cos({{angle}}\u00b0)",
                    "y": "{{speed}}\u00d7sin({{angle}}\u00b0)",
                    "z": "0"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{speed}}\u00d7cos({{angle}}\u00b0)",
                    "y": "{{speed}}\u00d7sin({{angle}}\u00b0)",
                    "z": "0"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{speed}}\u00d7cos({{angle}}\u00b0)",
                    "y": "{{speed}}\u00d7sin({{angle}}\u00b0)",
                    "z": "0"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "V",
                    "x": "{{speed}}\u00d7cos({{angle}}\u00b0)",
                    "y": "{{speed}}\u00d7sin({{angle}}\u00b0)",
                    "z": "0"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "M",
                    "x": "{{mx}}",
                    "y": "{{my}}",
                    "z": "{{mz}}"
                  },
                  {
                    "label": "\u2225",
                    "x": "{{mx}} - proj_x",
                    "y": "{{my}} - proj_y",
                    "z": "{{mz}} - proj_z"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "along"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "M",
                    "x": "{{mx}}",
                    "y": "{{my}}",
                    "z": "{{mz}}"
                  },
                  {
                    "label": "\u2225",
                    "x": "{{mx}} - proj_x",
                    "y": "{{my}} - proj_y",
                    "z": "{{mz}} - proj_z"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "along"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "M",
                    "x": "{{mx}}",
                    "y": "{{my}}",
                    "z": "{{mz}}"
                  },
                  {
                    "label": "\u2225",
                    "x": "{{mx}} - proj_x",
                    "y": "{{my}} - proj_y",
                    "z": "{{mz}} - proj_z"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "along"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "M",
                    "x": "{{mx}}",
                    "y": "{{my}}",
                    "z": "{{mz}}"
                  },
                  {
                    "label": "\u2225",
                    "x": "{{mx}} - proj_x",
                    "y": "{{my}} - proj_y",
                    "z": "{{mz}} - proj_z"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "along"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "M",
                    "x": "{{mx}}",
                    "y": "{{my}}",
                    "z": "{{mz}}"
                  },
                  {
                    "label": "\u2225",
                    "x": "{{mx}} - proj_x",
                    "y": "{{my}} - proj_y",
                    "z": "{{mz}} - proj_z"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "along"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "M",
                    "x": "{{mx}}",
                    "y": "{{my}}",
                    "z": "{{mz}}"
                  },
                  {
                    "label": "\u2225",
                    "x": "{{mx}} - proj_x",
                    "y": "{{my}} - proj_y",
                    "z": "{{mz}} - proj_z"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "along"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "M",
                    "x": "{{mx}}",
                    "y": "{{my}}",
                    "z": "{{mz}}"
                  },
                  {
                    "label": "\u2225",
                    "x": "{{mx}} - proj_x",
                    "y": "{{my}} - proj_y",
                    "z": "{{mz}} - proj_z"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "along"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-016",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1,8)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P1",
                    "x": "0",
                    "y": "0",
                    "z": "0"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-017",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1,8)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P1",
                    "x": "0",
                    "y": "0",
                    "z": "0"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-018",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1,8)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P1",
                    "x": "0",
                    "y": "0",
                    "z": "0"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-019",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1,8)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P1",
                    "x": "0",
                    "y": "0",
                    "z": "0"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-020",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1,8)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P1",
                    "x": "0",
                    "y": "0",
                    "z": "0"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-021",
              "level": 13,
              "params": {
                "gx": "0",
                "gy": "-1",
                "gz": "0",
                "nx": "randint(-5, 5)",
                "ny": "randint(1,8)",
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "P1",
                    "x": "0",
                    "y": "0",
                    "z": "0"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
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
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "F",
                    "x": "{{fx}}",
                    "y": "{{fy}}",
                    "z": "{{fz}}"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-029",
              "level": 13,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Tgt",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "look"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-030",
              "level": 13,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Tgt",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "look"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-031",
              "level": 13,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Tgt",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "look"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-032",
              "level": 13,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Tgt",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "look"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-033",
              "level": 13,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Tgt",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "look"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-034",
              "level": 13,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Tgt",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "look"
                  }
                ]
              }
            },
            {
              "id": "vec-l13-035",
              "level": 13,
              "params": {
                "cx": "randint(-12,12)",
                "cy": "randint(-12,12)",
                "cz": "randint(-12,12)",
                "tx": "randint(-12,12)",
                "ty": "randint(-12,12)",
                "tz": "randint(-12,12)"
              },
              "scenario": "A camera at ({{cx}}, {{cy}}, {{cz}}) looks at a target at ({{tx}}, {{ty}}, {{tz}}). Decompose the camera-to-target vector into HORIZONTAL (y-component = 0) and VERTICAL components. Give the horizontal component vector. Round to 1 decimal.",
              "solution": "let dx = tx - cx; [dx, 0, tz - cz]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "Horizontal component = the x and z parts, with y set to 0.",
                "Camera-to-target = (target_x - camera_x, target_y - camera_y, target_z - camera_z).",
                "Horizontal: (dx, 0, dz)."
              ],
              "visual": {
                "type": "coordinate-3d",
                "points": [
                  {
                    "label": "Cam",
                    "x": "{{cx}}",
                    "y": "{{cy}}",
                    "z": "{{cz}}"
                  },
                  {
                    "label": "Tgt",
                    "x": "{{tx}}",
                    "y": "{{ty}}",
                    "z": "{{tz}}"
                  }
                ],
                "arrows": [
                  {
                    "from": 0,
                    "to": 1,
                    "label": "look"
                  }
                ]
              }
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
    },
    "trigonometry": {
      "id": "trigonometry",
      "name": "Trigonometry",
      "icon": "\ud83d\udcd0",
      "description": "Angles, triangles, and circular functions \u2014 the math behind rotation, aiming, and camera orbits.",
      "levels": [
        {
          "level": 1,
          "title": "Right Triangle Basics",
          "questions": [
            {
              "id": "trig-l1-001",
              "level": 1,
              "params": {
                "adj": "3",
                "opp": "4"
              },
              "scenario": "A player stands 3m from a wall. The wall is 4m tall. What is the straight-line distance from the player's feet to the top of the wall? Round to 2 decimals.",
              "solution": "sqrt(3*3 + 4*4)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "This is a right triangle. Use the Pythagorean theorem: c\u00b2 = a\u00b2 + b\u00b2.",
                "c\u00b2 = 3\u00b2 + 4\u00b2 = 9 + 16 = 25.",
                "c = sqrt(25). Compute and round."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "3m",
                "opposite": "4m",
                "hypotenuse": "?",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-002",
              "level": 1,
              "params": {
                "adj": "6",
                "opp": "7"
              },
              "scenario": "A player stands 6m from a wall. The wall is 7m tall. What is the straight-line distance from the player's feet to the top of the wall? Round to 2 decimals.",
              "solution": "sqrt(6*6 + 7*7)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "This is a right triangle. Use the Pythagorean theorem: c\u00b2 = a\u00b2 + b\u00b2.",
                "c\u00b2 = 6\u00b2 + 7\u00b2 = 36 + 49 = 85.",
                "c = sqrt(85). Compute and round."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "6m",
                "opposite": "7m",
                "hypotenuse": "?",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-003",
              "level": 1,
              "params": {
                "adj": "9",
                "opp": "10"
              },
              "scenario": "A player stands 9m from a wall. The wall is 10m tall. What is the straight-line distance from the player's feet to the top of the wall? Round to 2 decimals.",
              "solution": "sqrt(9*9 + 10*10)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "This is a right triangle. Use the Pythagorean theorem: c\u00b2 = a\u00b2 + b\u00b2.",
                "c\u00b2 = 9\u00b2 + 10\u00b2 = 81 + 100 = 181.",
                "c = sqrt(181). Compute and round."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "9m",
                "opposite": "10m",
                "hypotenuse": "?",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-004",
              "level": 1,
              "params": {
                "adj": "9",
                "opp": "13"
              },
              "scenario": "A player stands 9m from a wall. The wall is 13m tall. What is the straight-line distance from the player's feet to the top of the wall? Round to 2 decimals.",
              "solution": "sqrt(9*9 + 13*13)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "This is a right triangle. Use the Pythagorean theorem: c\u00b2 = a\u00b2 + b\u00b2.",
                "c\u00b2 = 9\u00b2 + 13\u00b2 = 81 + 169 = 250.",
                "c = sqrt(250). Compute and round."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "9m",
                "opposite": "13m",
                "hypotenuse": "?",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-005",
              "level": 1,
              "params": {
                "adj": "5",
                "opp": "7"
              },
              "scenario": "A ladder leans against a wall. Its base is 5m from the wall, and it reaches 7m up. How long is the ladder? Round to 2 decimals.",
              "solution": "sqrt(5*5 + 7*7)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Ladder, ground, wall form a right triangle. Ladder = hypotenuse.",
                "Ladder\u00b2 = 5\u00b2 + 7\u00b2 = 25 + 49.",
                "Ladder = sqrt(74)."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "5m",
                "opposite": "7m",
                "hypotenuse": "?",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-006",
              "level": 1,
              "params": {
                "adj": "8",
                "opp": "11"
              },
              "scenario": "A ladder leans against a wall. Its base is 8m from the wall, and it reaches 11m up. How long is the ladder? Round to 2 decimals.",
              "solution": "sqrt(8*8 + 11*11)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Ladder, ground, wall form a right triangle. Ladder = hypotenuse.",
                "Ladder\u00b2 = 8\u00b2 + 11\u00b2 = 64 + 121.",
                "Ladder = sqrt(185)."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "8m",
                "opposite": "11m",
                "hypotenuse": "?",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-007",
              "level": 1,
              "params": {
                "adj": "11",
                "opp": "15"
              },
              "scenario": "A ladder leans against a wall. Its base is 11m from the wall, and it reaches 15m up. How long is the ladder? Round to 2 decimals.",
              "solution": "sqrt(11*11 + 15*15)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Ladder, ground, wall form a right triangle. Ladder = hypotenuse.",
                "Ladder\u00b2 = 11\u00b2 + 15\u00b2 = 121 + 225.",
                "Ladder = sqrt(346)."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "11m",
                "opposite": "15m",
                "hypotenuse": "?",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-008",
              "level": 1,
              "params": {
                "adj": "14",
                "opp": "19"
              },
              "scenario": "A ladder leans against a wall. Its base is 14m from the wall, and it reaches 19m up. How long is the ladder? Round to 2 decimals.",
              "solution": "sqrt(14*14 + 19*19)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Ladder, ground, wall form a right triangle. Ladder = hypotenuse.",
                "Ladder\u00b2 = 14\u00b2 + 19\u00b2 = 196 + 361.",
                "Ladder = sqrt(557)."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "14m",
                "opposite": "19m",
                "hypotenuse": "?",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-009",
              "level": 1,
              "params": {
                "hyp": "10",
                "known": "6"
              },
              "scenario": "A character fires a grappling hook. The hook travels 10m in a straight line and lands 6m higher than the character. How far HORIZONTALLY is the character from the target point? Round to 2 decimals.",
              "solution": "sqrt(10*10 - 6*6)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "The grappling line is the hypotenuse. Height = opposite side. Horizontal = adjacent.",
                "adj\u00b2 = hyp\u00b2 - opp\u00b2 = 10\u00b2 - 6\u00b2 = 100 - 36.",
                "adj = sqrt(64)."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "?",
                "opposite": "6m",
                "hypotenuse": "10m",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-010",
              "level": 1,
              "params": {
                "hyp": "15",
                "known": "8"
              },
              "scenario": "A character fires a grappling hook. The hook travels 15m in a straight line and lands 8m higher than the character. How far HORIZONTALLY is the character from the target point? Round to 2 decimals.",
              "solution": "sqrt(15*15 - 8*8)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "The grappling line is the hypotenuse. Height = opposite side. Horizontal = adjacent.",
                "adj\u00b2 = hyp\u00b2 - opp\u00b2 = 15\u00b2 - 8\u00b2 = 225 - 64.",
                "adj = sqrt(161)."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "?",
                "opposite": "8m",
                "hypotenuse": "15m",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-011",
              "level": 1,
              "params": {
                "hyp": "20",
                "known": "10"
              },
              "scenario": "A character fires a grappling hook. The hook travels 20m in a straight line and lands 10m higher than the character. How far HORIZONTALLY is the character from the target point? Round to 2 decimals.",
              "solution": "sqrt(20*20 - 10*10)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "The grappling line is the hypotenuse. Height = opposite side. Horizontal = adjacent.",
                "adj\u00b2 = hyp\u00b2 - opp\u00b2 = 20\u00b2 - 10\u00b2 = 400 - 100.",
                "adj = sqrt(300)."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "?",
                "opposite": "10m",
                "hypotenuse": "20m",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-012",
              "level": 1,
              "params": {
                "hyp": "25",
                "known": "12"
              },
              "scenario": "A character fires a grappling hook. The hook travels 25m in a straight line and lands 12m higher than the character. How far HORIZONTALLY is the character from the target point? Round to 2 decimals.",
              "solution": "sqrt(25*25 - 12*12)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "The grappling line is the hypotenuse. Height = opposite side. Horizontal = adjacent.",
                "adj\u00b2 = hyp\u00b2 - opp\u00b2 = 25\u00b2 - 12\u00b2 = 625 - 144.",
                "adj = sqrt(481)."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "?",
                "opposite": "12m",
                "hypotenuse": "25m",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-013",
              "level": 1,
              "params": {
                "hyp": "13",
                "known": "5"
              },
              "scenario": "A ramp is 13m long (the surface you walk on). It rises 5m vertically. What is the horizontal span of the ramp? Round to 2 decimals.",
              "solution": "sqrt(13*13 - 5*5)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Ramp surface = hypotenuse, rise = opposite, span = adjacent.",
                "span\u00b2 = 13\u00b2 - 5\u00b2.",
                "span = sqrt(144)."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "?",
                "opposite": "5m",
                "hypotenuse": "13m",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-014",
              "level": 1,
              "params": {
                "hyp": "20",
                "known": "8"
              },
              "scenario": "A ramp is 20m long (the surface you walk on). It rises 8m vertically. What is the horizontal span of the ramp? Round to 2 decimals.",
              "solution": "sqrt(20*20 - 8*8)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Ramp surface = hypotenuse, rise = opposite, span = adjacent.",
                "span\u00b2 = 20\u00b2 - 8\u00b2.",
                "span = sqrt(336)."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "?",
                "opposite": "8m",
                "hypotenuse": "20m",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-015",
              "level": 1,
              "params": {
                "hyp": "27",
                "known": "11"
              },
              "scenario": "A ramp is 27m long (the surface you walk on). It rises 11m vertically. What is the horizontal span of the ramp? Round to 2 decimals.",
              "solution": "sqrt(27*27 - 11*11)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Ramp surface = hypotenuse, rise = opposite, span = adjacent.",
                "span\u00b2 = 27\u00b2 - 11\u00b2.",
                "span = sqrt(608)."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "?",
                "opposite": "11m",
                "hypotenuse": "27m",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-016",
              "level": 1,
              "params": {},
              "scenario": "A player on the ground looks up at a drone. The line of sight is 20m. The drone is 12m above ground. The horizontal distance is 16m. Relative to the ground angle: which side is 12m? Answer 'adjacent', 'opposite', or 'hypotenuse'.",
              "solution": "'opposite'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "The angle is at the player's feet, between ground and line of sight.",
                "12m is the vertical side opposite the angle.",
                "Answer: opposite."
              ],
              "visual": {
                "type": "right-triangle",
                "angleLabel": "\u03b8",
                "adjacent": "16m",
                "opposite": "?",
                "hypotenuse": "20m"
              }
            },
            {
              "id": "trig-l1-017",
              "level": 1,
              "params": {},
              "scenario": "Same scenario: line of sight 20m, height 12m, horizontal 16m. Which side is 20m?",
              "solution": "'hypotenuse'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "The line of sight is the longest side, across from the right angle.",
                "The hypotenuse is always opposite the right angle.",
                "Answer: hypotenuse."
              ],
              "visual": {
                "type": "right-triangle",
                "angleLabel": "\u03b8",
                "adjacent": "16m",
                "opposite": "12m",
                "hypotenuse": "?"
              }
            },
            {
              "id": "trig-l1-018",
              "level": 1,
              "params": {},
              "scenario": "Same scenario: line of sight 20m, height 12m, horizontal 16m. Which side is 16m?",
              "solution": "'adjacent'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "16m is the ground distance \u2014 the side next to the angle.",
                "Adjacent = the side touching the angle that's not the hypotenuse.",
                "Answer: adjacent."
              ],
              "visual": {
                "type": "right-triangle",
                "angleLabel": "\u03b8",
                "adjacent": "?",
                "opposite": "12m",
                "hypotenuse": "20m"
              }
            },
            {
              "id": "trig-l1-019",
              "level": 1,
              "params": {},
              "scenario": "A character stands at the base of a cliff. They look up at a 30\u00b0 angle at a rope hanging from the top. The cliff is 20m tall. Relative to the 30\u00b0 angle at the character's position: the 20m cliff is which side?",
              "solution": "'opposite'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "The angle is at the character's position, looking up.",
                "The cliff height is across from the angle = opposite.",
                "Answer: opposite."
              ],
              "visual": {
                "type": "right-triangle",
                "angleLabel": "\u03b8",
                "adjacent": "16m",
                "opposite": "?",
                "hypotenuse": "20m"
              }
            },
            {
              "id": "trig-l1-020",
              "level": 1,
              "params": {},
              "scenario": "Same cliff scenario: the distance from the character to the cliff base along the ground is 35m. Relative to the 30\u00b0 angle: the 35m is which side?",
              "solution": "'adjacent'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "The ground distance is along the side touching the angle.",
                "Adjacent = the side next to the angle (not the hypotenuse).",
                "Answer: adjacent."
              ],
              "visual": {
                "type": "right-triangle",
                "angleLabel": "\u03b8",
                "adjacent": "?",
                "opposite": "12m",
                "hypotenuse": "20m"
              }
            },
            {
              "id": "trig-l1-021",
              "level": 1,
              "params": {
                "a": "3",
                "b": "4",
                "c": "5"
              },
              "scenario": "Do the sides 3m, 4m, and 5m form a valid right triangle? (Answer 'yes' or 'no')",
              "solution": "3*3 + 4*4 == 5*5 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Check: a\u00b2 + b\u00b2 = 3\u00b2 + 4\u00b2 = 9 + 16 = 25.",
                "c\u00b2 = 5\u00b2 = 25.",
                "25 == 25. This is a valid right triangle."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "3",
                "opposite": "4",
                "hypotenuse": "5",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-022",
              "level": 1,
              "params": {
                "a": "6",
                "b": "8",
                "c": "10"
              },
              "scenario": "Do the sides 6m, 8m, and 10m form a valid right triangle? (Answer 'yes' or 'no')",
              "solution": "6*6 + 8*8 == 10*10 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Check: a\u00b2 + b\u00b2 = 6\u00b2 + 8\u00b2 = 36 + 64 = 100.",
                "c\u00b2 = 10\u00b2 = 100.",
                "100 == 100. This is a valid right triangle."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "6",
                "opposite": "8",
                "hypotenuse": "10",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-023",
              "level": 1,
              "params": {
                "a": "9",
                "b": "12",
                "c": "15"
              },
              "scenario": "Do the sides 9m, 12m, and 15m form a valid right triangle? (Answer 'yes' or 'no')",
              "solution": "9*9 + 12*12 == 15*15 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Check: a\u00b2 + b\u00b2 = 9\u00b2 + 12\u00b2 = 81 + 144 = 225.",
                "c\u00b2 = 15\u00b2 = 225.",
                "225 == 225. This is a valid right triangle."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "9",
                "opposite": "12",
                "hypotenuse": "15",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-024",
              "level": 1,
              "params": {
                "a": "12",
                "b": "16",
                "c": "20"
              },
              "scenario": "Do the sides 12m, 16m, and 20m form a valid right triangle? (Answer 'yes' or 'no')",
              "solution": "12*12 + 16*16 == 20*20 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Check: a\u00b2 + b\u00b2 = 12\u00b2 + 16\u00b2 = 144 + 256 = 400.",
                "c\u00b2 = 20\u00b2 = 400.",
                "400 == 400. This is a valid right triangle."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "12",
                "opposite": "16",
                "hypotenuse": "20",
                "angleLabel": "?"
              }
            },
            {
              "id": "trig-l1-025",
              "level": 1,
              "params": {
                "a": "15",
                "b": "20",
                "c": "25"
              },
              "scenario": "Do the sides 15m, 20m, and 25m form a valid right triangle? (Answer 'yes' or 'no')",
              "solution": "15*15 + 20*20 == 25*25 ? 'yes' : 'no'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "Check: a\u00b2 + b\u00b2 = 15\u00b2 + 20\u00b2 = 225 + 400 = 625.",
                "c\u00b2 = 25\u00b2 = 625.",
                "625 == 625. This is a valid right triangle."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "15",
                "opposite": "20",
                "hypotenuse": "25",
                "angleLabel": "?"
              }
            }
          ]
        },
        {
          "level": 2,
          "title": "Sine & Cosine",
          "questions": [
            {
              "id": "trig-l2-001",
              "level": 2,
              "params": {
                "angle": "24",
                "radius": "3"
              },
              "scenario": "A particle orbits at radius 3m at angle 24\u00b0 from X-axis. X-coordinate? (x = r\u00d7cos(\u03b8)). Round 2 dec.",
              "solution": "radius * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "x = 3 \u00d7 cos(24\u00b0) = 2.74."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(x,?)"
              }
            },
            {
              "id": "trig-l2-002",
              "level": 2,
              "params": {
                "angle": "45",
                "radius": "6"
              },
              "scenario": "A particle orbits at radius 6m at angle 45\u00b0 from X-axis. X-coordinate? (x = r\u00d7cos(\u03b8)). Round 2 dec.",
              "solution": "radius * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "x = 6 \u00d7 cos(45\u00b0) = 4.24."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(x,?)"
              }
            },
            {
              "id": "trig-l2-003",
              "level": 2,
              "params": {
                "angle": "38",
                "radius": "5"
              },
              "scenario": "A particle orbits at radius 5m at angle 38\u00b0 from X-axis. X-coordinate? (x = r\u00d7cos(\u03b8)). Round 2 dec.",
              "solution": "radius * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "x = 5 \u00d7 cos(38\u00b0) = 3.94."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(x,?)"
              }
            },
            {
              "id": "trig-l2-004",
              "level": 2,
              "params": {
                "angle": "23",
                "radius": "13"
              },
              "scenario": "A particle orbits at radius 13m at angle 23\u00b0 from X-axis. X-coordinate? (x = r\u00d7cos(\u03b8)). Round 2 dec.",
              "solution": "radius * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "x = 13 \u00d7 cos(23\u00b0) = 11.97."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(x,?)"
              }
            },
            {
              "id": "trig-l2-005",
              "level": 2,
              "params": {
                "angle": "79",
                "radius": "4"
              },
              "scenario": "A particle orbits at radius 4m at angle 79\u00b0 from X-axis. X-coordinate? (x = r\u00d7cos(\u03b8)). Round 2 dec.",
              "solution": "radius * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "x = 4 \u00d7 cos(79\u00b0) = 0.76."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(x,?)"
              }
            },
            {
              "id": "trig-l2-006",
              "level": 2,
              "params": {
                "angle": "64",
                "radius": "3"
              },
              "scenario": "A particle orbits at radius 3m at angle 64\u00b0 from X-axis. X-coordinate? (x = r\u00d7cos(\u03b8)). Round 2 dec.",
              "solution": "radius * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "x = 3 \u00d7 cos(64\u00b0) = 1.32."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(x,?)"
              }
            },
            {
              "id": "trig-l2-007",
              "level": 2,
              "params": {
                "angle": "13",
                "radius": "4"
              },
              "scenario": "A particle orbits at radius 4m at angle 13\u00b0 from X-axis. X-coordinate? (x = r\u00d7cos(\u03b8)). Round 2 dec.",
              "solution": "radius * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "x = 4 \u00d7 cos(13\u00b0) = 3.90."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(x,?)"
              }
            },
            {
              "id": "trig-l2-008",
              "level": 2,
              "params": {
                "angle": "37",
                "radius": "6"
              },
              "scenario": "A particle orbits at radius 6m at angle 37\u00b0 from X-axis. X-coordinate? (x = r\u00d7cos(\u03b8)). Round 2 dec.",
              "solution": "radius * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "x = 6 \u00d7 cos(37\u00b0) = 4.79."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(x,?)"
              }
            },
            {
              "id": "trig-l2-009",
              "level": 2,
              "params": {
                "angle": "74",
                "radius": "12"
              },
              "scenario": "A particle orbits at radius 12m at angle 74\u00b0 from X-axis. Y-coordinate? (y = r\u00d7sin(\u03b8)). Round 2 dec.",
              "solution": "radius * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "y = 12 \u00d7 sin(74\u00b0) = 11.54."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(?,y)"
              }
            },
            {
              "id": "trig-l2-010",
              "level": 2,
              "params": {
                "angle": "13",
                "radius": "11"
              },
              "scenario": "A particle orbits at radius 11m at angle 13\u00b0 from X-axis. Y-coordinate? (y = r\u00d7sin(\u03b8)). Round 2 dec.",
              "solution": "radius * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "y = 11 \u00d7 sin(13\u00b0) = 2.47."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(?,y)"
              }
            },
            {
              "id": "trig-l2-011",
              "level": 2,
              "params": {
                "angle": "35",
                "radius": "14"
              },
              "scenario": "A particle orbits at radius 14m at angle 35\u00b0 from X-axis. Y-coordinate? (y = r\u00d7sin(\u03b8)). Round 2 dec.",
              "solution": "radius * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "y = 14 \u00d7 sin(35\u00b0) = 8.03."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(?,y)"
              }
            },
            {
              "id": "trig-l2-012",
              "level": 2,
              "params": {
                "angle": "79",
                "radius": "9"
              },
              "scenario": "A particle orbits at radius 9m at angle 79\u00b0 from X-axis. Y-coordinate? (y = r\u00d7sin(\u03b8)). Round 2 dec.",
              "solution": "radius * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "y = 9 \u00d7 sin(79\u00b0) = 8.83."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(?,y)"
              }
            },
            {
              "id": "trig-l2-013",
              "level": 2,
              "params": {
                "angle": "38",
                "radius": "10"
              },
              "scenario": "A particle orbits at radius 10m at angle 38\u00b0 from X-axis. Y-coordinate? (y = r\u00d7sin(\u03b8)). Round 2 dec.",
              "solution": "radius * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "y = 10 \u00d7 sin(38\u00b0) = 6.16."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(?,y)"
              }
            },
            {
              "id": "trig-l2-014",
              "level": 2,
              "params": {
                "angle": "45",
                "radius": "15"
              },
              "scenario": "A particle orbits at radius 15m at angle 45\u00b0 from X-axis. Y-coordinate? (y = r\u00d7sin(\u03b8)). Round 2 dec.",
              "solution": "radius * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "y = 15 \u00d7 sin(45\u00b0) = 10.61."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(?,y)"
              }
            },
            {
              "id": "trig-l2-015",
              "level": 2,
              "params": {
                "angle": "10",
                "radius": "15"
              },
              "scenario": "A particle orbits at radius 15m at angle 10\u00b0 from X-axis. Y-coordinate? (y = r\u00d7sin(\u03b8)). Round 2 dec.",
              "solution": "radius * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "y = 15 \u00d7 sin(10\u00b0) = 2.60."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(?,y)"
              }
            },
            {
              "id": "trig-l2-016",
              "level": 2,
              "params": {
                "angle": "30",
                "radius": "14"
              },
              "scenario": "A particle orbits at radius 14m at angle 30\u00b0 from X-axis. Y-coordinate? (y = r\u00d7sin(\u03b8)). Round 2 dec.",
              "solution": "radius * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "y = 14 \u00d7 sin(30\u00b0) = 7.00."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{radius}}",
                "pointLabel": "(?,y)"
              }
            },
            {
              "id": "trig-l2-017",
              "level": 2,
              "params": {
                "angle": "216"
              },
              "scenario": "Character faces 216\u00b0 from X-axis. cos(216\u00b0)? Round 3 dec.",
              "solution": "cos(angle * PI / 180)",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "cos(216\u00b0) = -0.809."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "cos"
              }
            },
            {
              "id": "trig-l2-018",
              "level": 2,
              "params": {
                "angle": "174"
              },
              "scenario": "Character faces 174\u00b0 from X-axis. cos(174\u00b0)? Round 3 dec.",
              "solution": "cos(angle * PI / 180)",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "cos(174\u00b0) = -0.995."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "cos"
              }
            },
            {
              "id": "trig-l2-019",
              "level": 2,
              "params": {
                "angle": "142"
              },
              "scenario": "Character faces 142\u00b0 from X-axis. cos(142\u00b0)? Round 3 dec.",
              "solution": "cos(angle * PI / 180)",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "cos(142\u00b0) = -0.788."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "cos"
              }
            },
            {
              "id": "trig-l2-020",
              "level": 2,
              "params": {
                "angle": "79"
              },
              "scenario": "Character faces 79\u00b0 from X-axis. cos(79\u00b0)? Round 3 dec.",
              "solution": "cos(angle * PI / 180)",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "cos(79\u00b0) = 0.191."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "cos"
              }
            },
            {
              "id": "trig-l2-021",
              "level": 2,
              "params": {
                "angle": "110"
              },
              "scenario": "Character faces 110\u00b0 from X-axis. cos(110\u00b0)? Round 3 dec.",
              "solution": "cos(angle * PI / 180)",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "cos(110\u00b0) = -0.342."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "cos"
              }
            },
            {
              "id": "trig-l2-022",
              "level": 2,
              "params": {
                "angle": "172"
              },
              "scenario": "Character faces 172\u00b0 from X-axis. sin(172\u00b0)? Round 3 dec.",
              "solution": "sin(angle * PI / 180)",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "sin(172\u00b0) = 0.139."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "sin"
              }
            },
            {
              "id": "trig-l2-023",
              "level": 2,
              "params": {
                "angle": "52"
              },
              "scenario": "Character faces 52\u00b0 from X-axis. sin(52\u00b0)? Round 3 dec.",
              "solution": "sin(angle * PI / 180)",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "sin(52\u00b0) = 0.788."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "sin"
              }
            },
            {
              "id": "trig-l2-024",
              "level": 2,
              "params": {
                "angle": "47"
              },
              "scenario": "Character faces 47\u00b0 from X-axis. sin(47\u00b0)? Round 3 dec.",
              "solution": "sin(angle * PI / 180)",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "sin(47\u00b0) = 0.731."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "sin"
              }
            },
            {
              "id": "trig-l2-025",
              "level": 2,
              "params": {
                "angle": "194"
              },
              "scenario": "Character faces 194\u00b0 from X-axis. sin(194\u00b0)? Round 3 dec.",
              "solution": "sin(angle * PI / 180)",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "sin(194\u00b0) = -0.242."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "sin"
              }
            }
          ]
        },
        {
          "level": 3,
          "title": "Tangent & Slope",
          "questions": [
            {
              "id": "trig-l3-001",
              "level": 3,
              "params": {
                "rise": "3",
                "run": "16"
              },
              "scenario": "Ramp rises 3m over 16m horizontal. Angle of inclination? (arctan(rise/run)). Round 1 dec.",
              "solution": "atan(rise / run) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "tan \u03b8 = 3/16, \u03b8 = arctan(0.1875) = 10.6\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "3m",
                "adjacent": "16m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l3-002",
              "level": 3,
              "params": {
                "rise": "15",
                "run": "16"
              },
              "scenario": "Ramp rises 15m over 16m horizontal. Angle of inclination? (arctan(rise/run)). Round 1 dec.",
              "solution": "atan(rise / run) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "tan \u03b8 = 15/16, \u03b8 = arctan(0.9375) = 43.2\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "15m",
                "adjacent": "16m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l3-003",
              "level": 3,
              "params": {
                "rise": "11",
                "run": "13"
              },
              "scenario": "Ramp rises 11m over 13m horizontal. Angle of inclination? (arctan(rise/run)). Round 1 dec.",
              "solution": "atan(rise / run) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "tan \u03b8 = 11/13, \u03b8 = arctan(0.8462) = 40.2\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "11m",
                "adjacent": "13m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l3-004",
              "level": 3,
              "params": {
                "rise": "14",
                "run": "6"
              },
              "scenario": "Ramp rises 14m over 6m horizontal. Angle of inclination? (arctan(rise/run)). Round 1 dec.",
              "solution": "atan(rise / run) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "tan \u03b8 = 14/6, \u03b8 = arctan(2.3333) = 66.8\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "14m",
                "adjacent": "6m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l3-005",
              "level": 3,
              "params": {
                "rise": "13",
                "run": "19"
              },
              "scenario": "Ramp rises 13m over 19m horizontal. Angle of inclination? (arctan(rise/run)). Round 1 dec.",
              "solution": "atan(rise / run) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "tan \u03b8 = 13/19, \u03b8 = arctan(0.6842) = 34.4\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "13m",
                "adjacent": "19m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l3-006",
              "level": 3,
              "params": {
                "rise": "10",
                "run": "8"
              },
              "scenario": "Ramp rises 10m over 8m horizontal. Angle of inclination? (arctan(rise/run)). Round 1 dec.",
              "solution": "atan(rise / run) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "tan \u03b8 = 10/8, \u03b8 = arctan(1.2500) = 51.3\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "10m",
                "adjacent": "8m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l3-007",
              "level": 3,
              "params": {
                "rise": "8",
                "run": "7"
              },
              "scenario": "Ramp rises 8m over 7m horizontal. Angle of inclination? (arctan(rise/run)). Round 1 dec.",
              "solution": "atan(rise / run) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "tan \u03b8 = 8/7, \u03b8 = arctan(1.1429) = 48.8\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "8m",
                "adjacent": "7m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l3-008",
              "level": 3,
              "params": {
                "rise": "10",
                "run": "14"
              },
              "scenario": "Ramp rises 10m over 14m horizontal. Angle of inclination? (arctan(rise/run)). Round 1 dec.",
              "solution": "atan(rise / run) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "tan \u03b8 = 10/14, \u03b8 = arctan(0.7143) = 35.5\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "10m",
                "adjacent": "14m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l3-009",
              "level": 3,
              "params": {
                "angle": "45",
                "base": "16"
              },
              "scenario": "Slope at 45\u00b0, horizontal=16m. Height? (h = base\u00d7tan(angle)). Round 2 dec.",
              "solution": "base * tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "h = 16 \u00d7 tan(45\u00b0) = 16.00m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "16m",
                "opposite": "?",
                "angleLabel": "45\u00b0"
              }
            },
            {
              "id": "trig-l3-010",
              "level": 3,
              "params": {
                "angle": "41",
                "base": "11"
              },
              "scenario": "Slope at 41\u00b0, horizontal=11m. Height? (h = base\u00d7tan(angle)). Round 2 dec.",
              "solution": "base * tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "h = 11 \u00d7 tan(41\u00b0) = 9.56m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "11m",
                "opposite": "?",
                "angleLabel": "41\u00b0"
              }
            },
            {
              "id": "trig-l3-011",
              "level": 3,
              "params": {
                "angle": "9",
                "base": "6"
              },
              "scenario": "Slope at 9\u00b0, horizontal=6m. Height? (h = base\u00d7tan(angle)). Round 2 dec.",
              "solution": "base * tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "h = 6 \u00d7 tan(9\u00b0) = 0.95m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "6m",
                "opposite": "?",
                "angleLabel": "9\u00b0"
              }
            },
            {
              "id": "trig-l3-012",
              "level": 3,
              "params": {
                "angle": "19",
                "base": "14"
              },
              "scenario": "Slope at 19\u00b0, horizontal=14m. Height? (h = base\u00d7tan(angle)). Round 2 dec.",
              "solution": "base * tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "h = 14 \u00d7 tan(19\u00b0) = 4.82m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "14m",
                "opposite": "?",
                "angleLabel": "19\u00b0"
              }
            },
            {
              "id": "trig-l3-013",
              "level": 3,
              "params": {
                "angle": "10",
                "base": "12"
              },
              "scenario": "Slope at 10\u00b0, horizontal=12m. Height? (h = base\u00d7tan(angle)). Round 2 dec.",
              "solution": "base * tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "h = 12 \u00d7 tan(10\u00b0) = 2.12m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "12m",
                "opposite": "?",
                "angleLabel": "10\u00b0"
              }
            },
            {
              "id": "trig-l3-014",
              "level": 3,
              "params": {
                "angle": "11",
                "base": "17"
              },
              "scenario": "Slope at 11\u00b0, horizontal=17m. Height? (h = base\u00d7tan(angle)). Round 2 dec.",
              "solution": "base * tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "h = 17 \u00d7 tan(11\u00b0) = 3.30m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "17m",
                "opposite": "?",
                "angleLabel": "11\u00b0"
              }
            },
            {
              "id": "trig-l3-015",
              "level": 3,
              "params": {
                "angle": "22",
                "base": "19"
              },
              "scenario": "Slope at 22\u00b0, horizontal=19m. Height? (h = base\u00d7tan(angle)). Round 2 dec.",
              "solution": "base * tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "h = 19 \u00d7 tan(22\u00b0) = 7.68m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "19m",
                "opposite": "?",
                "angleLabel": "22\u00b0"
              }
            },
            {
              "id": "trig-l3-016",
              "level": 3,
              "params": {
                "rise": "8",
                "angle": "15"
              },
              "scenario": "Ramp rises 8m at 15\u00b0. Horizontal span? (span = rise/tan(angle)). Round 2 dec.",
              "solution": "rise / tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "span = 8 / tan(15\u00b0) = 29.86m."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "8m",
                "adjacent": "?",
                "angleLabel": "15\u00b0"
              }
            },
            {
              "id": "trig-l3-017",
              "level": 3,
              "params": {
                "rise": "8",
                "angle": "27"
              },
              "scenario": "Ramp rises 8m at 27\u00b0. Horizontal span? (span = rise/tan(angle)). Round 2 dec.",
              "solution": "rise / tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "span = 8 / tan(27\u00b0) = 15.70m."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "8m",
                "adjacent": "?",
                "angleLabel": "27\u00b0"
              }
            },
            {
              "id": "trig-l3-018",
              "level": 3,
              "params": {
                "rise": "6",
                "angle": "22"
              },
              "scenario": "Ramp rises 6m at 22\u00b0. Horizontal span? (span = rise/tan(angle)). Round 2 dec.",
              "solution": "rise / tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "span = 6 / tan(22\u00b0) = 14.85m."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "6m",
                "adjacent": "?",
                "angleLabel": "22\u00b0"
              }
            },
            {
              "id": "trig-l3-019",
              "level": 3,
              "params": {
                "rise": "4",
                "angle": "15"
              },
              "scenario": "Ramp rises 4m at 15\u00b0. Horizontal span? (span = rise/tan(angle)). Round 2 dec.",
              "solution": "rise / tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "span = 4 / tan(15\u00b0) = 14.93m."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "4m",
                "adjacent": "?",
                "angleLabel": "15\u00b0"
              }
            },
            {
              "id": "trig-l3-020",
              "level": 3,
              "params": {
                "rise": "11",
                "angle": "20"
              },
              "scenario": "Ramp rises 11m at 20\u00b0. Horizontal span? (span = rise/tan(angle)). Round 2 dec.",
              "solution": "rise / tan(angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "span = 11 / tan(20\u00b0) = 30.22m."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "11m",
                "adjacent": "?",
                "angleLabel": "20\u00b0"
              }
            },
            {
              "id": "trig-l3-021",
              "level": 3,
              "params": {
                "rise": "9",
                "run": "19"
              },
              "scenario": "Building 9m tall viewed from 19m away. tan of viewing angle? Round 3 dec.",
              "solution": "rise / run",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "tan = 9/19 = 0.4737."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "9m",
                "adjacent": "19m",
                "angleLabel": "\u03b8"
              }
            },
            {
              "id": "trig-l3-022",
              "level": 3,
              "params": {
                "rise": "16",
                "run": "13"
              },
              "scenario": "Building 16m tall viewed from 13m away. tan of viewing angle? Round 3 dec.",
              "solution": "rise / run",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "tan = 16/13 = 1.2308."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "16m",
                "adjacent": "13m",
                "angleLabel": "\u03b8"
              }
            },
            {
              "id": "trig-l3-023",
              "level": 3,
              "params": {
                "rise": "11",
                "run": "15"
              },
              "scenario": "Building 11m tall viewed from 15m away. tan of viewing angle? Round 3 dec.",
              "solution": "rise / run",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "tan = 11/15 = 0.7333."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "11m",
                "adjacent": "15m",
                "angleLabel": "\u03b8"
              }
            },
            {
              "id": "trig-l3-024",
              "level": 3,
              "params": {
                "rise": "5",
                "run": "12"
              },
              "scenario": "Building 5m tall viewed from 12m away. tan of viewing angle? Round 3 dec.",
              "solution": "rise / run",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "tan = 5/12 = 0.4167."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "5m",
                "adjacent": "12m",
                "angleLabel": "\u03b8"
              }
            },
            {
              "id": "trig-l3-025",
              "level": 3,
              "params": {
                "rise": "5",
                "run": "15"
              },
              "scenario": "Building 5m tall viewed from 15m away. tan of viewing angle? Round 3 dec.",
              "solution": "rise / run",
              "answerType": "scalar_dot",
              "units": "",
              "hints": [
                "tan = 5/15 = 0.3333."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "5m",
                "adjacent": "15m",
                "angleLabel": "\u03b8"
              }
            }
          ]
        },
        {
          "level": 4,
          "title": "Inverse Trig Functions",
          "questions": [
            {
              "id": "trig-l4-001",
              "level": 4,
              "params": {
                "adj": "17",
                "opp": "11"
              },
              "scenario": "Enemy 17m ahead, 11m above. Aim angle? (arctan). Round 1 dec.",
              "solution": "atan(opp / adj) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(11/17) = 32.9\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "11m",
                "adjacent": "17m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-002",
              "level": 4,
              "params": {
                "adj": "7",
                "opp": "9"
              },
              "scenario": "Enemy 7m ahead, 9m above. Aim angle? (arctan). Round 1 dec.",
              "solution": "atan(opp / adj) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(9/7) = 52.1\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "9m",
                "adjacent": "7m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-003",
              "level": 4,
              "params": {
                "adj": "23",
                "opp": "13"
              },
              "scenario": "Enemy 23m ahead, 13m above. Aim angle? (arctan). Round 1 dec.",
              "solution": "atan(opp / adj) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(13/23) = 29.5\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "13m",
                "adjacent": "23m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-004",
              "level": 4,
              "params": {
                "adj": "11",
                "opp": "18"
              },
              "scenario": "Enemy 11m ahead, 18m above. Aim angle? (arctan). Round 1 dec.",
              "solution": "atan(opp / adj) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(18/11) = 58.6\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "18m",
                "adjacent": "11m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-005",
              "level": 4,
              "params": {
                "adj": "17",
                "opp": "17"
              },
              "scenario": "Enemy 17m ahead, 17m above. Aim angle? (arctan). Round 1 dec.",
              "solution": "atan(opp / adj) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(17/17) = 45.0\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "17m",
                "adjacent": "17m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-006",
              "level": 4,
              "params": {
                "adj": "9",
                "opp": "11"
              },
              "scenario": "Enemy 9m ahead, 11m above. Aim angle? (arctan). Round 1 dec.",
              "solution": "atan(opp / adj) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(11/9) = 50.7\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "11m",
                "adjacent": "9m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-007",
              "level": 4,
              "params": {
                "adj": "9",
                "opp": "10"
              },
              "scenario": "Enemy 9m ahead, 10m above. Aim angle? (arctan). Round 1 dec.",
              "solution": "atan(opp / adj) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(10/9) = 48.0\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "10m",
                "adjacent": "9m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-008",
              "level": 4,
              "params": {
                "adj": "28",
                "opp": "20"
              },
              "scenario": "Enemy 28m ahead, 20m above. Aim angle? (arctan). Round 1 dec.",
              "solution": "atan(opp / adj) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(20/28) = 35.5\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "20m",
                "adjacent": "28m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-009",
              "level": 4,
              "params": {
                "adj": "22",
                "hyp": "29"
              },
              "scenario": "Line-of-sight 29m, horizontal 22m. Angle? (arccos). Round 1 dec.",
              "solution": "acos(adj / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "cos \u03b8 = 22/29 = 0.7586, \u03b8 = arccos = 40.7\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "22m",
                "hypotenuse": "29m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-010",
              "level": 4,
              "params": {
                "adj": "23",
                "hyp": "32"
              },
              "scenario": "Line-of-sight 32m, horizontal 23m. Angle? (arccos). Round 1 dec.",
              "solution": "acos(adj / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "cos \u03b8 = 23/32 = 0.7188, \u03b8 = arccos = 44.0\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "23m",
                "hypotenuse": "32m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-011",
              "level": 4,
              "params": {
                "adj": "23",
                "hyp": "32"
              },
              "scenario": "Line-of-sight 32m, horizontal 23m. Angle? (arccos). Round 1 dec.",
              "solution": "acos(adj / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "cos \u03b8 = 23/32 = 0.7188, \u03b8 = arccos = 44.0\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "23m",
                "hypotenuse": "32m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-012",
              "level": 4,
              "params": {
                "adj": "16",
                "hyp": "22"
              },
              "scenario": "Line-of-sight 22m, horizontal 16m. Angle? (arccos). Round 1 dec.",
              "solution": "acos(adj / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "cos \u03b8 = 16/22 = 0.7273, \u03b8 = arccos = 43.3\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "16m",
                "hypotenuse": "22m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-013",
              "level": 4,
              "params": {
                "adj": "9",
                "hyp": "20"
              },
              "scenario": "Line-of-sight 20m, horizontal 9m. Angle? (arccos). Round 1 dec.",
              "solution": "acos(adj / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "cos \u03b8 = 9/20 = 0.4500, \u03b8 = arccos = 63.3\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "9m",
                "hypotenuse": "20m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-014",
              "level": 4,
              "params": {
                "adj": "20",
                "hyp": "24"
              },
              "scenario": "Line-of-sight 24m, horizontal 20m. Angle? (arccos). Round 1 dec.",
              "solution": "acos(adj / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "cos \u03b8 = 20/24 = 0.8333, \u03b8 = arccos = 33.6\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "20m",
                "hypotenuse": "24m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-015",
              "level": 4,
              "params": {
                "adj": "6",
                "hyp": "10"
              },
              "scenario": "Line-of-sight 10m, horizontal 6m. Angle? (arccos). Round 1 dec.",
              "solution": "acos(adj / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "cos \u03b8 = 6/10 = 0.6000, \u03b8 = arccos = 53.1\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "6m",
                "hypotenuse": "10m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-016",
              "level": 4,
              "params": {
                "opp": "7",
                "hyp": "17"
              },
              "scenario": "Target 7m above, line-of-sight 17m. Angle? (arcsin). Round 1 dec.",
              "solution": "asin(opp / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "sin \u03b8 = 7/17 = 0.4118, \u03b8 = arcsin = 24.3\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "7m",
                "hypotenuse": "17m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-017",
              "level": 4,
              "params": {
                "opp": "16",
                "hyp": "23"
              },
              "scenario": "Target 16m above, line-of-sight 23m. Angle? (arcsin). Round 1 dec.",
              "solution": "asin(opp / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "sin \u03b8 = 16/23 = 0.6957, \u03b8 = arcsin = 44.1\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "16m",
                "hypotenuse": "23m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-018",
              "level": 4,
              "params": {
                "opp": "15",
                "hyp": "32"
              },
              "scenario": "Target 15m above, line-of-sight 32m. Angle? (arcsin). Round 1 dec.",
              "solution": "asin(opp / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "sin \u03b8 = 15/32 = 0.4688, \u03b8 = arcsin = 28.0\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "15m",
                "hypotenuse": "32m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-019",
              "level": 4,
              "params": {
                "opp": "17",
                "hyp": "30"
              },
              "scenario": "Target 17m above, line-of-sight 30m. Angle? (arcsin). Round 1 dec.",
              "solution": "asin(opp / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "sin \u03b8 = 17/30 = 0.5667, \u03b8 = arcsin = 34.5\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "17m",
                "hypotenuse": "30m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-020",
              "level": 4,
              "params": {
                "opp": "20",
                "hyp": "25"
              },
              "scenario": "Target 20m above, line-of-sight 25m. Angle? (arcsin). Round 1 dec.",
              "solution": "asin(opp / hyp) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "sin \u03b8 = 20/25 = 0.8000, \u03b8 = arcsin = 53.1\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "opposite": "20m",
                "hypotenuse": "25m",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l4-021",
              "level": 4,
              "params": {
                "x": "-7",
                "y": "7"
              },
              "scenario": "Enemy at offset (-7,7). Angle using atan2(y,x)? Round 1 dec. (0-360\u00b0)",
              "solution": "((atan2(y, x) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "atan2(7,-7) = 135.0\u00b0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "You",
                "toLabel": "E",
                "resultLabel": "at ({{x}},{{y}})"
              }
            },
            {
              "id": "trig-l4-022",
              "level": 4,
              "params": {
                "x": "-2",
                "y": "10"
              },
              "scenario": "Enemy at offset (-2,10). Angle using atan2(y,x)? Round 1 dec. (0-360\u00b0)",
              "solution": "((atan2(y, x) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "atan2(10,-2) = 101.3\u00b0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "You",
                "toLabel": "E",
                "resultLabel": "at ({{x}},{{y}})"
              }
            },
            {
              "id": "trig-l4-023",
              "level": 4,
              "params": {
                "x": "1",
                "y": "-7"
              },
              "scenario": "Enemy at offset (1,-7). Angle using atan2(y,x)? Round 1 dec. (0-360\u00b0)",
              "solution": "((atan2(y, x) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "atan2(-7,1) = 278.1\u00b0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "You",
                "toLabel": "E",
                "resultLabel": "at ({{x}},{{y}})"
              }
            },
            {
              "id": "trig-l4-024",
              "level": 4,
              "params": {
                "x": "-1",
                "y": "3"
              },
              "scenario": "Enemy at offset (-1,3). Angle using atan2(y,x)? Round 1 dec. (0-360\u00b0)",
              "solution": "((atan2(y, x) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "atan2(3,-1) = 108.4\u00b0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "You",
                "toLabel": "E",
                "resultLabel": "at ({{x}},{{y}})"
              }
            },
            {
              "id": "trig-l4-025",
              "level": 4,
              "params": {
                "x": "-5",
                "y": "4"
              },
              "scenario": "Enemy at offset (-5,4). Angle using atan2(y,x)? Round 1 dec. (0-360\u00b0)",
              "solution": "((atan2(y, x) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "atan2(4,-5) = 141.3\u00b0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "You",
                "toLabel": "E",
                "resultLabel": "at ({{x}},{{y}})"
              }
            }
          ]
        },
        {
          "level": 5,
          "title": "The Unit Circle",
          "questions": [
            {
              "id": "trig-l5-001",
              "level": 5,
              "params": {
                "angle": "1"
              },
              "scenario": "Character faces 1\u00b0 from X-axis. Unit circle (x, y)? Round 3 dec.",
              "solution": "[cos(angle * PI / 180), sin(angle * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x=cos(1\u00b0)=1.000, y=sin(1\u00b0)=0.017."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "1",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l5-002",
              "level": 5,
              "params": {
                "angle": "134"
              },
              "scenario": "Character faces 134\u00b0 from X-axis. Unit circle (x, y)? Round 3 dec.",
              "solution": "[cos(angle * PI / 180), sin(angle * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x=cos(134\u00b0)=-0.695, y=sin(134\u00b0)=0.719."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "1",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l5-003",
              "level": 5,
              "params": {
                "angle": "256"
              },
              "scenario": "Character faces 256\u00b0 from X-axis. Unit circle (x, y)? Round 3 dec.",
              "solution": "[cos(angle * PI / 180), sin(angle * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x=cos(256\u00b0)=-0.242, y=sin(256\u00b0)=-0.970."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "1",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l5-004",
              "level": 5,
              "params": {
                "angle": "91"
              },
              "scenario": "Character faces 91\u00b0 from X-axis. Unit circle (x, y)? Round 3 dec.",
              "solution": "[cos(angle * PI / 180), sin(angle * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x=cos(91\u00b0)=-0.017, y=sin(91\u00b0)=1.000."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "1",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l5-005",
              "level": 5,
              "params": {
                "angle": "259"
              },
              "scenario": "Character faces 259\u00b0 from X-axis. Unit circle (x, y)? Round 3 dec.",
              "solution": "[cos(angle * PI / 180), sin(angle * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x=cos(259\u00b0)=-0.191, y=sin(259\u00b0)=-0.982."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "1",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l5-006",
              "level": 5,
              "params": {
                "angle": "54"
              },
              "scenario": "Character faces 54\u00b0 from X-axis. Unit circle (x, y)? Round 3 dec.",
              "solution": "[cos(angle * PI / 180), sin(angle * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x=cos(54\u00b0)=0.588, y=sin(54\u00b0)=0.809."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "1",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l5-007",
              "level": 5,
              "params": {
                "angle": "320"
              },
              "scenario": "Character faces 320\u00b0 from X-axis. Unit circle (x, y)? Round 3 dec.",
              "solution": "[cos(angle * PI / 180), sin(angle * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x=cos(320\u00b0)=0.766, y=sin(320\u00b0)=-0.643."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "1",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l5-008",
              "level": 5,
              "params": {
                "angle": "152"
              },
              "scenario": "Character faces 152\u00b0 from X-axis. Unit circle (x, y)? Round 3 dec.",
              "solution": "[cos(angle * PI / 180), sin(angle * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x=cos(152\u00b0)=-0.883, y=sin(152\u00b0)=0.469."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "1",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l5-009",
              "level": 5,
              "params": {
                "angle": "327"
              },
              "scenario": "Turret at 327\u00b0. Which quadrant? (I, II, III, or IV)",
              "solution": "'IV'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "327\u00b0 is in QIV."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "?"
              }
            },
            {
              "id": "trig-l5-010",
              "level": 5,
              "params": {
                "angle": "259"
              },
              "scenario": "Turret at 259\u00b0. Which quadrant? (I, II, III, or IV)",
              "solution": "'III'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "259\u00b0 is in QIII."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "?"
              }
            },
            {
              "id": "trig-l5-011",
              "level": 5,
              "params": {
                "angle": "311"
              },
              "scenario": "Turret at 311\u00b0. Which quadrant? (I, II, III, or IV)",
              "solution": "'IV'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "311\u00b0 is in QIV."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "?"
              }
            },
            {
              "id": "trig-l5-012",
              "level": 5,
              "params": {
                "angle": "101"
              },
              "scenario": "Turret at 101\u00b0. Which quadrant? (I, II, III, or IV)",
              "solution": "'II'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "101\u00b0 is in QII."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "?"
              }
            },
            {
              "id": "trig-l5-013",
              "level": 5,
              "params": {
                "angle": "78"
              },
              "scenario": "Turret at 78\u00b0. Which quadrant? (I, II, III, or IV)",
              "solution": "'I'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "78\u00b0 is in QI."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "?"
              }
            },
            {
              "id": "trig-l5-014",
              "level": 5,
              "params": {
                "angle": "191"
              },
              "scenario": "Turret at 191\u00b0. Which quadrant? (I, II, III, or IV)",
              "solution": "'III'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "191\u00b0 is in QIII."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "?"
              }
            },
            {
              "id": "trig-l5-015",
              "level": 5,
              "params": {
                "angle": "82"
              },
              "scenario": "Turret at 82\u00b0. Which quadrant? (I, II, III, or IV)",
              "solution": "'I'",
              "answerType": "yes_no",
              "units": "",
              "hints": [
                "82\u00b0 is in QI."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "pointLabel": "?"
              }
            },
            {
              "id": "trig-l5-016",
              "level": 5,
              "params": {
                "angle": "90"
              },
              "scenario": "Reference angle for 90\u00b0? (acute angle to nearest X-axis).",
              "solution": "angle <= 180 ? 180 - angle : (angle <= 270 ? angle - 180 : 360 - angle)",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Ref = 90\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}"
              }
            },
            {
              "id": "trig-l5-017",
              "level": 5,
              "params": {
                "angle": "255"
              },
              "scenario": "Reference angle for 255\u00b0? (acute angle to nearest X-axis).",
              "solution": "angle <= 180 ? 180 - angle : (angle <= 270 ? angle - 180 : 360 - angle)",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Ref = 75\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}"
              }
            },
            {
              "id": "trig-l5-018",
              "level": 5,
              "params": {
                "angle": "340"
              },
              "scenario": "Reference angle for 340\u00b0? (acute angle to nearest X-axis).",
              "solution": "angle <= 180 ? 180 - angle : (angle <= 270 ? angle - 180 : 360 - angle)",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Ref = 20\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}"
              }
            },
            {
              "id": "trig-l5-019",
              "level": 5,
              "params": {
                "angle": "99"
              },
              "scenario": "Reference angle for 99\u00b0? (acute angle to nearest X-axis).",
              "solution": "angle <= 180 ? 180 - angle : (angle <= 270 ? angle - 180 : 360 - angle)",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Ref = 99\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}"
              }
            },
            {
              "id": "trig-l5-020",
              "level": 5,
              "params": {
                "angle": "147"
              },
              "scenario": "Reference angle for 147\u00b0? (acute angle to nearest X-axis).",
              "solution": "angle <= 180 ? 180 - angle : (angle <= 270 ? angle - 180 : 360 - angle)",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "Ref = 147\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}"
              }
            },
            {
              "id": "trig-l5-021",
              "level": 5,
              "params": {
                "angle": "102"
              },
              "scenario": "sin(102\u00b0) = sin of what acute angle?",
              "solution": "angle <= 180 ? 180 - angle : angle - 180",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "sin(102\u00b0) = sin(78\u00b0)."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}"
              }
            },
            {
              "id": "trig-l5-022",
              "level": 5,
              "params": {
                "angle": "88"
              },
              "scenario": "sin(88\u00b0) = sin of what acute angle?",
              "solution": "angle <= 180 ? 180 - angle : angle - 180",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "sin(88\u00b0) = sin(88\u00b0)."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}"
              }
            },
            {
              "id": "trig-l5-023",
              "level": 5,
              "params": {
                "angle": "71"
              },
              "scenario": "sin(71\u00b0) = sin of what acute angle?",
              "solution": "angle <= 180 ? 180 - angle : angle - 180",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "sin(71\u00b0) = sin(71\u00b0)."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}"
              }
            },
            {
              "id": "trig-l5-024",
              "level": 5,
              "params": {
                "angle": "24"
              },
              "scenario": "sin(24\u00b0) = sin of what acute angle?",
              "solution": "angle <= 180 ? 180 - angle : angle - 180",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "sin(24\u00b0) = sin(24\u00b0)."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}"
              }
            },
            {
              "id": "trig-l5-025",
              "level": 5,
              "params": {
                "angle": "71"
              },
              "scenario": "sin(71\u00b0) = sin of what acute angle?",
              "solution": "angle <= 180 ? 180 - angle : angle - 180",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "sin(71\u00b0) = sin(71\u00b0)."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}"
              }
            }
          ]
        },
        {
          "level": 6,
          "title": "Radians & Degrees",
          "questions": [
            {
              "id": "trig-l6-001",
              "level": 6,
              "params": {
                "deg": "315"
              },
              "scenario": "Convert 315\u00b0 to radians. Round to 3 decimals.",
              "solution": "deg * PI / 180",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "180\u00b0 = \u03c0 rad. So 315\u00b0 = 315 \u00d7 \u03c0/180.",
                "315 \u00d7 \u03c0/180 = 5.4978."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{deg}}"
              }
            },
            {
              "id": "trig-l6-002",
              "level": 6,
              "params": {
                "deg": "60"
              },
              "scenario": "Convert 60\u00b0 to radians. Round to 3 decimals.",
              "solution": "deg * PI / 180",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "180\u00b0 = \u03c0 rad. So 60\u00b0 = 60 \u00d7 \u03c0/180.",
                "60 \u00d7 \u03c0/180 = 1.0472."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{deg}}"
              }
            },
            {
              "id": "trig-l6-003",
              "level": 6,
              "params": {
                "deg": "15"
              },
              "scenario": "Convert 15\u00b0 to radians. Round to 3 decimals.",
              "solution": "deg * PI / 180",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "180\u00b0 = \u03c0 rad. So 15\u00b0 = 15 \u00d7 \u03c0/180.",
                "15 \u00d7 \u03c0/180 = 0.2618."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{deg}}"
              }
            },
            {
              "id": "trig-l6-004",
              "level": 6,
              "params": {
                "deg": "135"
              },
              "scenario": "Convert 135\u00b0 to radians. Round to 3 decimals.",
              "solution": "deg * PI / 180",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "180\u00b0 = \u03c0 rad. So 135\u00b0 = 135 \u00d7 \u03c0/180.",
                "135 \u00d7 \u03c0/180 = 2.3562."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{deg}}"
              }
            },
            {
              "id": "trig-l6-005",
              "level": 6,
              "params": {
                "deg": "120"
              },
              "scenario": "Convert 120\u00b0 to radians. Round to 3 decimals.",
              "solution": "deg * PI / 180",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "180\u00b0 = \u03c0 rad. So 120\u00b0 = 120 \u00d7 \u03c0/180.",
                "120 \u00d7 \u03c0/180 = 2.0944."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{deg}}"
              }
            },
            {
              "id": "trig-l6-006",
              "level": 6,
              "params": {
                "deg": "120"
              },
              "scenario": "Convert 120\u00b0 to radians. Round to 3 decimals.",
              "solution": "deg * PI / 180",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "180\u00b0 = \u03c0 rad. So 120\u00b0 = 120 \u00d7 \u03c0/180.",
                "120 \u00d7 \u03c0/180 = 2.0944."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{deg}}"
              }
            },
            {
              "id": "trig-l6-007",
              "level": 6,
              "params": {
                "deg": "75"
              },
              "scenario": "Convert 75\u00b0 to radians. Round to 3 decimals.",
              "solution": "deg * PI / 180",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "180\u00b0 = \u03c0 rad. So 75\u00b0 = 75 \u00d7 \u03c0/180.",
                "75 \u00d7 \u03c0/180 = 1.3090."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{deg}}"
              }
            },
            {
              "id": "trig-l6-008",
              "level": 6,
              "params": {
                "rad": "0.524"
              },
              "scenario": "Convert 0.524 radians to degrees. Round to 1 decimal.",
              "solution": "rad * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "1 rad = 180\u00b0/\u03c0 \u2248 57.3\u00b0.",
                "0.524 \u00d7 180/\u03c0 = 30.0\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{rad}}rad"
              }
            },
            {
              "id": "trig-l6-009",
              "level": 6,
              "params": {
                "rad": "0.785"
              },
              "scenario": "Convert 0.785 radians to degrees. Round to 1 decimal.",
              "solution": "rad * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "1 rad = 180\u00b0/\u03c0 \u2248 57.3\u00b0.",
                "0.785 \u00d7 180/\u03c0 = 45.0\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{rad}}rad"
              }
            },
            {
              "id": "trig-l6-010",
              "level": 6,
              "params": {
                "rad": "1.047"
              },
              "scenario": "Convert 1.047 radians to degrees. Round to 1 decimal.",
              "solution": "rad * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "1 rad = 180\u00b0/\u03c0 \u2248 57.3\u00b0.",
                "1.047 \u00d7 180/\u03c0 = 60.0\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{rad}}rad"
              }
            },
            {
              "id": "trig-l6-011",
              "level": 6,
              "params": {
                "rad": "1.571"
              },
              "scenario": "Convert 1.571 radians to degrees. Round to 1 decimal.",
              "solution": "rad * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "1 rad = 180\u00b0/\u03c0 \u2248 57.3\u00b0.",
                "1.571 \u00d7 180/\u03c0 = 90.0\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{rad}}rad"
              }
            },
            {
              "id": "trig-l6-012",
              "level": 6,
              "params": {
                "rad": "2.094"
              },
              "scenario": "Convert 2.094 radians to degrees. Round to 1 decimal.",
              "solution": "rad * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "1 rad = 180\u00b0/\u03c0 \u2248 57.3\u00b0.",
                "2.094 \u00d7 180/\u03c0 = 120.0\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{rad}}rad"
              }
            },
            {
              "id": "trig-l6-013",
              "level": 6,
              "params": {
                "rad": "2.356"
              },
              "scenario": "Convert 2.356 radians to degrees. Round to 1 decimal.",
              "solution": "rad * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "1 rad = 180\u00b0/\u03c0 \u2248 57.3\u00b0.",
                "2.356 \u00d7 180/\u03c0 = 135.0\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{rad}}rad"
              }
            },
            {
              "id": "trig-l6-014",
              "level": 6,
              "params": {
                "rad": "3.142"
              },
              "scenario": "Convert 3.142 radians to degrees. Round to 1 decimal.",
              "solution": "rad * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "1 rad = 180\u00b0/\u03c0 \u2248 57.3\u00b0.",
                "3.142 \u00d7 180/\u03c0 = 180.0\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{rad}}rad"
              }
            },
            {
              "id": "trig-l6-015",
              "level": 6,
              "params": {
                "r": "4",
                "angle": "190"
              },
              "scenario": "A turret barrel is 4m long and sweeps through 190\u00b0. What is the arc length? (arc = r \u00d7 \u03b8 in radians). Round to 2 decimals.",
              "solution": "r * (angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Arc = radius \u00d7 angle in radians. Convert 190\u00b0 to rad first.",
                "Arc = 4 \u00d7 3.3161 = 13.26m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l6-016",
              "level": 6,
              "params": {
                "r": "4",
                "angle": "150"
              },
              "scenario": "A turret barrel is 4m long and sweeps through 150\u00b0. What is the arc length? (arc = r \u00d7 \u03b8 in radians). Round to 2 decimals.",
              "solution": "r * (angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Arc = radius \u00d7 angle in radians. Convert 150\u00b0 to rad first.",
                "Arc = 4 \u00d7 2.6180 = 10.47m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l6-017",
              "level": 6,
              "params": {
                "r": "3",
                "angle": "20"
              },
              "scenario": "A turret barrel is 3m long and sweeps through 20\u00b0. What is the arc length? (arc = r \u00d7 \u03b8 in radians). Round to 2 decimals.",
              "solution": "r * (angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Arc = radius \u00d7 angle in radians. Convert 20\u00b0 to rad first.",
                "Arc = 3 \u00d7 0.3491 = 1.05m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l6-018",
              "level": 6,
              "params": {
                "r": "4",
                "angle": "80"
              },
              "scenario": "A turret barrel is 4m long and sweeps through 80\u00b0. What is the arc length? (arc = r \u00d7 \u03b8 in radians). Round to 2 decimals.",
              "solution": "r * (angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Arc = radius \u00d7 angle in radians. Convert 80\u00b0 to rad first.",
                "Arc = 4 \u00d7 1.3963 = 5.59m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l6-019",
              "level": 6,
              "params": {
                "r": "6",
                "angle": "180"
              },
              "scenario": "A turret barrel is 6m long and sweeps through 180\u00b0. What is the arc length? (arc = r \u00d7 \u03b8 in radians). Round to 2 decimals.",
              "solution": "r * (angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Arc = radius \u00d7 angle in radians. Convert 180\u00b0 to rad first.",
                "Arc = 6 \u00d7 3.1416 = 18.85m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l6-020",
              "level": 6,
              "params": {
                "r": "12",
                "angle": "20"
              },
              "scenario": "A turret barrel is 12m long and sweeps through 20\u00b0. What is the arc length? (arc = r \u00d7 \u03b8 in radians). Round to 2 decimals.",
              "solution": "r * (angle * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Arc = radius \u00d7 angle in radians. Convert 20\u00b0 to rad first.",
                "Arc = 12 \u00d7 0.3491 = 4.19m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{angle}}",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l6-021",
              "level": 6,
              "params": {
                "r": "5",
                "dist": "11"
              },
              "scenario": "A wheel of radius 5m rolls 11m. How many radians did it rotate? (\u03b8 = distance / r). Round to 2 decimals.",
              "solution": "dist / r",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "\u03b8 = arc length / radius = 11 / 5 = 2.20 rad."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l6-022",
              "level": 6,
              "params": {
                "r": "5",
                "dist": "18"
              },
              "scenario": "A wheel of radius 5m rolls 18m. How many radians did it rotate? (\u03b8 = distance / r). Round to 2 decimals.",
              "solution": "dist / r",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "\u03b8 = arc length / radius = 18 / 5 = 3.60 rad."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l6-023",
              "level": 6,
              "params": {
                "r": "2",
                "dist": "19"
              },
              "scenario": "A wheel of radius 2m rolls 19m. How many radians did it rotate? (\u03b8 = distance / r). Round to 2 decimals.",
              "solution": "dist / r",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "\u03b8 = arc length / radius = 19 / 2 = 9.50 rad."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l6-024",
              "level": 6,
              "params": {
                "r": "5",
                "dist": "13"
              },
              "scenario": "A wheel of radius 5m rolls 13m. How many radians did it rotate? (\u03b8 = distance / r). Round to 2 decimals.",
              "solution": "dist / r",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "\u03b8 = arc length / radius = 13 / 5 = 2.60 rad."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l6-025",
              "level": 6,
              "params": {
                "r": "1",
                "dist": "29"
              },
              "scenario": "A wheel of radius 1m rolls 29m. How many radians did it rotate? (\u03b8 = distance / r). Round to 2 decimals.",
              "solution": "dist / r",
              "answerType": "scalar_component",
              "units": "rad",
              "hints": [
                "\u03b8 = arc length / radius = 29 / 1 = 29.00 rad."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            }
          ]
        },
        {
          "level": 7,
          "title": "Angular Velocity",
          "questions": [
            {
              "id": "trig-l7-001",
              "level": 7,
              "params": {
                "deg": "240",
                "time": "2.2"
              },
              "scenario": "A character spins 240\u00b0 in 2.2 seconds. What is their angular velocity in rad/s? Round to 2 decimals.",
              "solution": "(deg * PI / 180) / time",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = \u0394\u03b8/\u0394t. Convert 240\u00b0 to rad: 4.189 rad.",
                "\u03c9 = 4.189 / 2.2 = 1.90 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "\u0394\u03b8"
              }
            },
            {
              "id": "trig-l7-002",
              "level": 7,
              "params": {
                "deg": "390",
                "time": "1.1"
              },
              "scenario": "A character spins 390\u00b0 in 1.1 seconds. What is their angular velocity in rad/s? Round to 2 decimals.",
              "solution": "(deg * PI / 180) / time",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = \u0394\u03b8/\u0394t. Convert 390\u00b0 to rad: 6.807 rad.",
                "\u03c9 = 6.807 / 1.1 = 6.19 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "\u0394\u03b8"
              }
            },
            {
              "id": "trig-l7-003",
              "level": 7,
              "params": {
                "deg": "270",
                "time": "2.9"
              },
              "scenario": "A character spins 270\u00b0 in 2.9 seconds. What is their angular velocity in rad/s? Round to 2 decimals.",
              "solution": "(deg * PI / 180) / time",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = \u0394\u03b8/\u0394t. Convert 270\u00b0 to rad: 4.712 rad.",
                "\u03c9 = 4.712 / 2.9 = 1.62 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "\u0394\u03b8"
              }
            },
            {
              "id": "trig-l7-004",
              "level": 7,
              "params": {
                "deg": "390",
                "time": "0.6"
              },
              "scenario": "A character spins 390\u00b0 in 0.6 seconds. What is their angular velocity in rad/s? Round to 2 decimals.",
              "solution": "(deg * PI / 180) / time",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = \u0394\u03b8/\u0394t. Convert 390\u00b0 to rad: 6.807 rad.",
                "\u03c9 = 6.807 / 0.6 = 11.34 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "\u0394\u03b8"
              }
            },
            {
              "id": "trig-l7-005",
              "level": 7,
              "params": {
                "deg": "450",
                "time": "0.6"
              },
              "scenario": "A character spins 450\u00b0 in 0.6 seconds. What is their angular velocity in rad/s? Round to 2 decimals.",
              "solution": "(deg * PI / 180) / time",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = \u0394\u03b8/\u0394t. Convert 450\u00b0 to rad: 7.854 rad.",
                "\u03c9 = 7.854 / 0.6 = 13.09 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "\u0394\u03b8"
              }
            },
            {
              "id": "trig-l7-006",
              "level": 7,
              "params": {
                "deg": "420",
                "time": "1.9"
              },
              "scenario": "A character spins 420\u00b0 in 1.9 seconds. What is their angular velocity in rad/s? Round to 2 decimals.",
              "solution": "(deg * PI / 180) / time",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = \u0394\u03b8/\u0394t. Convert 420\u00b0 to rad: 7.330 rad.",
                "\u03c9 = 7.330 / 1.9 = 3.86 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "\u0394\u03b8"
              }
            },
            {
              "id": "trig-l7-007",
              "level": 7,
              "params": {
                "deg": "120",
                "time": "2.3"
              },
              "scenario": "A character spins 120\u00b0 in 2.3 seconds. What is their angular velocity in rad/s? Round to 2 decimals.",
              "solution": "(deg * PI / 180) / time",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = \u0394\u03b8/\u0394t. Convert 120\u00b0 to rad: 2.094 rad.",
                "\u03c9 = 2.094 / 2.3 = 0.91 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "\u0394\u03b8"
              }
            },
            {
              "id": "trig-l7-008",
              "level": 7,
              "params": {
                "deg": "600",
                "time": "0.6"
              },
              "scenario": "A character spins 600\u00b0 in 0.6 seconds. What is their angular velocity in rad/s? Round to 2 decimals.",
              "solution": "(deg * PI / 180) / time",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = \u0394\u03b8/\u0394t. Convert 600\u00b0 to rad: 10.472 rad.",
                "\u03c9 = 10.472 / 0.6 = 17.45 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "\u0394\u03b8"
              }
            },
            {
              "id": "trig-l7-009",
              "level": 7,
              "params": {
                "r": "4",
                "omega": "1.6"
              },
              "scenario": "A sword is 4m from the shoulder. The shoulder rotates at 1.6 rad/s. How fast is the sword tip? (v = r \u00d7 \u03c9). Round to 2 decimals.",
              "solution": "r * omega",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "v = r \u00d7 \u03c9 = 4 \u00d7 1.6 = 6.40 m/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l7-010",
              "level": 7,
              "params": {
                "r": "3",
                "omega": "6.8"
              },
              "scenario": "A sword is 3m from the shoulder. The shoulder rotates at 6.8 rad/s. How fast is the sword tip? (v = r \u00d7 \u03c9). Round to 2 decimals.",
              "solution": "r * omega",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "v = r \u00d7 \u03c9 = 3 \u00d7 6.8 = 20.40 m/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l7-011",
              "level": 7,
              "params": {
                "r": "5",
                "omega": "7.2"
              },
              "scenario": "A sword is 5m from the shoulder. The shoulder rotates at 7.2 rad/s. How fast is the sword tip? (v = r \u00d7 \u03c9). Round to 2 decimals.",
              "solution": "r * omega",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "v = r \u00d7 \u03c9 = 5 \u00d7 7.2 = 36.00 m/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l7-012",
              "level": 7,
              "params": {
                "r": "3",
                "omega": "5.0"
              },
              "scenario": "A sword is 3m from the shoulder. The shoulder rotates at 5.0 rad/s. How fast is the sword tip? (v = r \u00d7 \u03c9). Round to 2 decimals.",
              "solution": "r * omega",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "v = r \u00d7 \u03c9 = 3 \u00d7 5.0 = 15.00 m/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l7-013",
              "level": 7,
              "params": {
                "r": "6",
                "omega": "1.5"
              },
              "scenario": "A sword is 6m from the shoulder. The shoulder rotates at 1.5 rad/s. How fast is the sword tip? (v = r \u00d7 \u03c9). Round to 2 decimals.",
              "solution": "r * omega",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "v = r \u00d7 \u03c9 = 6 \u00d7 1.5 = 9.00 m/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l7-014",
              "level": 7,
              "params": {
                "r": "6",
                "omega": "2.6"
              },
              "scenario": "A sword is 6m from the shoulder. The shoulder rotates at 2.6 rad/s. How fast is the sword tip? (v = r \u00d7 \u03c9). Round to 2 decimals.",
              "solution": "r * omega",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "v = r \u00d7 \u03c9 = 6 \u00d7 2.6 = 15.60 m/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l7-015",
              "level": 7,
              "params": {
                "r": "3",
                "omega": "7.9"
              },
              "scenario": "A sword is 3m from the shoulder. The shoulder rotates at 7.9 rad/s. How fast is the sword tip? (v = r \u00d7 \u03c9). Round to 2 decimals.",
              "solution": "r * omega",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "v = r \u00d7 \u03c9 = 3 \u00d7 7.9 = 23.70 m/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l7-016",
              "level": 7,
              "params": {
                "omega": "5.3",
                "time": "3.5"
              },
              "scenario": "A platform spins at 5.3 rad/s for 3.5s. What angle in degrees? Round to 1 decimal.",
              "solution": "omega * time * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = \u03c9 \u00d7 t = 5.3 \u00d7 3.5 = 18.55 rad.",
                "Convert: 18.55 \u00d7 180/\u03c0 = 1062.8\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "?"
              }
            },
            {
              "id": "trig-l7-017",
              "level": 7,
              "params": {
                "omega": "2.9",
                "time": "2.1"
              },
              "scenario": "A platform spins at 2.9 rad/s for 2.1s. What angle in degrees? Round to 1 decimal.",
              "solution": "omega * time * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = \u03c9 \u00d7 t = 2.9 \u00d7 2.1 = 6.09 rad.",
                "Convert: 6.09 \u00d7 180/\u03c0 = 348.9\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "?"
              }
            },
            {
              "id": "trig-l7-018",
              "level": 7,
              "params": {
                "omega": "5.2",
                "time": "1.1"
              },
              "scenario": "A platform spins at 5.2 rad/s for 1.1s. What angle in degrees? Round to 1 decimal.",
              "solution": "omega * time * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = \u03c9 \u00d7 t = 5.2 \u00d7 1.1 = 5.72 rad.",
                "Convert: 5.72 \u00d7 180/\u03c0 = 327.7\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "?"
              }
            },
            {
              "id": "trig-l7-019",
              "level": 7,
              "params": {
                "omega": "2.8",
                "time": "2.8"
              },
              "scenario": "A platform spins at 2.8 rad/s for 2.8s. What angle in degrees? Round to 1 decimal.",
              "solution": "omega * time * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = \u03c9 \u00d7 t = 2.8 \u00d7 2.8 = 7.84 rad.",
                "Convert: 7.84 \u00d7 180/\u03c0 = 449.2\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "?"
              }
            },
            {
              "id": "trig-l7-020",
              "level": 7,
              "params": {
                "omega": "4.5",
                "time": "2.9"
              },
              "scenario": "A platform spins at 4.5 rad/s for 2.9s. What angle in degrees? Round to 1 decimal.",
              "solution": "omega * time * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = \u03c9 \u00d7 t = 4.5 \u00d7 2.9 = 13.05 rad.",
                "Convert: 13.05 \u00d7 180/\u03c0 = 747.7\u00b0."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "?"
              }
            },
            {
              "id": "trig-l7-021",
              "level": 7,
              "params": {
                "v": "4.2",
                "r": "2.7"
              },
              "scenario": "A wheel rim moves at 4.2 m/s. Radius is 2.7m. Angular velocity? (\u03c9 = v/r). Round to 2 decimals.",
              "solution": "v / r",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = v/r = 4.2/2.7 = 1.56 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l7-022",
              "level": 7,
              "params": {
                "v": "12.1",
                "r": "1.4"
              },
              "scenario": "A wheel rim moves at 12.1 m/s. Radius is 1.4m. Angular velocity? (\u03c9 = v/r). Round to 2 decimals.",
              "solution": "v / r",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = v/r = 12.1/1.4 = 8.64 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l7-023",
              "level": 7,
              "params": {
                "v": "10.9",
                "r": "1.4"
              },
              "scenario": "A wheel rim moves at 10.9 m/s. Radius is 1.4m. Angular velocity? (\u03c9 = v/r). Round to 2 decimals.",
              "solution": "v / r",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = v/r = 10.9/1.4 = 7.79 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l7-024",
              "level": 7,
              "params": {
                "v": "18.7",
                "r": "2.9"
              },
              "scenario": "A wheel rim moves at 18.7 m/s. Radius is 2.9m. Angular velocity? (\u03c9 = v/r). Round to 2 decimals.",
              "solution": "v / r",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = v/r = 18.7/2.9 = 6.45 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            },
            {
              "id": "trig-l7-025",
              "level": 7,
              "params": {
                "v": "6.7",
                "r": "1.6"
              },
              "scenario": "A wheel rim moves at 6.7 m/s. Radius is 1.6m. Angular velocity? (\u03c9 = v/r). Round to 2 decimals.",
              "solution": "v / r",
              "answerType": "scalar_component",
              "units": "rad/s",
              "hints": [
                "\u03c9 = v/r = 6.7/1.6 = 4.19 rad/s."
              ],
              "visual": {
                "type": "unit-circle",
                "radius": "{{r}}"
              }
            }
          ]
        },
        {
          "level": 8,
          "title": "Vector Decomposition",
          "questions": [
            {
              "id": "trig-l8-001",
              "level": 8,
              "params": {
                "speed": "6",
                "angle": "39"
              },
              "scenario": "A player jumps at 6 m/s at 39\u00b0 above horizontal. What is the horizontal speed? (vx = speed \u00d7 cos(angle)). Round to 2 decimals.",
              "solution": "speed * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vx = v \u00d7 cos(\u03b8) = 6 \u00d7 cos(39\u00b0).",
                "cos(39\u00b0) = 0.7771. vx = 4.66."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "6",
                "adjacent": "vx?",
                "angleLabel": "39\u00b0"
              }
            },
            {
              "id": "trig-l8-002",
              "level": 8,
              "params": {
                "speed": "6",
                "angle": "50"
              },
              "scenario": "A player jumps at 6 m/s at 50\u00b0 above horizontal. What is the horizontal speed? (vx = speed \u00d7 cos(angle)). Round to 2 decimals.",
              "solution": "speed * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vx = v \u00d7 cos(\u03b8) = 6 \u00d7 cos(50\u00b0).",
                "cos(50\u00b0) = 0.6428. vx = 3.86."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "6",
                "adjacent": "vx?",
                "angleLabel": "50\u00b0"
              }
            },
            {
              "id": "trig-l8-003",
              "level": 8,
              "params": {
                "speed": "17",
                "angle": "44"
              },
              "scenario": "A player jumps at 17 m/s at 44\u00b0 above horizontal. What is the horizontal speed? (vx = speed \u00d7 cos(angle)). Round to 2 decimals.",
              "solution": "speed * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vx = v \u00d7 cos(\u03b8) = 17 \u00d7 cos(44\u00b0).",
                "cos(44\u00b0) = 0.7193. vx = 12.23."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "17",
                "adjacent": "vx?",
                "angleLabel": "44\u00b0"
              }
            },
            {
              "id": "trig-l8-004",
              "level": 8,
              "params": {
                "speed": "7",
                "angle": "37"
              },
              "scenario": "A player jumps at 7 m/s at 37\u00b0 above horizontal. What is the horizontal speed? (vx = speed \u00d7 cos(angle)). Round to 2 decimals.",
              "solution": "speed * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vx = v \u00d7 cos(\u03b8) = 7 \u00d7 cos(37\u00b0).",
                "cos(37\u00b0) = 0.7986. vx = 5.59."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "7",
                "adjacent": "vx?",
                "angleLabel": "37\u00b0"
              }
            },
            {
              "id": "trig-l8-005",
              "level": 8,
              "params": {
                "speed": "23",
                "angle": "50"
              },
              "scenario": "A player jumps at 23 m/s at 50\u00b0 above horizontal. What is the horizontal speed? (vx = speed \u00d7 cos(angle)). Round to 2 decimals.",
              "solution": "speed * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vx = v \u00d7 cos(\u03b8) = 23 \u00d7 cos(50\u00b0).",
                "cos(50\u00b0) = 0.6428. vx = 14.78."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "23",
                "adjacent": "vx?",
                "angleLabel": "50\u00b0"
              }
            },
            {
              "id": "trig-l8-006",
              "level": 8,
              "params": {
                "speed": "11",
                "angle": "73"
              },
              "scenario": "A player jumps at 11 m/s at 73\u00b0 above horizontal. What is the horizontal speed? (vx = speed \u00d7 cos(angle)). Round to 2 decimals.",
              "solution": "speed * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vx = v \u00d7 cos(\u03b8) = 11 \u00d7 cos(73\u00b0).",
                "cos(73\u00b0) = 0.2924. vx = 3.22."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "11",
                "adjacent": "vx?",
                "angleLabel": "73\u00b0"
              }
            },
            {
              "id": "trig-l8-007",
              "level": 8,
              "params": {
                "speed": "17",
                "angle": "68"
              },
              "scenario": "A player jumps at 17 m/s at 68\u00b0 above horizontal. What is the horizontal speed? (vx = speed \u00d7 cos(angle)). Round to 2 decimals.",
              "solution": "speed * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vx = v \u00d7 cos(\u03b8) = 17 \u00d7 cos(68\u00b0).",
                "cos(68\u00b0) = 0.3746. vx = 6.37."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "17",
                "adjacent": "vx?",
                "angleLabel": "68\u00b0"
              }
            },
            {
              "id": "trig-l8-008",
              "level": 8,
              "params": {
                "speed": "9",
                "angle": "43"
              },
              "scenario": "A player jumps at 9 m/s at 43\u00b0 above horizontal. What is the horizontal speed? (vx = speed \u00d7 cos(angle)). Round to 2 decimals.",
              "solution": "speed * cos(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vx = v \u00d7 cos(\u03b8) = 9 \u00d7 cos(43\u00b0).",
                "cos(43\u00b0) = 0.7314. vx = 6.58."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "9",
                "adjacent": "vx?",
                "angleLabel": "43\u00b0"
              }
            },
            {
              "id": "trig-l8-009",
              "level": 8,
              "params": {
                "speed": "9",
                "angle": "41"
              },
              "scenario": "A player jumps at 9 m/s at 41\u00b0 above horizontal. What is the vertical speed? (vy = speed \u00d7 sin(angle)). Round to 2 decimals.",
              "solution": "speed * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vy = v \u00d7 sin(\u03b8) = 9 \u00d7 sin(41\u00b0).",
                "sin(41\u00b0) = 0.6561. vy = 5.90."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "9",
                "opposite": "vy?",
                "angleLabel": "41\u00b0"
              }
            },
            {
              "id": "trig-l8-010",
              "level": 8,
              "params": {
                "speed": "22",
                "angle": "78"
              },
              "scenario": "A player jumps at 22 m/s at 78\u00b0 above horizontal. What is the vertical speed? (vy = speed \u00d7 sin(angle)). Round to 2 decimals.",
              "solution": "speed * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vy = v \u00d7 sin(\u03b8) = 22 \u00d7 sin(78\u00b0).",
                "sin(78\u00b0) = 0.9781. vy = 21.52."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "22",
                "opposite": "vy?",
                "angleLabel": "78\u00b0"
              }
            },
            {
              "id": "trig-l8-011",
              "level": 8,
              "params": {
                "speed": "13",
                "angle": "64"
              },
              "scenario": "A player jumps at 13 m/s at 64\u00b0 above horizontal. What is the vertical speed? (vy = speed \u00d7 sin(angle)). Round to 2 decimals.",
              "solution": "speed * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vy = v \u00d7 sin(\u03b8) = 13 \u00d7 sin(64\u00b0).",
                "sin(64\u00b0) = 0.8988. vy = 11.68."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "13",
                "opposite": "vy?",
                "angleLabel": "64\u00b0"
              }
            },
            {
              "id": "trig-l8-012",
              "level": 8,
              "params": {
                "speed": "23",
                "angle": "61"
              },
              "scenario": "A player jumps at 23 m/s at 61\u00b0 above horizontal. What is the vertical speed? (vy = speed \u00d7 sin(angle)). Round to 2 decimals.",
              "solution": "speed * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vy = v \u00d7 sin(\u03b8) = 23 \u00d7 sin(61\u00b0).",
                "sin(61\u00b0) = 0.8746. vy = 20.12."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "23",
                "opposite": "vy?",
                "angleLabel": "61\u00b0"
              }
            },
            {
              "id": "trig-l8-013",
              "level": 8,
              "params": {
                "speed": "16",
                "angle": "38"
              },
              "scenario": "A player jumps at 16 m/s at 38\u00b0 above horizontal. What is the vertical speed? (vy = speed \u00d7 sin(angle)). Round to 2 decimals.",
              "solution": "speed * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vy = v \u00d7 sin(\u03b8) = 16 \u00d7 sin(38\u00b0).",
                "sin(38\u00b0) = 0.6157. vy = 9.85."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "16",
                "opposite": "vy?",
                "angleLabel": "38\u00b0"
              }
            },
            {
              "id": "trig-l8-014",
              "level": 8,
              "params": {
                "speed": "9",
                "angle": "75"
              },
              "scenario": "A player jumps at 9 m/s at 75\u00b0 above horizontal. What is the vertical speed? (vy = speed \u00d7 sin(angle)). Round to 2 decimals.",
              "solution": "speed * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vy = v \u00d7 sin(\u03b8) = 9 \u00d7 sin(75\u00b0).",
                "sin(75\u00b0) = 0.9659. vy = 8.69."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "9",
                "opposite": "vy?",
                "angleLabel": "75\u00b0"
              }
            },
            {
              "id": "trig-l8-015",
              "level": 8,
              "params": {
                "speed": "20",
                "angle": "21"
              },
              "scenario": "A player jumps at 20 m/s at 21\u00b0 above horizontal. What is the vertical speed? (vy = speed \u00d7 sin(angle)). Round to 2 decimals.",
              "solution": "speed * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vy = v \u00d7 sin(\u03b8) = 20 \u00d7 sin(21\u00b0).",
                "sin(21\u00b0) = 0.3584. vy = 7.17."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "20",
                "opposite": "vy?",
                "angleLabel": "21\u00b0"
              }
            },
            {
              "id": "trig-l8-016",
              "level": 8,
              "params": {
                "speed": "6",
                "angle": "24"
              },
              "scenario": "A player jumps at 6 m/s at 24\u00b0 above horizontal. What is the vertical speed? (vy = speed \u00d7 sin(angle)). Round to 2 decimals.",
              "solution": "speed * sin(angle * PI / 180)",
              "answerType": "scalar_component",
              "units": "m/s",
              "hints": [
                "vy = v \u00d7 sin(\u03b8) = 6 \u00d7 sin(24\u00b0).",
                "sin(24\u00b0) = 0.4067. vy = 2.44."
              ],
              "visual": {
                "type": "right-triangle",
                "hypotenuse": "6",
                "opposite": "vy?",
                "angleLabel": "24\u00b0"
              }
            },
            {
              "id": "trig-l8-017",
              "level": 8,
              "params": {
                "vx": "5",
                "vy": "13"
              },
              "scenario": "A character has horizontal speed 5 m/s and vertical speed 13 m/s. What is the total speed? (v = sqrt(vx\u00b2 + vy\u00b2)). Round to 2 decimals.",
              "solution": "sqrt(vx*vx + vy*vy)",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "Total speed = sqrt(vx\u00b2 + vy\u00b2) = sqrt(5\u00b2 + 13\u00b2).",
                "v = sqrt(194) = 13.93."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "5",
                "opposite": "13",
                "hypotenuse": "?"
              }
            },
            {
              "id": "trig-l8-018",
              "level": 8,
              "params": {
                "vx": "5",
                "vy": "15"
              },
              "scenario": "A character has horizontal speed 5 m/s and vertical speed 15 m/s. What is the total speed? (v = sqrt(vx\u00b2 + vy\u00b2)). Round to 2 decimals.",
              "solution": "sqrt(vx*vx + vy*vy)",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "Total speed = sqrt(vx\u00b2 + vy\u00b2) = sqrt(5\u00b2 + 15\u00b2).",
                "v = sqrt(250) = 15.81."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "5",
                "opposite": "15",
                "hypotenuse": "?"
              }
            },
            {
              "id": "trig-l8-019",
              "level": 8,
              "params": {
                "vx": "13",
                "vy": "9"
              },
              "scenario": "A character has horizontal speed 13 m/s and vertical speed 9 m/s. What is the total speed? (v = sqrt(vx\u00b2 + vy\u00b2)). Round to 2 decimals.",
              "solution": "sqrt(vx*vx + vy*vy)",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "Total speed = sqrt(vx\u00b2 + vy\u00b2) = sqrt(13\u00b2 + 9\u00b2).",
                "v = sqrt(250) = 15.81."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "13",
                "opposite": "9",
                "hypotenuse": "?"
              }
            },
            {
              "id": "trig-l8-020",
              "level": 8,
              "params": {
                "vx": "12",
                "vy": "4"
              },
              "scenario": "A character has horizontal speed 12 m/s and vertical speed 4 m/s. What is the total speed? (v = sqrt(vx\u00b2 + vy\u00b2)). Round to 2 decimals.",
              "solution": "sqrt(vx*vx + vy*vy)",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "Total speed = sqrt(vx\u00b2 + vy\u00b2) = sqrt(12\u00b2 + 4\u00b2).",
                "v = sqrt(160) = 12.65."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "12",
                "opposite": "4",
                "hypotenuse": "?"
              }
            },
            {
              "id": "trig-l8-021",
              "level": 8,
              "params": {
                "vx": "9",
                "vy": "9"
              },
              "scenario": "A character has horizontal speed 9 m/s and vertical speed 9 m/s. What is the total speed? (v = sqrt(vx\u00b2 + vy\u00b2)). Round to 2 decimals.",
              "solution": "sqrt(vx*vx + vy*vy)",
              "answerType": "scalar_magnitude",
              "units": "m/s",
              "hints": [
                "Total speed = sqrt(vx\u00b2 + vy\u00b2) = sqrt(9\u00b2 + 9\u00b2).",
                "v = sqrt(162) = 12.73."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "9",
                "opposite": "9",
                "hypotenuse": "?"
              }
            },
            {
              "id": "trig-l8-022",
              "level": 8,
              "params": {
                "vx": "12",
                "vy": "10"
              },
              "scenario": "A character has vx=12, vy=10 m/s. What is the angle of motion from horizontal? (\u03b8 = arctan(vy/vx)). Round to 1 decimal.",
              "solution": "atan(vy / vx) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(vy/vx) = arctan(10/12).",
                "\u03b8 = 39.8\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "12",
                "opposite": "10",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l8-023",
              "level": 8,
              "params": {
                "vx": "11",
                "vy": "7"
              },
              "scenario": "A character has vx=11, vy=7 m/s. What is the angle of motion from horizontal? (\u03b8 = arctan(vy/vx)). Round to 1 decimal.",
              "solution": "atan(vy / vx) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(vy/vx) = arctan(7/11).",
                "\u03b8 = 32.5\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "11",
                "opposite": "7",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l8-024",
              "level": 8,
              "params": {
                "vx": "11",
                "vy": "3"
              },
              "scenario": "A character has vx=11, vy=3 m/s. What is the angle of motion from horizontal? (\u03b8 = arctan(vy/vx)). Round to 1 decimal.",
              "solution": "atan(vy / vx) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(vy/vx) = arctan(3/11).",
                "\u03b8 = 15.3\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "11",
                "opposite": "3",
                "angleLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l8-025",
              "level": 8,
              "params": {
                "vx": "13",
                "vy": "14"
              },
              "scenario": "A character has vx=13, vy=14 m/s. What is the angle of motion from horizontal? (\u03b8 = arctan(vy/vx)). Round to 1 decimal.",
              "solution": "atan(vy / vx) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = arctan(vy/vx) = arctan(14/13).",
                "\u03b8 = 47.1\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "13",
                "opposite": "14",
                "angleLabel": "\u03b8?"
              }
            }
          ]
        },
        {
          "level": 9,
          "title": "Law of Sines & Cosines",
          "questions": [
            {
              "id": "trig-l9-001",
              "level": 9,
              "params": {
                "a": "8",
                "A": "63",
                "B": "64"
              },
              "scenario": "Two allies are a=8m apart. One sees an enemy at 63\u00b0 from the ally line, the other at 64\u00b0. Using Law of Sines: b = a \u00d7 sin(B)/sin(A), how far is ally B from the enemy? Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(A * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Law of Sines: a/sin(A) = b/sin(B).",
                "b = 8 \u00d7 sin(64\u00b0)/sin(63\u00b0) = 8 \u00d7 0.8988/0.8910.",
                "b = 8.1m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "8m",
                "angleLabel": "A=63\u00b0"
              }
            },
            {
              "id": "trig-l9-002",
              "level": 9,
              "params": {
                "a": "13",
                "A": "69",
                "B": "71"
              },
              "scenario": "Two allies are a=13m apart. One sees an enemy at 69\u00b0 from the ally line, the other at 71\u00b0. Using Law of Sines: b = a \u00d7 sin(B)/sin(A), how far is ally B from the enemy? Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(A * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Law of Sines: a/sin(A) = b/sin(B).",
                "b = 13 \u00d7 sin(71\u00b0)/sin(69\u00b0) = 13 \u00d7 0.9455/0.9336.",
                "b = 13.2m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "13m",
                "angleLabel": "A=69\u00b0"
              }
            },
            {
              "id": "trig-l9-003",
              "level": 9,
              "params": {
                "a": "15",
                "A": "27",
                "B": "48"
              },
              "scenario": "Two allies are a=15m apart. One sees an enemy at 27\u00b0 from the ally line, the other at 48\u00b0. Using Law of Sines: b = a \u00d7 sin(B)/sin(A), how far is ally B from the enemy? Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(A * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Law of Sines: a/sin(A) = b/sin(B).",
                "b = 15 \u00d7 sin(48\u00b0)/sin(27\u00b0) = 15 \u00d7 0.7431/0.4540.",
                "b = 24.6m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "15m",
                "angleLabel": "A=27\u00b0"
              }
            },
            {
              "id": "trig-l9-004",
              "level": 9,
              "params": {
                "a": "18",
                "A": "30",
                "B": "59"
              },
              "scenario": "Two allies are a=18m apart. One sees an enemy at 30\u00b0 from the ally line, the other at 59\u00b0. Using Law of Sines: b = a \u00d7 sin(B)/sin(A), how far is ally B from the enemy? Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(A * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Law of Sines: a/sin(A) = b/sin(B).",
                "b = 18 \u00d7 sin(59\u00b0)/sin(30\u00b0) = 18 \u00d7 0.8572/0.5000.",
                "b = 30.9m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "18m",
                "angleLabel": "A=30\u00b0"
              }
            },
            {
              "id": "trig-l9-005",
              "level": 9,
              "params": {
                "a": "5",
                "A": "66",
                "B": "76"
              },
              "scenario": "Two allies are a=5m apart. One sees an enemy at 66\u00b0 from the ally line, the other at 76\u00b0. Using Law of Sines: b = a \u00d7 sin(B)/sin(A), how far is ally B from the enemy? Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(A * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Law of Sines: a/sin(A) = b/sin(B).",
                "b = 5 \u00d7 sin(76\u00b0)/sin(66\u00b0) = 5 \u00d7 0.9703/0.9135.",
                "b = 5.3m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "5m",
                "angleLabel": "A=66\u00b0"
              }
            },
            {
              "id": "trig-l9-006",
              "level": 9,
              "params": {
                "a": "13",
                "A": "52",
                "B": "78"
              },
              "scenario": "Two allies are a=13m apart. One sees an enemy at 52\u00b0 from the ally line, the other at 78\u00b0. Using Law of Sines: b = a \u00d7 sin(B)/sin(A), how far is ally B from the enemy? Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(A * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Law of Sines: a/sin(A) = b/sin(B).",
                "b = 13 \u00d7 sin(78\u00b0)/sin(52\u00b0) = 13 \u00d7 0.9781/0.7880.",
                "b = 16.1m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "13m",
                "angleLabel": "A=52\u00b0"
              }
            },
            {
              "id": "trig-l9-007",
              "level": 9,
              "params": {
                "a": "10",
                "A": "52",
                "B": "36"
              },
              "scenario": "Two allies are a=10m apart. One sees an enemy at 52\u00b0 from the ally line, the other at 36\u00b0. Using Law of Sines: b = a \u00d7 sin(B)/sin(A), how far is ally B from the enemy? Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(A * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Law of Sines: a/sin(A) = b/sin(B).",
                "b = 10 \u00d7 sin(36\u00b0)/sin(52\u00b0) = 10 \u00d7 0.5878/0.7880.",
                "b = 7.5m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "10m",
                "angleLabel": "A=52\u00b0"
              }
            },
            {
              "id": "trig-l9-008",
              "level": 9,
              "params": {
                "a": "14",
                "A": "60",
                "B": "62"
              },
              "scenario": "Two allies are a=14m apart. One sees an enemy at 60\u00b0 from the ally line, the other at 62\u00b0. Using Law of Sines: b = a \u00d7 sin(B)/sin(A), how far is ally B from the enemy? Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(A * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "Law of Sines: a/sin(A) = b/sin(B).",
                "b = 14 \u00d7 sin(62\u00b0)/sin(60\u00b0) = 14 \u00d7 0.8829/0.8660.",
                "b = 14.3m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "14m",
                "angleLabel": "A=60\u00b0"
              }
            },
            {
              "id": "trig-l9-009",
              "level": 9,
              "params": {
                "b": "11",
                "c": "9",
                "A": "67"
              },
              "scenario": "Two sides: b=11m, c=9m, with angle A=67\u00b0 between them. Find side a using Law of Cosines: a\u00b2 = b\u00b2 + c\u00b2 - 2bc\u00d7cos(A). Round to 2 decimals.",
              "solution": "sqrt(b*b + c*c - 2*b*c*cos(A * PI / 180))",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "a\u00b2 = 11\u00b2 + 9\u00b2 - 2\u00d711\u00d79\u00d7cos(67\u00b0).",
                "cos(67\u00b0) = 0.3907.",
                "a = sqrt(124.64) = 11.16."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "11",
                "opposite": "9",
                "hypotenuse": "a?",
                "angleLabel": "67\u00b0"
              }
            },
            {
              "id": "trig-l9-010",
              "level": 9,
              "params": {
                "b": "10",
                "c": "5",
                "A": "96"
              },
              "scenario": "Two sides: b=10m, c=5m, with angle A=96\u00b0 between them. Find side a using Law of Cosines: a\u00b2 = b\u00b2 + c\u00b2 - 2bc\u00d7cos(A). Round to 2 decimals.",
              "solution": "sqrt(b*b + c*c - 2*b*c*cos(A * PI / 180))",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "a\u00b2 = 10\u00b2 + 5\u00b2 - 2\u00d710\u00d75\u00d7cos(96\u00b0).",
                "cos(96\u00b0) = -0.1045.",
                "a = sqrt(135.45) = 11.64."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "10",
                "opposite": "5",
                "hypotenuse": "a?",
                "angleLabel": "96\u00b0"
              }
            },
            {
              "id": "trig-l9-011",
              "level": 9,
              "params": {
                "b": "15",
                "c": "20",
                "A": "22"
              },
              "scenario": "Two sides: b=15m, c=20m, with angle A=22\u00b0 between them. Find side a using Law of Cosines: a\u00b2 = b\u00b2 + c\u00b2 - 2bc\u00d7cos(A). Round to 2 decimals.",
              "solution": "sqrt(b*b + c*c - 2*b*c*cos(A * PI / 180))",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "a\u00b2 = 15\u00b2 + 20\u00b2 - 2\u00d715\u00d720\u00d7cos(22\u00b0).",
                "cos(22\u00b0) = 0.9272.",
                "a = sqrt(68.69) = 8.29."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "15",
                "opposite": "20",
                "hypotenuse": "a?",
                "angleLabel": "22\u00b0"
              }
            },
            {
              "id": "trig-l9-012",
              "level": 9,
              "params": {
                "b": "8",
                "c": "16",
                "A": "59"
              },
              "scenario": "Two sides: b=8m, c=16m, with angle A=59\u00b0 between them. Find side a using Law of Cosines: a\u00b2 = b\u00b2 + c\u00b2 - 2bc\u00d7cos(A). Round to 2 decimals.",
              "solution": "sqrt(b*b + c*c - 2*b*c*cos(A * PI / 180))",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "a\u00b2 = 8\u00b2 + 16\u00b2 - 2\u00d78\u00d716\u00d7cos(59\u00b0).",
                "cos(59\u00b0) = 0.5150.",
                "a = sqrt(188.15) = 13.72."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "8",
                "opposite": "16",
                "hypotenuse": "a?",
                "angleLabel": "59\u00b0"
              }
            },
            {
              "id": "trig-l9-013",
              "level": 9,
              "params": {
                "b": "12",
                "c": "6",
                "A": "50"
              },
              "scenario": "Two sides: b=12m, c=6m, with angle A=50\u00b0 between them. Find side a using Law of Cosines: a\u00b2 = b\u00b2 + c\u00b2 - 2bc\u00d7cos(A). Round to 2 decimals.",
              "solution": "sqrt(b*b + c*c - 2*b*c*cos(A * PI / 180))",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "a\u00b2 = 12\u00b2 + 6\u00b2 - 2\u00d712\u00d76\u00d7cos(50\u00b0).",
                "cos(50\u00b0) = 0.6428.",
                "a = sqrt(87.44) = 9.35."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "12",
                "opposite": "6",
                "hypotenuse": "a?",
                "angleLabel": "50\u00b0"
              }
            },
            {
              "id": "trig-l9-014",
              "level": 9,
              "params": {
                "b": "7",
                "c": "7",
                "A": "113"
              },
              "scenario": "Two sides: b=7m, c=7m, with angle A=113\u00b0 between them. Find side a using Law of Cosines: a\u00b2 = b\u00b2 + c\u00b2 - 2bc\u00d7cos(A). Round to 2 decimals.",
              "solution": "sqrt(b*b + c*c - 2*b*c*cos(A * PI / 180))",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "a\u00b2 = 7\u00b2 + 7\u00b2 - 2\u00d77\u00d77\u00d7cos(113\u00b0).",
                "cos(113\u00b0) = -0.3907.",
                "a = sqrt(136.29) = 11.67."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "7",
                "opposite": "7",
                "hypotenuse": "a?",
                "angleLabel": "113\u00b0"
              }
            },
            {
              "id": "trig-l9-015",
              "level": 9,
              "params": {
                "b": "20",
                "c": "7",
                "A": "117"
              },
              "scenario": "Two sides: b=20m, c=7m, with angle A=117\u00b0 between them. Find side a using Law of Cosines: a\u00b2 = b\u00b2 + c\u00b2 - 2bc\u00d7cos(A). Round to 2 decimals.",
              "solution": "sqrt(b*b + c*c - 2*b*c*cos(A * PI / 180))",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "a\u00b2 = 20\u00b2 + 7\u00b2 - 2\u00d720\u00d77\u00d7cos(117\u00b0).",
                "cos(117\u00b0) = -0.4540.",
                "a = sqrt(576.12) = 24.00."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "20",
                "opposite": "7",
                "hypotenuse": "a?",
                "angleLabel": "117\u00b0"
              }
            },
            {
              "id": "trig-l9-016",
              "level": 9,
              "params": {
                "a": "13",
                "b": "7",
                "c": "15"
              },
              "scenario": "Triangle sides: a=13, b=7, c=15. Find angle C opposite side c. (Law of Cosines: C = arccos((a\u00b2+b\u00b2-c\u00b2)/(2ab))). Round to 1 decimal.",
              "solution": "acos((a*a + b*b - c*c) / (2*a*b)) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "C = arccos((13\u00b2+7\u00b2-15\u00b2)/(2\u00d713\u00d77)).",
                "cos(C) = (-7)/(182) = -0.0385.",
                "C = 92.2\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "13",
                "opposite": "7",
                "hypotenuse": "15",
                "angleLabel": "C?"
              }
            },
            {
              "id": "trig-l9-017",
              "level": 9,
              "params": {
                "a": "15",
                "b": "12",
                "c": "24"
              },
              "scenario": "Triangle sides: a=15, b=12, c=24. Find angle C opposite side c. (Law of Cosines: C = arccos((a\u00b2+b\u00b2-c\u00b2)/(2ab))). Round to 1 decimal.",
              "solution": "acos((a*a + b*b - c*c) / (2*a*b)) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "C = arccos((15\u00b2+12\u00b2-24\u00b2)/(2\u00d715\u00d712)).",
                "cos(C) = (-207)/(360) = -0.5750.",
                "C = 125.1\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "15",
                "opposite": "12",
                "hypotenuse": "24",
                "angleLabel": "C?"
              }
            },
            {
              "id": "trig-l9-018",
              "level": 9,
              "params": {
                "a": "7",
                "b": "9",
                "c": "14"
              },
              "scenario": "Triangle sides: a=7, b=9, c=14. Find angle C opposite side c. (Law of Cosines: C = arccos((a\u00b2+b\u00b2-c\u00b2)/(2ab))). Round to 1 decimal.",
              "solution": "acos((a*a + b*b - c*c) / (2*a*b)) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "C = arccos((7\u00b2+9\u00b2-14\u00b2)/(2\u00d77\u00d79)).",
                "cos(C) = (-66)/(126) = -0.5238.",
                "C = 121.6\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "7",
                "opposite": "9",
                "hypotenuse": "14",
                "angleLabel": "C?"
              }
            },
            {
              "id": "trig-l9-019",
              "level": 9,
              "params": {
                "a": "8",
                "b": "13",
                "c": "20"
              },
              "scenario": "Triangle sides: a=8, b=13, c=20. Find angle C opposite side c. (Law of Cosines: C = arccos((a\u00b2+b\u00b2-c\u00b2)/(2ab))). Round to 1 decimal.",
              "solution": "acos((a*a + b*b - c*c) / (2*a*b)) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "C = arccos((8\u00b2+13\u00b2-20\u00b2)/(2\u00d78\u00d713)).",
                "cos(C) = (-167)/(208) = -0.8029.",
                "C = 143.4\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "8",
                "opposite": "13",
                "hypotenuse": "20",
                "angleLabel": "C?"
              }
            },
            {
              "id": "trig-l9-020",
              "level": 9,
              "params": {
                "a": "8",
                "b": "9",
                "c": "15"
              },
              "scenario": "Triangle sides: a=8, b=9, c=15. Find angle C opposite side c. (Law of Cosines: C = arccos((a\u00b2+b\u00b2-c\u00b2)/(2ab))). Round to 1 decimal.",
              "solution": "acos((a*a + b*b - c*c) / (2*a*b)) * 180 / PI",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "C = arccos((8\u00b2+9\u00b2-15\u00b2)/(2\u00d78\u00d79)).",
                "cos(C) = (-80)/(144) = -0.5556.",
                "C = 123.7\u00b0."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "8",
                "opposite": "9",
                "hypotenuse": "15",
                "angleLabel": "C?"
              }
            },
            {
              "id": "trig-l9-021",
              "level": 9,
              "params": {
                "a": "15",
                "B": "61",
                "C": "66"
              },
              "scenario": "Triangle: side a=15m, angle B=61\u00b0, angle C=66\u00b0. Find side b using Law of Sines. Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(C * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "b / sin(B) = a / sin(C).",
                "b = 15 \u00d7 sin(61\u00b0)/sin(66\u00b0) = 15 \u00d7 0.8746/0.9135.",
                "b = 16.4m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "15m",
                "angleLabel": "B=61\u00b0"
              }
            },
            {
              "id": "trig-l9-022",
              "level": 9,
              "params": {
                "a": "12",
                "B": "53",
                "C": "69"
              },
              "scenario": "Triangle: side a=12m, angle B=53\u00b0, angle C=69\u00b0. Find side b using Law of Sines. Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(C * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "b / sin(B) = a / sin(C).",
                "b = 12 \u00d7 sin(53\u00b0)/sin(69\u00b0) = 12 \u00d7 0.7986/0.9336.",
                "b = 11.3m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "12m",
                "angleLabel": "B=53\u00b0"
              }
            },
            {
              "id": "trig-l9-023",
              "level": 9,
              "params": {
                "a": "6",
                "B": "35",
                "C": "101"
              },
              "scenario": "Triangle: side a=6m, angle B=35\u00b0, angle C=101\u00b0. Find side b using Law of Sines. Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(C * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "b / sin(B) = a / sin(C).",
                "b = 6 \u00d7 sin(35\u00b0)/sin(101\u00b0) = 6 \u00d7 0.5736/0.9816.",
                "b = 5.0m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "6m",
                "angleLabel": "B=35\u00b0"
              }
            },
            {
              "id": "trig-l9-024",
              "level": 9,
              "params": {
                "a": "6",
                "B": "41",
                "C": "108"
              },
              "scenario": "Triangle: side a=6m, angle B=41\u00b0, angle C=108\u00b0. Find side b using Law of Sines. Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(C * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "b / sin(B) = a / sin(C).",
                "b = 6 \u00d7 sin(41\u00b0)/sin(108\u00b0) = 6 \u00d7 0.6561/0.9511.",
                "b = 7.6m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "6m",
                "angleLabel": "B=41\u00b0"
              }
            },
            {
              "id": "trig-l9-025",
              "level": 9,
              "params": {
                "a": "14",
                "B": "55",
                "C": "81"
              },
              "scenario": "Triangle: side a=14m, angle B=55\u00b0, angle C=81\u00b0. Find side b using Law of Sines. Round to 1 decimal.",
              "solution": "a * sin(B * PI / 180) / sin(C * PI / 180)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "b / sin(B) = a / sin(C).",
                "b = 14 \u00d7 sin(55\u00b0)/sin(81\u00b0) = 14 \u00d7 0.8192/0.9877.",
                "b = 16.5m."
              ],
              "visual": {
                "type": "right-triangle",
                "adjacent": "14m",
                "angleLabel": "B=55\u00b0"
              }
            }
          ]
        },
        {
          "level": 10,
          "title": "Polar Coordinates",
          "questions": [
            {
              "id": "trig-l10-001",
              "level": 10,
              "params": {
                "r": "10",
                "theta": "3"
              },
              "scenario": "An enemy appears on radar at range 10m, bearing 3\u00b0. What are their (x, y) coordinates? (x = r\u00d7cos(\u03b8), y = r\u00d7sin(\u03b8)). Round to 1 decimal.",
              "solution": "[r * cos(theta * PI / 180), r * sin(theta * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x = 10 \u00d7 cos(3\u00b0), y = 10 \u00d7 sin(3\u00b0).",
                "x = 10.0, y = 0.5."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "P",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-002",
              "level": 10,
              "params": {
                "r": "5",
                "theta": "323"
              },
              "scenario": "An enemy appears on radar at range 5m, bearing 323\u00b0. What are their (x, y) coordinates? (x = r\u00d7cos(\u03b8), y = r\u00d7sin(\u03b8)). Round to 1 decimal.",
              "solution": "[r * cos(theta * PI / 180), r * sin(theta * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x = 5 \u00d7 cos(323\u00b0), y = 5 \u00d7 sin(323\u00b0).",
                "x = 4.0, y = -3.0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "P",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-003",
              "level": 10,
              "params": {
                "r": "4",
                "theta": "117"
              },
              "scenario": "An enemy appears on radar at range 4m, bearing 117\u00b0. What are their (x, y) coordinates? (x = r\u00d7cos(\u03b8), y = r\u00d7sin(\u03b8)). Round to 1 decimal.",
              "solution": "[r * cos(theta * PI / 180), r * sin(theta * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x = 4 \u00d7 cos(117\u00b0), y = 4 \u00d7 sin(117\u00b0).",
                "x = -1.8, y = 3.6."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "P",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-004",
              "level": 10,
              "params": {
                "r": "5",
                "theta": "16"
              },
              "scenario": "An enemy appears on radar at range 5m, bearing 16\u00b0. What are their (x, y) coordinates? (x = r\u00d7cos(\u03b8), y = r\u00d7sin(\u03b8)). Round to 1 decimal.",
              "solution": "[r * cos(theta * PI / 180), r * sin(theta * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x = 5 \u00d7 cos(16\u00b0), y = 5 \u00d7 sin(16\u00b0).",
                "x = 4.8, y = 1.4."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "P",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-005",
              "level": 10,
              "params": {
                "r": "13",
                "theta": "36"
              },
              "scenario": "An enemy appears on radar at range 13m, bearing 36\u00b0. What are their (x, y) coordinates? (x = r\u00d7cos(\u03b8), y = r\u00d7sin(\u03b8)). Round to 1 decimal.",
              "solution": "[r * cos(theta * PI / 180), r * sin(theta * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x = 13 \u00d7 cos(36\u00b0), y = 13 \u00d7 sin(36\u00b0).",
                "x = 10.5, y = 7.6."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "P",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-006",
              "level": 10,
              "params": {
                "r": "19",
                "theta": "121"
              },
              "scenario": "An enemy appears on radar at range 19m, bearing 121\u00b0. What are their (x, y) coordinates? (x = r\u00d7cos(\u03b8), y = r\u00d7sin(\u03b8)). Round to 1 decimal.",
              "solution": "[r * cos(theta * PI / 180), r * sin(theta * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x = 19 \u00d7 cos(121\u00b0), y = 19 \u00d7 sin(121\u00b0).",
                "x = -9.8, y = 16.3."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "P",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-007",
              "level": 10,
              "params": {
                "r": "11",
                "theta": "342"
              },
              "scenario": "An enemy appears on radar at range 11m, bearing 342\u00b0. What are their (x, y) coordinates? (x = r\u00d7cos(\u03b8), y = r\u00d7sin(\u03b8)). Round to 1 decimal.",
              "solution": "[r * cos(theta * PI / 180), r * sin(theta * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "x = 11 \u00d7 cos(342\u00b0), y = 11 \u00d7 sin(342\u00b0).",
                "x = 10.5, y = -3.4."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "P",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-008",
              "level": 10,
              "params": {
                "x": "0",
                "y": "-9"
              },
              "scenario": "An object is at (0, -9) on the minimap. Convert to polar: what is the range and bearing? Give range. Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(x\u00b2 + y\u00b2) = sqrt(0\u00b2 + -9\u00b2).",
                "r = sqrt(81) = 9.0m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{theta}}",
                "radius": "{{r}}",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l10-009",
              "level": 10,
              "params": {
                "x": "2",
                "y": "-11"
              },
              "scenario": "An object is at (2, -11) on the minimap. Convert to polar: what is the range and bearing? Give range. Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(x\u00b2 + y\u00b2) = sqrt(2\u00b2 + -11\u00b2).",
                "r = sqrt(125) = 11.2m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{theta}}",
                "radius": "{{r}}",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l10-010",
              "level": 10,
              "params": {
                "x": "8",
                "y": "14"
              },
              "scenario": "An object is at (8, 14) on the minimap. Convert to polar: what is the range and bearing? Give range. Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(x\u00b2 + y\u00b2) = sqrt(8\u00b2 + 14\u00b2).",
                "r = sqrt(260) = 16.1m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{theta}}",
                "radius": "{{r}}",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l10-011",
              "level": 10,
              "params": {
                "x": "13",
                "y": "3"
              },
              "scenario": "An object is at (13, 3) on the minimap. Convert to polar: what is the range and bearing? Give range. Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(x\u00b2 + y\u00b2) = sqrt(13\u00b2 + 3\u00b2).",
                "r = sqrt(178) = 13.3m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{theta}}",
                "radius": "{{r}}",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l10-012",
              "level": 10,
              "params": {
                "x": "3",
                "y": "0"
              },
              "scenario": "An object is at (3, 0) on the minimap. Convert to polar: what is the range and bearing? Give range. Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(x\u00b2 + y\u00b2) = sqrt(3\u00b2 + 0\u00b2).",
                "r = sqrt(9) = 3.0m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{theta}}",
                "radius": "{{r}}",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l10-013",
              "level": 10,
              "params": {
                "x": "-8",
                "y": "10"
              },
              "scenario": "An object is at (-8, 10) on the minimap. Convert to polar: what is the range and bearing? Give range. Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(x\u00b2 + y\u00b2) = sqrt(-8\u00b2 + 10\u00b2).",
                "r = sqrt(164) = 12.8m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{theta}}",
                "radius": "{{r}}",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l10-014",
              "level": 10,
              "params": {
                "x": "0",
                "y": "10"
              },
              "scenario": "An object is at (0, 10) on the minimap. Convert to polar: what is the range and bearing? Give range. Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(x\u00b2 + y\u00b2) = sqrt(0\u00b2 + 10\u00b2).",
                "r = sqrt(100) = 10.0m."
              ],
              "visual": {
                "type": "unit-circle",
                "angle": "{{theta}}",
                "radius": "{{r}}",
                "pointLabel": "(x,y)"
              }
            },
            {
              "id": "trig-l10-015",
              "level": 10,
              "params": {
                "x": "-2",
                "y": "-9"
              },
              "scenario": "An object is at (-2, -9). What is its bearing (angle from +X axis)? Use atan2(y,x). Round to 1 decimal. Answer between 0-360\u00b0.",
              "solution": "((atan2(y, x) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = atan2(-9, -2) in degrees.",
                "\u03b8 = 257.5\u00b0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "(-2,-9)",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-016",
              "level": 10,
              "params": {
                "x": "-12",
                "y": "-12"
              },
              "scenario": "An object is at (-12, -12). What is its bearing (angle from +X axis)? Use atan2(y,x). Round to 1 decimal. Answer between 0-360\u00b0.",
              "solution": "((atan2(y, x) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = atan2(-12, -12) in degrees.",
                "\u03b8 = 225.0\u00b0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "(-12,-12)",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-017",
              "level": 10,
              "params": {
                "x": "6",
                "y": "-2"
              },
              "scenario": "An object is at (6, -2). What is its bearing (angle from +X axis)? Use atan2(y,x). Round to 1 decimal. Answer between 0-360\u00b0.",
              "solution": "((atan2(y, x) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = atan2(-2, 6) in degrees.",
                "\u03b8 = 341.6\u00b0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "(6,-2)",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-018",
              "level": 10,
              "params": {
                "x": "-4",
                "y": "-2"
              },
              "scenario": "An object is at (-4, -2). What is its bearing (angle from +X axis)? Use atan2(y,x). Round to 1 decimal. Answer between 0-360\u00b0.",
              "solution": "((atan2(y, x) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = atan2(-2, -4) in degrees.",
                "\u03b8 = 206.6\u00b0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "(-4,-2)",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-019",
              "level": 10,
              "params": {
                "x": "-2",
                "y": "-1"
              },
              "scenario": "An object is at (-2, -1). What is its bearing (angle from +X axis)? Use atan2(y,x). Round to 1 decimal. Answer between 0-360\u00b0.",
              "solution": "((atan2(y, x) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = atan2(-1, -2) in degrees.",
                "\u03b8 = 206.6\u00b0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "(-2,-1)",
                "resultLabel": "\u03b8?"
              }
            },
            {
              "id": "trig-l10-020",
              "level": 10,
              "params": {
                "x": "12",
                "y": "8"
              },
              "scenario": "An object is at (12, 8). What is its bearing (angle from +X axis)? Use atan2(y,x). Round to 1 decimal. Answer between 0-360\u00b0.",
              "solution": "((atan2(y, x) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "\u03b8 = atan2(8, 12) in degrees.",
                "\u03b8 = 33.7\u00b0."
              ],
              "visual": {
                "type": "vector-2d",
                "fromLabel": "O",
                "toLabel": "(12,8)",
                "resultLabel": "\u03b8?"
              }
            }
          ]
        },
        {
          "level": 11,
          "title": "Wave Functions",
          "questions": [
            {
              "id": "trig-l11-001",
              "level": 11,
              "params": {
                "A": "0.4",
                "f": "2.1",
                "t": "1.33"
              },
              "scenario": "A health pickup bobs up and down: y = 0.4 \u00d7 sin(2\u03c0 \u00d7 2.1 \u00d7 t). What is y at t = 1.33s? Round to 3 decimals.",
              "solution": "A * sin(2 * PI * f * t)",
              "answerType": "scalar_component",
              "units": "m",
              "hints": [
                "y = 0.4 \u00d7 sin(2\u03c0 \u00d7 2.1 \u00d7 1.33) = 0.4 \u00d7 sin(17.5489).",
                "sin(17.5489) = -0.9637.",
                "y = -0.385m."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-002",
              "level": 11,
              "params": {
                "A": "0.5",
                "f": "2.3",
                "t": "1.62"
              },
              "scenario": "A health pickup bobs up and down: y = 0.5 \u00d7 sin(2\u03c0 \u00d7 2.3 \u00d7 t). What is y at t = 1.62s? Round to 3 decimals.",
              "solution": "A * sin(2 * PI * f * t)",
              "answerType": "scalar_component",
              "units": "m",
              "hints": [
                "y = 0.5 \u00d7 sin(2\u03c0 \u00d7 2.3 \u00d7 1.62) = 0.5 \u00d7 sin(23.4111).",
                "sin(23.4111) = -0.9887.",
                "y = -0.494m."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-003",
              "level": 11,
              "params": {
                "A": "0.6",
                "f": "1.0",
                "t": "1.12"
              },
              "scenario": "A health pickup bobs up and down: y = 0.6 \u00d7 sin(2\u03c0 \u00d7 1.0 \u00d7 t). What is y at t = 1.12s? Round to 3 decimals.",
              "solution": "A * sin(2 * PI * f * t)",
              "answerType": "scalar_component",
              "units": "m",
              "hints": [
                "y = 0.6 \u00d7 sin(2\u03c0 \u00d7 1.0 \u00d7 1.12) = 0.6 \u00d7 sin(7.0372).",
                "sin(7.0372) = 0.6845.",
                "y = 0.411m."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-004",
              "level": 11,
              "params": {
                "A": "0.7",
                "f": "1.0",
                "t": "0.98"
              },
              "scenario": "A health pickup bobs up and down: y = 0.7 \u00d7 sin(2\u03c0 \u00d7 1.0 \u00d7 t). What is y at t = 0.98s? Round to 3 decimals.",
              "solution": "A * sin(2 * PI * f * t)",
              "answerType": "scalar_component",
              "units": "m",
              "hints": [
                "y = 0.7 \u00d7 sin(2\u03c0 \u00d7 1.0 \u00d7 0.98) = 0.7 \u00d7 sin(6.1575).",
                "sin(6.1575) = -0.1253.",
                "y = -0.088m."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-005",
              "level": 11,
              "params": {
                "A": "2.7",
                "f": "0.7",
                "t": "1.64"
              },
              "scenario": "A health pickup bobs up and down: y = 2.7 \u00d7 sin(2\u03c0 \u00d7 0.7 \u00d7 t). What is y at t = 1.64s? Round to 3 decimals.",
              "solution": "A * sin(2 * PI * f * t)",
              "answerType": "scalar_component",
              "units": "m",
              "hints": [
                "y = 2.7 \u00d7 sin(2\u03c0 \u00d7 0.7 \u00d7 1.64) = 2.7 \u00d7 sin(7.2131).",
                "sin(7.2131) = 0.8016.",
                "y = 2.164m."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-006",
              "level": 11,
              "params": {
                "A": "2.6",
                "f": "0.7",
                "t": "1.34"
              },
              "scenario": "A health pickup bobs up and down: y = 2.6 \u00d7 sin(2\u03c0 \u00d7 0.7 \u00d7 t). What is y at t = 1.34s? Round to 3 decimals.",
              "solution": "A * sin(2 * PI * f * t)",
              "answerType": "scalar_component",
              "units": "m",
              "hints": [
                "y = 2.6 \u00d7 sin(2\u03c0 \u00d7 0.7 \u00d7 1.34) = 2.6 \u00d7 sin(5.8936).",
                "sin(5.8936) = -0.3798.",
                "y = -0.987m."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-007",
              "level": 11,
              "params": {
                "A": "1.8",
                "f": "0.5",
                "t": "0.28"
              },
              "scenario": "A health pickup bobs up and down: y = 1.8 \u00d7 sin(2\u03c0 \u00d7 0.5 \u00d7 t). What is y at t = 0.28s? Round to 3 decimals.",
              "solution": "A * sin(2 * PI * f * t)",
              "answerType": "scalar_component",
              "units": "m",
              "hints": [
                "y = 1.8 \u00d7 sin(2\u03c0 \u00d7 0.5 \u00d7 0.28) = 1.8 \u00d7 sin(0.8796).",
                "sin(0.8796) = 0.7705.",
                "y = 1.387m."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-008",
              "level": 11,
              "params": {
                "T": "3.1"
              },
              "scenario": "A floating platform oscillates with period 3.1s (one full cycle). What is the frequency in Hz? (f = 1/T). Round to 2 decimals.",
              "solution": "1 / T",
              "answerType": "scalar_component",
              "units": "Hz",
              "hints": [
                "f = 1/T = 1/3.1 = 0.32 Hz."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-009",
              "level": 11,
              "params": {
                "T": "1.3"
              },
              "scenario": "A floating platform oscillates with period 1.3s (one full cycle). What is the frequency in Hz? (f = 1/T). Round to 2 decimals.",
              "solution": "1 / T",
              "answerType": "scalar_component",
              "units": "Hz",
              "hints": [
                "f = 1/T = 1/1.3 = 0.77 Hz."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-010",
              "level": 11,
              "params": {
                "T": "1.9"
              },
              "scenario": "A floating platform oscillates with period 1.9s (one full cycle). What is the frequency in Hz? (f = 1/T). Round to 2 decimals.",
              "solution": "1 / T",
              "answerType": "scalar_component",
              "units": "Hz",
              "hints": [
                "f = 1/T = 1/1.9 = 0.53 Hz."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-011",
              "level": 11,
              "params": {
                "T": "2.2"
              },
              "scenario": "A floating platform oscillates with period 2.2s (one full cycle). What is the frequency in Hz? (f = 1/T). Round to 2 decimals.",
              "solution": "1 / T",
              "answerType": "scalar_component",
              "units": "Hz",
              "hints": [
                "f = 1/T = 1/2.2 = 0.45 Hz."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-012",
              "level": 11,
              "params": {
                "T": "3.5"
              },
              "scenario": "A floating platform oscillates with period 3.5s (one full cycle). What is the frequency in Hz? (f = 1/T). Round to 2 decimals.",
              "solution": "1 / T",
              "answerType": "scalar_component",
              "units": "Hz",
              "hints": [
                "f = 1/T = 1/3.5 = 0.29 Hz."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-013",
              "level": 11,
              "params": {
                "T": "3.7"
              },
              "scenario": "A floating platform oscillates with period 3.7s (one full cycle). What is the frequency in Hz? (f = 1/T). Round to 2 decimals.",
              "solution": "1 / T",
              "answerType": "scalar_component",
              "units": "Hz",
              "hints": [
                "f = 1/T = 1/3.7 = 0.27 Hz."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-014",
              "level": 11,
              "params": {
                "A": "1.1",
                "omega": "1.0",
                "t": "0.65"
              },
              "scenario": "A light pulses: brightness = 1.1 \u00d7 cos(1.0 \u00d7 t). What is brightness at t = 0.65s? Round to 3 decimals.",
              "solution": "A * cos(omega * t)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "b = 1.1 \u00d7 cos(1.0 \u00d7 0.65) = 1.1 \u00d7 cos(0.6500).",
                "cos(0.6500) = 0.7961.",
                "b = 0.876."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-015",
              "level": 11,
              "params": {
                "A": "3.7",
                "omega": "4.1",
                "t": "0.5"
              },
              "scenario": "A light pulses: brightness = 3.7 \u00d7 cos(4.1 \u00d7 t). What is brightness at t = 0.5s? Round to 3 decimals.",
              "solution": "A * cos(omega * t)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "b = 3.7 \u00d7 cos(4.1 \u00d7 0.5) = 3.7 \u00d7 cos(2.0500).",
                "cos(2.0500) = -0.4611.",
                "b = -1.706."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-016",
              "level": 11,
              "params": {
                "A": "2.9",
                "omega": "3.9",
                "t": "1.2"
              },
              "scenario": "A light pulses: brightness = 2.9 \u00d7 cos(3.9 \u00d7 t). What is brightness at t = 1.2s? Round to 3 decimals.",
              "solution": "A * cos(omega * t)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "b = 2.9 \u00d7 cos(3.9 \u00d7 1.2) = 2.9 \u00d7 cos(4.6800).",
                "cos(4.6800) = -0.0324.",
                "b = -0.094."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-017",
              "level": 11,
              "params": {
                "A": "2.8",
                "omega": "2.9",
                "t": "0.37"
              },
              "scenario": "A light pulses: brightness = 2.8 \u00d7 cos(2.9 \u00d7 t). What is brightness at t = 0.37s? Round to 3 decimals.",
              "solution": "A * cos(omega * t)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "b = 2.8 \u00d7 cos(2.9 \u00d7 0.37) = 2.8 \u00d7 cos(1.0730).",
                "cos(1.0730) = 0.4775.",
                "b = 1.337."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-018",
              "level": 11,
              "params": {
                "A": "1.3",
                "omega": "1.2",
                "t": "1.13"
              },
              "scenario": "A light pulses: brightness = 1.3 \u00d7 cos(1.2 \u00d7 t). What is brightness at t = 1.13s? Round to 3 decimals.",
              "solution": "A * cos(omega * t)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "b = 1.3 \u00d7 cos(1.2 \u00d7 1.13) = 1.3 \u00d7 cos(1.3560).",
                "cos(1.3560) = 0.2131.",
                "b = 0.277."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-019",
              "level": 11,
              "params": {
                "A": "0.7",
                "omega": "2.3",
                "t": "0.17"
              },
              "scenario": "A light pulses: brightness = 0.7 \u00d7 cos(2.3 \u00d7 t). What is brightness at t = 0.17s? Round to 3 decimals.",
              "solution": "A * cos(omega * t)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "b = 0.7 \u00d7 cos(2.3 \u00d7 0.17) = 0.7 \u00d7 cos(0.3910).",
                "cos(0.3910) = 0.9245.",
                "b = 0.647."
              ],
              "visual": null
            },
            {
              "id": "trig-l11-020",
              "level": 11,
              "params": {
                "A": "2.2",
                "omega": "4.7",
                "t": "0.84"
              },
              "scenario": "A light pulses: brightness = 2.2 \u00d7 cos(4.7 \u00d7 t). What is brightness at t = 0.84s? Round to 3 decimals.",
              "solution": "A * cos(omega * t)",
              "answerType": "scalar_component",
              "units": "",
              "hints": [
                "b = 2.2 \u00d7 cos(4.7 \u00d7 0.84) = 2.2 \u00d7 cos(3.9480).",
                "cos(3.9480) = -0.6921.",
                "b = -1.523."
              ],
              "visual": null
            }
          ]
        },
        {
          "level": 12,
          "title": "3D Spherical Coordinates",
          "questions": [
            {
              "id": "trig-l12-001",
              "level": 12,
              "params": {
                "r": "3",
                "yaw": "260",
                "pitch": "-60"
              },
              "scenario": "An orbiting camera: radius=3, yaw=260\u00b0, pitch=-60\u00b0. X = r\u00d7cos(pitch)\u00d7cos(yaw), Y = r\u00d7cos(pitch)\u00d7sin(yaw), Z = r\u00d7sin(pitch). Give (x, y, z). Round to 1 decimal.",
              "solution": "[r * cos(pitch * PI / 180) * cos(yaw * PI / 180), r * cos(pitch * PI / 180) * sin(yaw * PI / 180), r * sin(pitch * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "cos(pitch) = cos(-60\u00b0) = 0.5000.",
                "X = 3 \u00d7 0.5000 \u00d7 cos(260\u00b0).",
                "X = -0.3, similarly for Y, Z."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-002",
              "level": 12,
              "params": {
                "r": "5",
                "yaw": "35",
                "pitch": "72"
              },
              "scenario": "An orbiting camera: radius=5, yaw=35\u00b0, pitch=72\u00b0. X = r\u00d7cos(pitch)\u00d7cos(yaw), Y = r\u00d7cos(pitch)\u00d7sin(yaw), Z = r\u00d7sin(pitch). Give (x, y, z). Round to 1 decimal.",
              "solution": "[r * cos(pitch * PI / 180) * cos(yaw * PI / 180), r * cos(pitch * PI / 180) * sin(yaw * PI / 180), r * sin(pitch * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "cos(pitch) = cos(72\u00b0) = 0.3090.",
                "X = 5 \u00d7 0.3090 \u00d7 cos(35\u00b0).",
                "X = 1.3, similarly for Y, Z."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-003",
              "level": 12,
              "params": {
                "r": "4",
                "yaw": "345",
                "pitch": "-20"
              },
              "scenario": "An orbiting camera: radius=4, yaw=345\u00b0, pitch=-20\u00b0. X = r\u00d7cos(pitch)\u00d7cos(yaw), Y = r\u00d7cos(pitch)\u00d7sin(yaw), Z = r\u00d7sin(pitch). Give (x, y, z). Round to 1 decimal.",
              "solution": "[r * cos(pitch * PI / 180) * cos(yaw * PI / 180), r * cos(pitch * PI / 180) * sin(yaw * PI / 180), r * sin(pitch * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "cos(pitch) = cos(-20\u00b0) = 0.9397.",
                "X = 4 \u00d7 0.9397 \u00d7 cos(345\u00b0).",
                "X = 3.6, similarly for Y, Z."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-004",
              "level": 12,
              "params": {
                "r": "9",
                "yaw": "61",
                "pitch": "65"
              },
              "scenario": "An orbiting camera: radius=9, yaw=61\u00b0, pitch=65\u00b0. X = r\u00d7cos(pitch)\u00d7cos(yaw), Y = r\u00d7cos(pitch)\u00d7sin(yaw), Z = r\u00d7sin(pitch). Give (x, y, z). Round to 1 decimal.",
              "solution": "[r * cos(pitch * PI / 180) * cos(yaw * PI / 180), r * cos(pitch * PI / 180) * sin(yaw * PI / 180), r * sin(pitch * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "cos(pitch) = cos(65\u00b0) = 0.4226.",
                "X = 9 \u00d7 0.4226 \u00d7 cos(61\u00b0).",
                "X = 1.8, similarly for Y, Z."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-005",
              "level": 12,
              "params": {
                "r": "6",
                "yaw": "296",
                "pitch": "72"
              },
              "scenario": "An orbiting camera: radius=6, yaw=296\u00b0, pitch=72\u00b0. X = r\u00d7cos(pitch)\u00d7cos(yaw), Y = r\u00d7cos(pitch)\u00d7sin(yaw), Z = r\u00d7sin(pitch). Give (x, y, z). Round to 1 decimal.",
              "solution": "[r * cos(pitch * PI / 180) * cos(yaw * PI / 180), r * cos(pitch * PI / 180) * sin(yaw * PI / 180), r * sin(pitch * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "cos(pitch) = cos(72\u00b0) = 0.3090.",
                "X = 6 \u00d7 0.3090 \u00d7 cos(296\u00b0).",
                "X = 0.8, similarly for Y, Z."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-006",
              "level": 12,
              "params": {
                "r": "3",
                "yaw": "317",
                "pitch": "-60"
              },
              "scenario": "An orbiting camera: radius=3, yaw=317\u00b0, pitch=-60\u00b0. X = r\u00d7cos(pitch)\u00d7cos(yaw), Y = r\u00d7cos(pitch)\u00d7sin(yaw), Z = r\u00d7sin(pitch). Give (x, y, z). Round to 1 decimal.",
              "solution": "[r * cos(pitch * PI / 180) * cos(yaw * PI / 180), r * cos(pitch * PI / 180) * sin(yaw * PI / 180), r * sin(pitch * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "cos(pitch) = cos(-60\u00b0) = 0.5000.",
                "X = 3 \u00d7 0.5000 \u00d7 cos(317\u00b0).",
                "X = 1.1, similarly for Y, Z."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-007",
              "level": 12,
              "params": {
                "r": "9",
                "yaw": "336",
                "pitch": "69"
              },
              "scenario": "An orbiting camera: radius=9, yaw=336\u00b0, pitch=69\u00b0. X = r\u00d7cos(pitch)\u00d7cos(yaw), Y = r\u00d7cos(pitch)\u00d7sin(yaw), Z = r\u00d7sin(pitch). Give (x, y, z). Round to 1 decimal.",
              "solution": "[r * cos(pitch * PI / 180) * cos(yaw * PI / 180), r * cos(pitch * PI / 180) * sin(yaw * PI / 180), r * sin(pitch * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "cos(pitch) = cos(69\u00b0) = 0.3584.",
                "X = 9 \u00d7 0.3584 \u00d7 cos(336\u00b0).",
                "X = 2.9, similarly for Y, Z."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-008",
              "level": 12,
              "params": {
                "r": "12",
                "yaw": "267",
                "pitch": "0"
              },
              "scenario": "An orbiting camera: radius=12, yaw=267\u00b0, pitch=0\u00b0. X = r\u00d7cos(pitch)\u00d7cos(yaw), Y = r\u00d7cos(pitch)\u00d7sin(yaw), Z = r\u00d7sin(pitch). Give (x, y, z). Round to 1 decimal.",
              "solution": "[r * cos(pitch * PI / 180) * cos(yaw * PI / 180), r * cos(pitch * PI / 180) * sin(yaw * PI / 180), r * sin(pitch * PI / 180)]",
              "answerType": "vector3d",
              "units": "",
              "hints": [
                "cos(pitch) = cos(0\u00b0) = 1.0000.",
                "X = 12 \u00d7 1.0000 \u00d7 cos(267\u00b0).",
                "X = -0.6, similarly for Y, Z."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-009",
              "level": 12,
              "params": {
                "x": "-2",
                "y": "-4",
                "z": "0"
              },
              "scenario": "A skybox star is at (-2, -4, 0). What is its distance from the origin? (r = sqrt(x\u00b2+y\u00b2+z\u00b2)). Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y + z*z)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(-2\u00b2 + -4\u00b2 + 0\u00b2).",
                "r = sqrt(20) = 4.5."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-010",
              "level": 12,
              "params": {
                "x": "-3",
                "y": "-2",
                "z": "2"
              },
              "scenario": "A skybox star is at (-3, -2, 2). What is its distance from the origin? (r = sqrt(x\u00b2+y\u00b2+z\u00b2)). Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y + z*z)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(-3\u00b2 + -2\u00b2 + 2\u00b2).",
                "r = sqrt(17) = 4.1."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-011",
              "level": 12,
              "params": {
                "x": "-6",
                "y": "10",
                "z": "-1"
              },
              "scenario": "A skybox star is at (-6, 10, -1). What is its distance from the origin? (r = sqrt(x\u00b2+y\u00b2+z\u00b2)). Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y + z*z)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(-6\u00b2 + 10\u00b2 + -1\u00b2).",
                "r = sqrt(137) = 11.7."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-012",
              "level": 12,
              "params": {
                "x": "4",
                "y": "0",
                "z": "-8"
              },
              "scenario": "A skybox star is at (4, 0, -8). What is its distance from the origin? (r = sqrt(x\u00b2+y\u00b2+z\u00b2)). Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y + z*z)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(4\u00b2 + 0\u00b2 + -8\u00b2).",
                "r = sqrt(80) = 8.9."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-013",
              "level": 12,
              "params": {
                "x": "-10",
                "y": "4",
                "z": "9"
              },
              "scenario": "A skybox star is at (-10, 4, 9). What is its distance from the origin? (r = sqrt(x\u00b2+y\u00b2+z\u00b2)). Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y + z*z)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(-10\u00b2 + 4\u00b2 + 9\u00b2).",
                "r = sqrt(197) = 14.0."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-014",
              "level": 12,
              "params": {
                "x": "8",
                "y": "-7",
                "z": "-8"
              },
              "scenario": "A skybox star is at (8, -7, -8). What is its distance from the origin? (r = sqrt(x\u00b2+y\u00b2+z\u00b2)). Round to 1 decimal.",
              "solution": "sqrt(x*x + y*y + z*z)",
              "answerType": "scalar_magnitude",
              "units": "m",
              "hints": [
                "r = sqrt(8\u00b2 + -7\u00b2 + -8\u00b2).",
                "r = sqrt(177) = 13.3."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-015",
              "level": 12,
              "params": {
                "x": "11",
                "z": "-4"
              },
              "scenario": "A character looks at (11, 0, -4) from origin. What is the yaw angle? (atan2(x, z) \u2014 atan2 of the XZ plane). Round to 1 decimal. 0-360\u00b0.",
              "solution": "((atan2(x, z) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "yaw = atan2(11, -4) in degrees.",
                "yaw = 110.0\u00b0."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-016",
              "level": 12,
              "params": {
                "x": "11",
                "z": "-2"
              },
              "scenario": "A character looks at (11, 0, -2) from origin. What is the yaw angle? (atan2(x, z) \u2014 atan2 of the XZ plane). Round to 1 decimal. 0-360\u00b0.",
              "solution": "((atan2(x, z) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "yaw = atan2(11, -2) in degrees.",
                "yaw = 100.3\u00b0."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-017",
              "level": 12,
              "params": {
                "x": "5",
                "z": "1"
              },
              "scenario": "A character looks at (5, 0, 1) from origin. What is the yaw angle? (atan2(x, z) \u2014 atan2 of the XZ plane). Round to 1 decimal. 0-360\u00b0.",
              "solution": "((atan2(x, z) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "yaw = atan2(5, 1) in degrees.",
                "yaw = 78.7\u00b0."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-018",
              "level": 12,
              "params": {
                "x": "4",
                "z": "-3"
              },
              "scenario": "A character looks at (4, 0, -3) from origin. What is the yaw angle? (atan2(x, z) \u2014 atan2 of the XZ plane). Round to 1 decimal. 0-360\u00b0.",
              "solution": "((atan2(x, z) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "yaw = atan2(4, -3) in degrees.",
                "yaw = 126.9\u00b0."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-019",
              "level": 12,
              "params": {
                "x": "8",
                "z": "-1"
              },
              "scenario": "A character looks at (8, 0, -1) from origin. What is the yaw angle? (atan2(x, z) \u2014 atan2 of the XZ plane). Round to 1 decimal. 0-360\u00b0.",
              "solution": "((atan2(x, z) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "yaw = atan2(8, -1) in degrees.",
                "yaw = 97.1\u00b0."
              ],
              "visual": null
            },
            {
              "id": "trig-l12-020",
              "level": 12,
              "params": {
                "x": "5",
                "z": "4"
              },
              "scenario": "A character looks at (5, 0, 4) from origin. What is the yaw angle? (atan2(x, z) \u2014 atan2 of the XZ plane). Round to 1 decimal. 0-360\u00b0.",
              "solution": "((atan2(x, z) * 180 / PI) + 360) % 360",
              "answerType": "scalar_degrees",
              "units": "degrees",
              "hints": [
                "yaw = atan2(5, 4) in degrees.",
                "yaw = 51.3\u00b0."
              ],
              "visual": null
            }
          ]
        }
      ]
    }
  }
};
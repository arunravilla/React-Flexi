export const flexiConfig = {
  items: [
    {
      name: "person_name",
      label: "Person's Name",
      type: "TextField"
    },
    {
      name: "states",
      label: "Person's state",
      type: "DropDown",
      values: ["Maharashtra", "Kerala", "Tamil Nadu"]
    }
  ]
};
export const flexiRecursiveConfig = {
  items: [
    {
      name: "person_name",
      label: "Person's Name",
      type: "TextField",
      children: [
        {
          name: "person_name_1",
          label: "First Person's Name",
          type: "TextField"
        }
      ]
    },
    {
      name: "states",
      label: "Person's state",
      type: "DropDown",
      values: ["Maharashtra", "Kerala", "Tamil Nadu"]
    }
  ]
};
export default { flexiConfig, flexiRecursiveConfig };

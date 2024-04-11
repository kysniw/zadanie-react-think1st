export const getDates = async () => {
  try {
    const res = await fetch(
      "https://api.api-ninjas.com/v1/holidays?country=PL&year=2023",
      {
        method: "GET",
        headers: {
          "X-Api-Key": "8DX8eEe67njS1lbThFsdSw==rQQNpQ8PYbPZBjrx",
        },
      }
    );

    const data = await res.json();

    return { data: data };
  } catch (error) {
    return { error: error };
  }
};

export const tags = [
  {
    key: 1,
    value: "12:00",
  },
  {
    key: 2,
    value: "14:00",
  },
  {
    key: 3,
    value: "16:30",
  },
  {
    key: 4,
    value: "18:30",
  },
  {
    key: 5,
    value: "20:00",
  },
];

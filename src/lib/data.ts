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
    isObservance: true,
    value: "11:00",
  },
  {
    isObservance: false,
    value: "12:00",
  },
  {
    isObservance: true,
    value: "13:30",
  },
  {
    isObservance: false,
    value: "14:00",
  },
  {
    isObservance: false,
    value: "16:30",
  },
  {
    isObservance: true,
    value: "17:30",
  },
  {
    isObservance: false,
    value: "18:30",
  },
  {
    isObservance: true,
    value: "19:00",
  },
  {
    isObservance: false,
    value: "20:00",
  },
];

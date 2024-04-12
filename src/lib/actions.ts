export const sendFormData = async (formData: FormData) => {
  try {
    const res = await fetch("http://letsworkout.pl/submit/", {
      method: "POST",
      body: formData,
    });

    if (res.status === 201) {
      return { message: "Sent successfully" };
    } else {
      return { error: `There were some problem: ${res.statusText}` };
    }
  } catch (error) {
    return { error: "There is some server problem. Sorry!" };
  }
};

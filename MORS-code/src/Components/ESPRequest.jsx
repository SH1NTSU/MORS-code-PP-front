const ESPRequest = () => {
  async function main() {
    const response = await axios({
      method: "GET",
      url: "http://127.0.0.1:3000/convert",
      json: {
        text: "SOS",
      },
    });
  }

  return (
    <form>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ESPRequest;

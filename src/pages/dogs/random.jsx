// DOM
export default function RandomDog({ imgUrl }) {
  return (
    <>
      <h1>Random Dog</h1>
      <img src={imgUrl} alt="Random Dog" />
    </>
  );
}

// BACKEND
// serverSideProps -->
export async function getServerSideProps() {
  // Get data from api
  const api = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(api);
  const data = await res.json();
  // Return the data inside props
  return {
    props: {
      imgUrl: data.message,
    },
  };
}

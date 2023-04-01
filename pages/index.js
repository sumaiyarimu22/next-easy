const Home = () => {
  const uri = process.env.NEXT_PUBLIC_MONGO_URI;
  console.log(uri);
  return (
    <div className="min-h-screen">
      <h1 className="text-8xl">Home</h1>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const mongo_uri = process.env.MONGO_URI;
  const pass = process.env.PASSWORD;
  const uri = process.env.NEXT_PUBLIC_MONGO_URI;
  console.log(mongo_uri, pass, uri);

  return {
    props: { mongo_uri, pass },
  };
}
//client are jinish server a use kora jabe but server are jinsh clint a use kora jabe na but use kora tikh na

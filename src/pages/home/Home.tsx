import AddPlaceButton from "./components/AddPlaceButton";
import MainMap from "./components/MainMap";
import PlacesList from "./components/PlacesList";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col ">
        <div className="w-full p-4">
          <MainMap />
        </div>
        <div className="p-4">
          <PlacesList />
        </div>
      </main>
      <AddPlaceButton />
    </div>
  );
};
export default Home;

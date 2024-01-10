import Navbar from "./Navbar";

function Owner() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[44px] m-20">Toy_Tanawin_Group C_ 48</h1>
        <img src="https://i.pinimg.com/564x/03/8e/4b/038e4b08c3b6d61cc7c58bbb487fefa8.jpg" alt="" />
        <h3 className="font-bold text-[14px] m-5">Short Biography :</h3>
        <p className="text-[14px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Facere ut consequuntur nobis fuga excepturi doloribus asperiores 
          consectetur. Asperiores ullam laudantium similique! Vel eaque 
          iure quod eius. Ipsam consequuntur aut totam!
        </p>
      </div>
    </div>
  );
}

export default Owner;
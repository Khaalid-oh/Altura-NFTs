import NFTX from '../../../assets/NFTX.png'


const Navbar = () => {
  return (
    <nav className="flex px-6 border border-b-[#EFEFEF]">
      <div className="flex items-center">
        <img src={NFTX} alt="NFTX" className='h-14'/>
      </div>
    </nav>
  );
};

export default Navbar;

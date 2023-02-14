import React from "react";
import rightImg from "../../assets/footer/SEOcontent1.jpg";
import transparent from "../../assets/footer/SEOcontent2.jpg";
import Aman from "../../assets/footer/SEOcontent3.jpg";
import fasilitas from "../../assets/footer/SEOcontent4.jpg";
import bottomImg from "../../assets/footer/use-topads@2x.png";
import "./style.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = ({ ref }) => {
  return (
    <section className="mb-10 overflow-x-hidden">
      <nav className="nav ">
        <ul className="flex text-center border-b-[1px] gap-3 justify-between [&>*]:whitespace-nowrap text-gray-200 w-full">
          <li className=" w-full p-2 active text-main  border-b-2 border-main">
            Promo
          </li>
          <li className="text-gray-600 font-semibold w-full p-2 ">
            Tiket Pesawat
          </li>
          <li className="text-gray-600 font-semibold w-full p-2 ">
            Tiket Kereta
          </li>
          <li className="text-gray-600 font-semibold w-full p-2 ">Hotel</li>s
          <li className="text-gray-600 font-semibold w-full p-2">
            Kartu prakerja
          </li>
          <li className="text-gray-600 font-semibold w-full p-2">
            Food & Voucher
          </li>
          <li className="text-gray-600 font-semibold w-full p-2">
            Produk Digital
          </li>
          <li className="text-gray-600 font-semibold w-full p-2">Fintech</li>
          <li className="text-gray-600 font-semibold w-full p-2">
            Tokopedia Salam
          </li>
        </ul>
        <table className="table-auto w-full">
          <tbody className="text-sm text-gray-200">
            <tr>
              <td>Bebas ongkir</td>
              <td>waktu indonesia belanja</td>
              <td>Waktu indonesia Belanja</td>
              <td>Kejar Diskon</td>
            </tr>
            <tr>
              <td>Flash sale </td>
              <td>Promo pengguna Baru</td>
              <td>Tokopaedi Nyam</td>
              <td>bangga buatan indonesia</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>tap tap kotak</td>
              <td>super gadget day</td>
            </tr>
            <tr>
              <td>Semasa</td>
              <td>Kolaborasi anak bangsa</td>
              <td>Tokopedia b2b digital</td>
              <td>mitra tokopaedi</td>
            </tr>
          </tbody>
        </table>
      </nav>
      <div className="flex py-5 justify-between ">
        <div className="left space-y-5">
          <h1 className="text-[#FFA617] text-xl font-bold">
            Punya toko online? Buka cabangnya di tokopedia
          </h1>
          <p className="text-sm">
            mudah, nyaman dan bebas biaya layanan transaksi
            <strong className="text-gray-500"> GRATIS</strong>
          </p>
          <div className="row">
            <button className="p-2 bg-secondary font-bold text-sm text-white mr-2 rounded-md">
              Buka Toko GRATIS
            </button>
            <span className="text-main font-semibold text-sm">
              Pelajari lebih lanjut
            </span>
          </div>
        </div>
        <div className="right max-w-md">
          <img src={rightImg} alt="bg" />
        </div>
      </div>
      <h1 className="font-bold text-gray-600 ">
        Nikmati mudahnya jualan online di tokopedia
      </h1>
      <p className="text-sm text-gray-400 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis
        magnam esse aspernatur eius veritatis quam vero reiciendis, itaque iste
        accusamus expedita distinctio facere mollitia quasi cum perspiciatis
        officiis tempora doloribus ad sapiente? Aut quia maiores assumenda qui
        optio nulla iure, dolore nisi et, magni commodi amet minus. Eveniet qui
        sit sequi itaque, accusamus quae at molestiae eos, nam, corporis dolores
        beatae tempore similique in! Facere illum quis rerum necessitatibus
        exercitationem esse ducimus nam, quas cupiditate architecto, ab ea
        accusantium culpa ipsam error molestiae. Autem, adipisci! Recusandae
        distinctio soluta magni omnis quidem cupiditate provident accusamus,
        odio delectus debitis cum numquam vel facilis iure doloremque? Fuga
        cumque velit cum dolorem molestias expedita voluptatem! Harum possimus
        quae nulla autem sint aut, corporis id facere unde minus veniam fugiat,
        at nisi dolorem exercitationem doloremque perspiciatis soluta? Molestias
        quisquam quod iste hic eveniet cum et corporis. Qui modi aut ea
        consectetur eius, quas non praesentium pariatur. Vitae non corporis
        beatae quia eveniet, veniam tempora delectus explicabo consectetur
        adipisci, facilis aliquid iure aperiam saepe unde odit nemo quis.
        Accusamus necessitatibus sed quidem perspiciatis numquam aliquid, rem
        pariatur iure repellendus facilis reprehenderit modi. Quam sed
        aspernatur veritatis officiis incidunt hic quisquam beatae placeat saepe
        eos, neque provident atque illo quis cumque alias mollitia deserunt
        eveniet libero harum, vero impedit architecto dolorum! Exercitationem
        iusto repudiandae, temporibus fuga in dolorum veritatis doloribus
        suscipit vero reiciendis quas repellat doloremque, beatae quia itaque
        obcaecati odio nam provident ab eveniet! Eligendi fuga laborum molestiae
        earum a labore optio voluptates voluptatibus ut pariatur fugiat vitae
        corporis in quibusdam, sit facere eos itaque veritatis ipsum! In soluta
        natus facilis deserunt temporibus eaque accusamus quasi ipsum illum,
        asperiores delectus consequatur at! Rem reprehenderit sunt inventore
        eaque minima ea ab debitis, dolorem, quis veniam distinctio sapiente
        delectus totam eius! Sed sequi praesentium animi officiis ratione?
      </p>
      <div className="mt-8 flex gap-20 pb-32">
        <div className="max-w-xs flex gap-2 ">
          <img src={transparent} className="w-[100px] h-[100px]" alt="" />
          <div className="right">
            <h1 className="text-main font-bold">Transparant</h1>
            <p className="desc text-sm font-semibold text-gray-500">
              Temukan Produk dari Ribuan Toko / Online Shop terpercaya se
              Indonesia, dan baca review nya
            </p>
          </div>
        </div>
        <div className="max-w-xs flex gap-2 ">
          <img src={fasilitas} className="w-[100px] h-[100px]" alt="" />
          <div className="right">
            <h1 className="text-main font-bold">Transparant</h1>
            <p className="desc text-sm font-semibold text-gray-500">
              Temukan Produk dari Ribuan Toko / Online Shop terpercaya se
              Indonesia, dan baca review nya
            </p>
          </div>
        </div>
        <div className="max-w-xs flex gap-2 ">
          <img src={transparent} className="w-[100px] h-[100px]" alt="" />
          <div className="right">
            <h1 className="text-main font-bold">Transparant</h1>
            <p className="desc text-sm font-semibold text-gray-500">
              Temukan Produk dari Ribuan Toko / Online Shop terpercaya se
              Indonesia, dan baca review nya
            </p>
          </div>
        </div>
      </div>
      <hr className="scale-x-125 mb-10" />
      <div className="bottom flex justify-between gap-3">
        <div>
          <header className=" font-bold">Tokopedia</header>
          <ul className="[&>*]:py-[2px]">
            <li>tantang tokopaedi</li>
            <li>karir</li>
            <li>blog</li>
            <li>bride story</li>
          </ul>
          <header className="font-bold">Beli</header>
          <ul className="[&>*]:py-[2px]">
            <li>tagihan & top up</li>
            <li>tokopedia cod</li>
            <li>tuker tambah</li>
          </ul>
        </div>
        <div>
          <header className=" font-bold">Jual</header>
          <ul className="[&>*]:py-[2px]">
            <li>pusat edukasi</li>
            <li>mitra toppers</li>
            <li>Daftar official store</li>
          </ul>
          <header className="font-bold">Bantuan dan panduan</header>
          <ul className="[&>*]:py-[2px]">
            <li>tokopaedi care</li>
            <li>syarat dan ketentuan</li>
            <li>kebijakan privasi</li>
            <li>mitra</li>
          </ul>
        </div>
        <div>
          <header className=" font-bold">Ikuti kami</header>
          <div className="flex gap-3 text-white">
            <div className="social  text-white rounded-full h-8 w-8 grid place-items-center bg-[#3B5998]">
              <FaFacebookF className=" text-white" />
            </div>
            <div className="social rounded-full h-8 w-8 grid place-items-center bg-[#00ACED]">
              <FaTwitter />
            </div>
            <div className="social rounded-full h-8 w-8 grid place-items-center bg-[#CB2027]">
              <FaPinterestP className="text-white" />
            </div>
            <div className="social rounded-full h-8 w-8 grid place-items-center bg-[#D93174]">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
        <div className="max-w-md text-center ">
          <img src={bottomImg} alt="" />
          <strong className="text-gray-700">
            © 2009 - 2023, PT. Tokopedia
          </strong>
          <div className="cta p-[3px] rounded-md flex mx-auto mt-5 bg-gray-200 max-w-fit">
            <button className="btn bg-secondary font-semibold text-white rounded-md px-2 p-[2px]">
              indonesia
            </button>
            <button className="font-bold text-gray-500 px-3">english</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

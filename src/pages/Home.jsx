import Picture from "../components/picture";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Picture>
      <div className="h-screen w-full bg-[url('')]">
        <span className="flex justify-between items-center max-w-6xl mx-auto border-b-2 border-white">
          <div className="text-2xl">
            <i className="fa-solid fa-phone-volume p-3"></i>
            LAO +856 20 91123850
            <i className="fa-regular fa-envelope p-4"></i>
            nxyn8786@gmail.com
          </div>
          <div className="text-2xl">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin p-3"></i>
            <i className="fa-brands fa-google p-3"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </span>
        <span className=" justify-center text-5xl text-lime-500 flex mt-24">
          ຂໍເຊີນທຸກທ່ານມາທ່ຽວ ແຂວງ ຫລວງພະບາງ
        </span>
        <span className="justify-center text-5xl  text-lime-500 flex mt-4">
          (ຂໍຂອບໃຈ)
        </span>
      </div>
      <div className="bg-emerald-400 p-8 grid grid-cols-5 gap-4">
        <img
          className="bg-blue-400"
          src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-05-hover.png"
          alt=""
        />
        <img
          className="bg-amber-100"
          src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-01-hover.png"
          alt=""
        />
        <img
          className="bg-emerald-500"
          src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png"
          alt=""
        />
        <img
          className="bg-emerald-100"
          src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-03-hover.png"
          alt=""
        />
        <img
          className="bg-emerald-600"
          src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-04-hover.png"
          alt=""
        />
      </div>
      <span className="text-4xl flex justify-center bg-emerald-400 p-8 text-cyan-600">
        ເຄັດລັບທີ່ສຳຄັນໃນການເດີນທາງທ່ອງທ່ຽວຫລວງພະບາງ
      </span>
      <div className="grid grid-cols-2 gap-1 p-3 bg-emerald-400">
        <div>
          <span className="text-4xl justify-center flex mt-7 text-white">
            ນໍ້າຕົກຕາດກວາງຊີ
          </span>
          <div className="p-4 w-full max-w-4xl mx-auto">
            <p className="text-justify leading-relaxed">
              ຂໍເຊີນນັກທ່ອງທ່ຽວທຸກ ທ່ານມາທ່ຽວຊົນນໍ້າຕົກຕາດກວາງຊີ
              ທີ່ມີຄວາມສວຍສົດ, ງົດງາມ ຈາກທຳມະຊາດ ແລະ ມີນໍ້າໄຫຼໃສເຢັນຕະຫຼອດປີ ຫຼື
              ວ່າຖ້າທ່ານມາທ່ຽວ ໃນລະດູຝົນທ່ານຈະໄດ້ເຫັນນໍ້າເປັນສີຂຽວມໍລະກົດ ແລະ
              ທ່ານຈະໄດ້ຍິນສຽງນໍ້າຕົກກ່ອນທີ່ຈະມາຮອດສະຖານທີ່ ແລະ
              ເມືອເຂົ້າມາຮອດຈະມີບ່ອນລອຍນໍ້າຫຼີ້ນອີກດ້ວຍ ສະນັ້ນ,
              ໃຫ້ທ່ານຊອກຫາຊຸດຫຼີ້ນນໍ້າ
              ແລ້ວທ່ານຈະເຫັນຫ້ອງປ່ຽນຊຸດຫຼີ້ນນໍ້າໃກ້ໆແຖວນັ້ນ ແລະ
              ເມືອທ່ານເຂົ້າມາທ່ອງທ່ຽວກະລຸນາ ປະຕິບັດຕາມຮີດຄອງປະເພນີຂອງທ້ອງຖິ່ນ
              (ກົດລະບຽບ ແລະ ຄໍາຕາມໂປດສະເຕີ)
              ນອກຈາກນີ້ທ່ານຍັງສາມາດເຂົ້າໄປຊົມຫ້ອງລະບົບຄວາມປອດໄຟໄດ້ອີກດ້ວຍ(ໂດຍບໍ່ໄດ້ເສຍເງີນ).
              ນໍ້າຕົກຕາດກວາງຊີເປີດບໍລິການທຸກວັນແຕ່ເວລາ: 8:00 – 17:30 ໂມງ
              ຄ່າເຂົ້າຊົມ: ຄົນລາວ 20,000 ກີບຕໍ່ຄົນ (ອາຍຸຕໍ່າກວ່າ 12 ປີ
              ເຂົ້າຊົມຟຣີ) ຄ່າເຂົ້າຊົມ: ຄົນຕ່າງປະເທດ 60,000 ກີບຕໍ່ຄົນ ແລະ
              ສາມາດເດີນທາງດ້ວຍລົດຕຸກຕຸກ ຫຼື ລົດຕູ້,
              ນັກທ່ອງທ່ຽວສາມາດເດີນທາງເປັນສ່ວນຕົວ ຫຼື
              ແລກປ່ຽນກັບນັກທ່ອງທ່ຽວຄົນອື່ນໃນລາຄາ 60,000 ກີບຕໍ່ຄົນ ແລະ
              ສ່ວນຕົວໃນລາຄາ 250,000 ກີບ, ການເດີນທາງໃຊ້ເວລາປະມານ 45 ນາທີ ສຳ
              ລັບນັກພະຈົນໄພ ສາມາດຂີ່ລົດຖີບໄດ້ ມັນໃຊ້ເວລາປະມານ 2 ຊົ່ວໂມງ
              ແລະເຊົ່າລົດຖີບລາຄາປະມານ 20,000 ກີບຕໍ່ມື້. ແລະ
              ອີກຢ່າງໜື່ງໃຫ້ນັກທ່ອງທ່ຽວຄວນປະຕິບັດຢ່າງເຄັ່ງຄັດເມື່ອເວລາລົງລອຍນໍ້າຢູ່ໃນນໍ້າຕົກ
              ນັກທ່ອງທ່ຽວຄວນຈື່ໄວ້ວ່າ ການໃສ່ຊຸດລອຍນໍ້າທີ່ເປີດເຜີຍຫຼາຍ
              ຈະເປັນທີ່ບໍ່ເໝາະສົມ ແລະ
              ຫ້າມບໍ່ໃຫ້ສະແດງການປະພຶດທີ່ບໍ່ເໝາະສົມຕໍ່ສາທາລະນະ ເຊັ່ນວ່າ ການກອດ
              ຈູບ, ສິ່ງສຳຄັນ
              ບໍ່ອະນຸຍາດໃຫ້ນັກທ່ອງທ່ຽວຍ່າງອ້ອມຮອບໂດຍບໍ່ໃສ່ເຄື່ອງນຸ່ງ ຫຼື
              ແມ່ນແຕ່ໃສ່ຊຸດລອຍນໍ້າທີ່ໂປ້ເກີນໄປ
              ເພາະຖືວ່າເປັນການກະທຳທີ່ບໍ່ເໝາະສົມ.
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-full h-full rounded-md"
            src="https://huunghivietlao.thoidai.com.vn/stores/news_dataimages/su.vu/102020/19/15/in_article/4850_Tad-Kuangsri-Waterfall.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-emerald-400 grid grid-cols-2 gap-4 p-3">
        <img
          className="w-full h-full rounded-md"
          src="https://live.staticflickr.com/4809/45185220315_b1b789de96.jpg"
          alt=""
        />
        <div className="p-4 w-full max-w-4xl mx-auto">
          <p className="text-justify leading-relaxed">
            <span className="text-4xl justify-center flex mt-4 text-white">
              ຕະຫຼາດກາງຄືນ
            </span>
            ຂໍເຊີນນັກທ່ອງທ່ຽວທຸກທ່ານມາທ່ຽວຊົມ ຕະຫຼາດກາງຄືນ ຂອງແຂວງຫລວງພະບາງ
            ມາທ່ຽວຊົມສີ້ນຄ້າພື້ນເມືອງ, ຢ່າງເຊັ່ນ: ມີຄວາມໂດດເດັ່ນທາງດ້ານແຜ່ນແພ,
            ຄວາມຫຼາກຫຼາຍຂອງປະເພດແຜ່ນແພ ທັງຮູບແບບ ແລະ ເຕັກນິກໃນການຕໍ່າແຜ່ນແພ ຫຼື
            ວ່າມາຊື່ຂອງກິນຫຼາກຫຼາຍນາໆຊະນິດ ຈາກຊາວບ້ານທີ່ນໍາມາຂາຍ ແລະ
            ໃນຕະຫຼາດຍັງມີສິນຄ້າວັດທະນະທໍາຊາວຫລວງພະບາງຫຼາກຫຼາຍຊະນິດໃຫ້ທ່ານໄດ້ເລືອກຊື່
            ຫຼື ທ່ຽວຊົມໄດ້ຕາມໃຈ ແລະ ສະຖານທີ່ ຕັ້ງຢູ່ທາງຮ່ອມນ້ອຍໆ
            ດ້ານຫຼັງຂອງສໍານັກງານທ່ອອງທ່ຽວ, ຂະໜານກັບເສັ້ນທາງແຄມຂອງ,
            ຕະຫຼາດແຫ່ງນີ້ເປັນສະຖານທີ່
            ທີ່ທ່ານຈະໄດ້ເຫັນອາຫານການກິນຂອງທ້ອງຖິ່ນທີ່ດີທີ່ສຸດ.
          </p>
        </div>
      </div>
      <div className="bg-emerald-400 grid grid-cols-2 gap-4 p-3">
        <div>
          <span className="text-4xl justify-center flex mt-4 text-white">
            ວັດຊຽງທອງ
          </span>
          <div className="p-4 w-full max-w-4xl mx-auto">
            <p className="text-justify leading-relaxed">
              ຂໍເຊີນທ່ຽວຊົມວັດທະນະທຳ, ຮີດຄອງປະເພນີ, ແລະ
              ວັດວາອາຣາມທີ່ມີຊື່ສຽງເປັນຕົ້ນ, ວັດຊຽງທອງຖືກສ້າງຂຶ້ນໃນປີ 1560
              ໃນສະໄໝເຈົ້າໄຊເສດຖາທິລາດ ໃນຮູບແບບຫຼວງພະບາງແທ້ໆ
              ແລະມີຫລັງຄາສະລັບຊັບຊ້ອນລຽນກັນເປັນຊັ້ນໆຢ່າງສະຫງ່າງາມ ແລະ
              ຮູບພາບຝາວັດທີ່ເປັນສີລະປະຄວາມຫຼູຫຼາຕິດແກ້ວທັງໝົດເວລາເໝາະສົມທີ່ສຸດທີ່ຈະໄປຢ້ຽມຊົມວັດນີ້
              ແລະຖ່າຍຮູບແມ່ນໃນເວລາຕອນເຊົ້າ ແລະ
              ການເຂົ້າເຖີງວັດຊຽງທອງຕັ້ງຢູ່ຖະໜົນສັກກະລີນ ພຽງແຕ່ຍ່າງປະມານ 10
              ນາທີຈາກສູນຂໍ້ມູນຂ່າວສານການທ່ອງທ່ຽວແຂວງຫລວງພະບາງ
              ແລະທ່ານຈະເຫັນວັດຢູ່ເບື້ອງຊ້າຍມືຂອງທ່ານ ແລະ
              ເພື່ອທ່ານເຂົ້າໄປສິ່ງທີ່ຄວນເຮັດ ແລະ ບໍ່ຄວນເຮັດໃນບໍລິເວນວັດ
              ແຕ່ງຕົວໃຫ້ສຸພາບຮຽບຮ້ອຍ, ປົດໝວກ ແລະ
              ເກີບອອກກ່ອນເຂົ້າຊົມສະຖານທີ່ສັກສິດ ເຄົາລົບພະສົງແລະສໍາມະເນນ,
              ສຳລັບແມ່ຍິງບໍ່ອະນຸຍາດໃຫ້ຖືກຕົວຂອງພະສົງ ແລະ ສຳມະເນນ.
              ຫ້າມບໍ່ໃຫ້ສະແດງຄວາມຮັກໃນສະຖານທີ່ສາທາລະນະເຊັ່ນ: ການຈັບມື, ການຈູບ,
              ການກອດ. ຫ້າມບໍ່ໃຫ້ຊື້ວັດຖຸໂບຮານໃດໆເພາະເປັນສິ່ງທີ່ຖືກຫ້າມ ແລະ
              ທ່ານຈະຖືກປັບໃໝ
            </p>
          </div>
        </div>
        <img
          className="w-full h-full rounded-md"
          src="https://www.tourismluangprabang.org/wp-content/uploads/2022/07/wat-xieng-thong-16-of-8-2.jpg"
          alt=""
        />
      </div>
      <span className="flex justify-center bg-emerald-400 p-6 text-white text-3xl">
        ເຊີນຊົມ ແຂວງຫຼວງພະບາງ
      </span>
      <div className="bg-emerald-400 p-4 grid grid-cols-4 gap-4">
        <div>
          <span className="text-2xl flex justify-center">ແຂວງຫລວງພະບາງ</span>

          <img
            className="h-80 w-full object-cover cursor-pointer rounded-md"
            src="https://luangprabangmai.wordpress.com/wp-content/uploads/2019/06/maxresdefault1.jpg"
            alt=""
            onClick={() => navigate("/about")}
          />
        </div>
        <div>
          <span className="text-2xl flex justify-center">
            ວັດທະນະທຳ ແລະ ປະເພນີ
          </span>

          <img
            className="h-80 w-full object-cover cursor-pointer rounded-md"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfAM0Th0Hlx975Sxx6q-kogJgIzMo3kGE6Mk3Ek5Hsh_eKARLClY8O0JH2D7AET5r09_xVeGcK-Rn6bWckqqpUQY91EBHfdFqvKK9eXHNvgiEg5qTIpCuuGemUdsxXB-lCKUAg87oLL3c/s1600/Screen+Shot+2019-01-28+at+16.24.27.png"
            alt=""
            onClick={() => navigate("/tour")}
          />
        </div>
        <div>
          <span className="text-2xl flex justify-center">
            ຊົມຖ້ໍາຕິ່ງ ແຂວງຫລວງພະບາງ
          </span>

          <img
            className="h-80 w-full object-cover rounded-md cursor-pointer"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK-otfixxkEs2Cn98jitMX8jjfqArphrEnl-KZ0wvZm1OSZP8mtTe7AwafSnF6oJqY_E-ypUgxYlrbYnF2jlmjMkmopR6h3bRs37eo59nxMwGzZ140olxIQFkpa7EHLIGh2MNf-Pp6NTex/s1600/Screen+Shot+2018-07-12+at+15.55.17.png"
            alt=""
            onClick={() => navigate("/activities")}
          />
        </div>
        <div>
          <span className="text-2xl flex justify-center">
            ທຳມະຊາດ ແຂວງຫລວງພະບາງ
          </span>
          <img
            className="h-80 w-full object-cover rounded-md cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OmVZrpzoQ21LgUo-obaE9J6eLk9IEVfEPg&s"
            alt=""
            onClick={() => navigate("/nature")}
          />
        </div>
      </div>
      <span className="text-4xl flex justify-center bg-emerald-400 p-5 text-white">
        ສິ່ງທີ່ຄວນມີເມື່ອມາທ່ຽວຫລວງພະບາງ
      </span>
      <div className="bg-emerald-400 p-4 grid grid-cols-4 gap-4">
        <img
          className="h-44 w-full object-cover rounded-md"
          src="https://www.ebuylaos.com/uploads/images/202308141749470dd868831.jpg"
          alt=""
        />
        <img
          className="h-44 w-full object-cover rounded-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IuH7YVLiowx61dx0A0WD6yTRmF8UpJ7Usg&s"
          alt=""
        />
        <img
          className="h-44 w-full object-cover rounded-md"
          src="https://www.joopzy.com/wp-content/uploads/2018/10/Camera-usb-flash-drive-pen-drive-8GB-16GB-32GB-64GB-128GB-USB-Memory-Stick-Thumb-1-600x600.jpg"
          alt=""
        />
        <img
          className="h-44 w-full object-cover rounded-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5DY8QsnNtWyHhVSmIoJmzRsXiICO1GaIPTVkgMsSMPP3ZljnqnZl1cXkgruGKRpJLWw&usqp=CAU"
          alt=""
        />
      </div>
    </Picture>
  );
}
export default Home;

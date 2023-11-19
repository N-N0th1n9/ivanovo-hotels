const AddressIvanovoHotel = () => {
  return (
      <div style={{position: "relative", overflow: "hidden", width: "100%"}}>
        <a
            href="https://yandex.ru/maps/5/ivanovo/?utm_medium=mapframe&utm_source=maps"
            style={{color: "#000", fontSize: "12px", position: "absolute", top: "8px", left: "10px"}}
        >
          Иваново
        </a>
        <a
            href="https://yandex.ru/maps/5/ivanovo/house/krasnogvardeyskaya_ulitsa_17/YEkYfw9oSkICQFtsfXV4cn5kZw==/?ll=40.983392%2C56.992829&utm_medium=mapframe&utm_source=maps&z=17"
            style={{color: "#000", fontSize: "12px", position: "absolute", top: '18px', left: "10px"}}
        >
          Красногвардейская улица, 17 на карте Иванова — Яндекс Карты
        </a>
        <iframe
            src="https://yandex.ru/map-widget/v1/?ll=40.983392%2C56.992829&mode=whatshere&whatshere%5Bpoint%5D=40.988375%2C56.993273&whatshere%5Bzoom%5D=17&z=17"
            width="560" frameBorder="1"
            style={{width: "100%", borderRadius: "10px"}}
            className='h-[650px] xl:h-[630px] lg:h-[600px] md:h-[550px] sm:h-[470px] xs:h-[400px]'
        ></iframe>
      </div>
  );
};

export default AddressIvanovoHotel;
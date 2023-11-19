const AddressArtHotel = () => {
  return (
      <div style={{position: "relative", overflow: "hidden", width: "100%"}}>
        <a
            href="https://yandex.ru/maps/5/ivanovo/?utm_medium=mapframe&utm_source=maps"
            style={{color: "#000", fontSize: "12px", position: "absolute", top: "8px", left: "10px"}}
        >
          Иваново
        </a>
        <a
            href="https://yandex.ru/maps/5/ivanovo/house/ulitsa_stankostroiteley_1gk1/YEkYfwFgSEUCQFtsfXV3cnhnbQ==/?ll=40.960104%2C56.963450&utm_medium=mapframe&utm_source=maps&z=17.22"
            style={{color: "#000", fontSize: "12px", position: "absolute", top: '18px', left: "10px"}}
        >
          Улица Станкостроителей, 1Гк1 — Яндекс Карты
        </a>
        <iframe
            src="https://yandex.ru/map-widget/v1/?ll=40.960104%2C56.963450&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0Njc1MDY2ODkzElHQoNC-0YHRgdC40Y8sINCY0LLQsNC90L7QstC-LCDRg9C70LjRhtCwINCh0YLQsNC90LrQvtGB0YLRgNC-0LjRgtC10LvQtdC5LCAx0JPQujEiCg0l1yNCFZPaY0I%2C&z=17.22"
            width="560" frameBorder="1"
            style={{width: "100%", borderRadius: "10px"}}
            className='h-[650px] xl:h-[630px] lg:h-[600px] md:h-[550px] sm:h-[470px] xs:h-[400px]'
        ></iframe>
      </div>
  );
};

export default AddressArtHotel;
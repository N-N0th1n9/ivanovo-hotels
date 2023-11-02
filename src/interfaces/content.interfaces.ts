interface RoomFeatures {
  title: string;
  short_description: string;
  features: string[];
}

interface Room {
  title: string;
  room_1: RoomFeatures;
  room_2: RoomFeatures;
  room_3: RoomFeatures;
  room_4: RoomFeatures;
  room_5: RoomFeatures;
}

export interface Result {
  main: {
    texts: {
      phone: string;
      title: string;
      sub_title: string;
    };
    colors: {
      background_color: string;
      phone_text_color: string;
      text_color: string;
    };
  };
  about_us: {
    texts: {
      title: string;
      features: string[];
    };
    colors: {
      title_text_color: string;
      background_color: string;
      usual_text_color: string;
    };
  };
  rooms: {
    texts: {
      title: string;
    };
    colors: {
      title: string;
      sub_text: string;
      order_text: string;
      background_color: string;
      panel_background: string;
    };
    room_1: Room;
    room_2: Room;
    room_3: Room;
    room_4: Room;
    room_5: Room;
  };
  address: {
    texts: {
      address: string;
    };
  };
}
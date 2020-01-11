import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './helper/BaseService'
export interface IHotel {
  Hotelname: String
  CityCode: String
  Rate: String
  Latitude: String
  Longitude: String
  Address: String
  Location: String
  Phone: String
  Description: String
  Images: { Image: String[] }
}
export interface IHotelRoom {
  SearchID?: string
  CityCode?: string
  HotelId?: string
  HotelName?: string
  Lat?: string
  Long?: string
  Address?: string
  Phone?: string
  Location?: string
  Star?: string
  Description?: string
}

export default class HotelService extends BaseService<any> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios)
  }
  list(): Promise<{ data: any }> {
    return new Promise((resolve, reject) => {
      let data = {
        SearchID: 'Tk1ltDkizO0VZSZNTv',
        CityCode: '143542',
        CheckIn: '2020-11-21',
        CheckOut: '2020-11-25',
        NationalityCode: 'IR',
        Currency: 'IRR',
        Hotels: {
          Hotel: [
            {
              HotelId: '1042116',
              HotelName: 'Exe Suites 33',
              Lat: '40.422173',
              Long: '-3.710582',
              Address: 'Calle De Leganitos 33 28013 MADRID',
              Location: 'Plaza España-Palacio Real',
              HotelStar: '3',
              HotelDescription:
                'Boasting a magnificent setting right in the hub of Madrid, this fantastic urban hotel offers an elegant and comfortable accommodation ideal for those who want to stay in the centre of it all. The property is less than 5 minutes away from many major attrac',
              HotelImage:
                'https://online.travellanda.com/photo/hotel/bf00b3d32a61153a/25/25a4dc82620c1e43/01-b.jpg',
              HotelPrice: '6940000'
            },
            {
              HotelId: '1046156',
              HotelName: 'Weare Chamartin Hotel',
              Lat: '40.471914',
              Long: '-3.683574',
              Address: 'Calle De Agustin De Foxa S/N 28036 MADRID',
              Location: 'Plaza Castilla-Chamartín',
              HotelStar: '4',
              HotelDescription:
                "The Hotel Chamartin is conveniently situated in a main business and industrial area of Madrid, right at the bustling Chamartin station. The Madrid Barajas airport, the city's Trade Fair and the cultural attractions of the city centre are all easily access",
              HotelImage:
                'https://online.travellanda.com/photo/hotel/bf00b3d32a61153a/1a/1a01cb712958e1fe/01-b.jpg',
              HotelPrice: '5497000'
            },
            {
              HotelId: '1072469',
              HotelName: 'Vincci Centrum',
              Lat: '40.417608',
              Long: '-3.698623',
              Address: 'Calle De Cedaceros 4 28000 MADRID',
              Location: 'Puerta del Sol-Plaza Mayor',
              HotelStar: '4',
              HotelDescription:
                'This delightful hotel lies just a few steps away from the Museo Del Prado in the mesmerizing city of Madrid. Guests will find themselves within easy access of a host of shopping and entertainment venues, as well as the Thyssen and the Reina Sofia museums.',
              HotelImage:
                'https://online.travellanda.com/photo/hotel/bf00b3d32a61153a/5e/5eccdc90170dee01/01-b.jpg',
              HotelPrice: '20618000'
            },
            {
              HotelId: '1100237',
              HotelName: 'Hotel Dome',
              Lat: '40.513784',
              Long: '-3.67307',
              Address: 'Crta.Fuencarral-Alcobendas Km 8 28049 MADRID',
              Location: 'Las Tablas',
              HotelStar: '4',
              HotelDescription:
                'Conveniently situated in the north of the city, the elegant design hotel Dome Madrid is located in the heart of the Las Tablas Business Park, where companies such as BBVA, Telecinco, Telefónica, Cofares or Agroman are based. The area is very well connect',
              HotelImage:
                'https://online.travellanda.com/photo/hotel/bf00b3d32a61153a/92/92ccf40f18a0b9e6/01-b.jpg',
              HotelPrice: '6180000'
            },
            {
              HotelId: '1107400',
              HotelName: 'Meliá Barajas',
              Lat: '40.469588',
              Long: '-3.582171',
              Address: 'AVENIDA DE LOGROÑO 305 305 28042 MADRID',
              Location: 'Barajas-Ifema',
              HotelStar: '4',
              HotelDescription:
                "This hotel enjoys a peaceful location close to Madrid Barajas airport and IFEMA convention center. Its easy access of the city centre it's ideal for business and leisure guests. The hotel offers a 24-hour shuttle service airport/hotel as well as an amazin",
              HotelImage:
                'https://online.travellanda.com/photo/hotel/bf00b3d32a61153a/f3/f333fb901a7569a3/01-b.jpg',
              HotelPrice: '8951000'
            }
          ]
        },
        Forecasts: null
      }
      resolve({ data })
    })
  }

  detail(id: string | number): Promise<{ data: IHotel }> {
    return new Promise((resolve, reject) => {
      let data = {
        Hotelname: 'NH Madrid Alonso Martínez',
        CityCode: '143542',
        Rate: '3',
        Latitude: '40.428661',
        Longitude: '-3.696228',
        Address: 'Calle De Santa Engracia 5 28010 MADRID',
        Location: 'Alonso Martínez',
        Phone: '+917814949',
        Description: '',
        Images: {
          Image: [
            'http://apitest.wsafar.com/images.php?id=bf00b3d32a61153a/8c/8c0911d3db78bdab/01-b.jpg',
            'http://apitest.wsafar.com/images.php?id=bf00b3d32a61153a/8c/8c0911d3db78bdab/02-b.jpg',
            'http://apitest.wsafar.com/images.php?id=bf00b3d32a61153a/8c/8c0911d3db78bdab/03-b.jpg',
            'http://apitest.wsafar.com/images.php?id=bf00b3d32a61153a/8c/8c0911d3db78bdab/04-b.jpg',
            'http://apitest.wsafar.com/images.php?id=bf00b3d32a61153a/8c/8c0911d3db78bdab/05-b.jpg',
            'http://apitest.wsafar.com/images.php?id=bf00b3d32a61153a/8c/8c0911d3db78bdab/06-b.jpg',
            'http://apitest.wsafar.com/images.php?id=bf00b3d32a61153a/8c/8c0911d3db78bdab/07-b.jpg',
            'http://apitest.wsafar.com/images.php?id=bf00b3d32a61153a/8c/8c0911d3db78bdab/08-b.jpg',
            'http://apitest.wsafar.com/images.php?id=bf00b3d32a61153a/8c/8c0911d3db78bdab/09-b.jpg',
            'http://apitest.wsafar.com/images.php?id=bf00b3d32a61153a/8c/8c0911d3db78bdab/10-b.jpg'
          ]
        }
      }
      resolve({ data })
    })
  }

  rooms(hotel_id: string | number): Promise<{ data: IHotelRoom }> {
    return new Promise((resolve, reject) => {
      let data = {
        SearchID: 'RfzeLJgLwzWVA17HUz',
        CityCode: '143542',
        HotelId: '1046156',
        HotelName: 'Weare Chamartin Hotel',
        Lat: '40.470768',
        Long: '-3.684629',
        Address: 'AGUSTIN DE FOXA S/N 28036 MADRID',
        Phone: '+34913344929',
        Location: 'Plaza Castilla-Chamartin',
        Star: '4',
        Suggests: {
          Suggest: {
            SuggestId: '42839978075',
            Board: 'Room Only',
            Discount: '1054000',
            DiscountType: 'Minimum Night Discount Offer',
            SuggestPrice: '2910000',
            Rooms: {
              Room: {
                RoomId: '2839978075-2-0',
                RoomName: 'Standard Family',
                CountAdult: '2',
                CountChild: '2',
                RoomPrice: '1982000',
                DailyPrices: { DailyPrice: '495000' }
              }
            }
          }
        },
        Description:
          ' The Hotel Chamartin is conveniently situated in a main business and industrial area of Madrid, right at the bustling Chamartin station. The Madrid Barajas airport, the city&s Trade Fair and the cultural attractions of the city centre are all easily accessible by public transport, as Chamartin station provides direct trains as well as metro connections. Castellana Avenue can be reached in a short walk, and Santiago Bernabeu Stadium is only three kilometres away.The hotel provides 378 spacious, well-lit rooms with a handy Wi-Fi internet connection and specializes in meetings and conventions, offering various open spaces with plenty of daylight and equipped with the latest in audio-visual technology. Guests can dine in the onsite cafeteria, relax with a newspaper in the lobby, or get some work done in the business centre, all during a high-powered business trip in Madrid. '
      }
      resolve({ data })
    })
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    hotels: HotelService
  }
}
declare module '@nuxt/types' {
  interface NuxtServiceInstance {
    hotels: HotelService
  }
}

export interface Teacher {
  id: string;
  name: string;
  arabicName: string;
  specialty: string;
  degree: string;
  institution: string;
  rating: number;
  image: string;
  bio: string;
  mastery: {
    title: string;
    description: string;
    level: string;
  }[];
  schedule: {
    day: string;
    slots: string[];
  }[];
}

export const TEACHERS: Teacher[] = [
  {
    id: 'tariq-al-hashimi',
    name: 'Shaykh Tariq Al-Hashimi',
    arabicName: 'الشيخ طارق الهاشمي',
    specialty: 'Classical Arabic & Fiqh',
    degree: 'PhD',
    institution: 'Al-Azhar',
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ9j0QPqvj5UpRFdbw-wzyv-u9d0S49hgI-wgWtz2sF2sUej7MJKJ5U1a4aNVBtrc-3X4VZssU3QCBKWy-ybMSZ5wrHOcEFro2NKIT4XNliy0hvRZ0N4qWSGUhgXbOxFxISTbs6yZlTyo2FGBMFubQGQDClSOM6zBaVSt8xeldhr46akK_sHmlPvHxU0V4IpGxJ4SDA1xJlBndXHouhmorvXVemOqfenPzzud324pSUwCSuB_wAlK7A27VDhenzTHVL8h6ipHvu98N',
    bio: 'Shaykh Tariq brings over two decades of dedicated study and teaching in the traditional Islamic sciences. Having spent formative years in the historic seminaries of Fez and Cairo...',
    mastery: [
      { title: 'Classical Arabic Grammar', description: 'Comprehensive study of Al-Ajurrumiyya and Alfiyyat Ibn Malik.', level: 'Advanced' },
      { title: 'Maliki Fiqh', description: 'Jurisprudence according to the school of Medina.', level: 'Intermediate' }
    ],
    schedule: [
      { day: 'Mon', slots: ['09:00 - 10:30', '11:00 - 12:30'] },
      { day: 'Wed', slots: ['14:00 - 15:30'] },
      { day: 'Thu', slots: ['09:00 - 10:30', '16:00 - 17:30'] }
    ]
  },
  {
    id: 'fatima-az-zahra',
    name: 'Ustadha Fatima Az-Zahra',
    arabicName: 'الأستاذة فاطمة الزهراء',
    specialty: 'Quranic Recitation & Tajweed',
    degree: 'Ijazah',
    institution: 'Cairo',
    rating: 5.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrdhZIrYHW4-ddLKhVBeXzZX4KKerLRabR12LAdVLDK6KkmRF1Ml77ZBzu0rDqHuOSuaUSNWHPu-5UQmzBrw3RhjrUE6VsFKu-rKzTEnMc3XQyEDf57nUnuEBOz8LOnBatBUCJ9lDL3frWiMPttfLskiHWXYDyDL-CdqdN0LfuFz7_R66D6DgLrm2oN-93n6TCsw61AwyEoZuxYBF6GZbhP1nXJorrKqoEfDY75wktfjJnteYOtrqdWwoLbbuBLZFTo12o7QwZfLn1',
    bio: 'Ustadha Fatima is a renowned reciter with multiple Ijazahs in the ten Qira\'at. She focuses on the spiritual connection through precise Tajweed.',
    mastery: [
      { title: 'Hafs an Asim', description: 'Mastery of the most common recitation style.', level: 'Expert' },
      { title: 'Quranic Memorization', description: 'Structured Hifz programs for students.', level: 'All Levels' }
    ],
    schedule: [
      { day: 'Tue', slots: ['10:00 - 11:30'] },
      { day: 'Sat', slots: ['10:00 - 12:00', '15:00 - 17:00'] }
    ]
  }
];

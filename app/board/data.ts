export interface BoardMember {
  id: string;
  name: string;
  role: string;
  department: string;
  year: string;
  imageSrc: string;
  danceStyle: string;
  danceStyleColor: string;
}

export const executiveBoard: BoardMember[] = [
  {
    id: 'president',
    name: 'Berkay Koruyucu',
    role: 'President',
    department: 'Electrical and Electronics Engineering',
    year: 'Senior',
    imageSrc: '/images/board/president.jpeg',
    danceStyle: 'International Ballroom',
    danceStyleColor: 'purple'
  },
  {
    id: 'vice-president',
    name: 'Nisan Dökmeci',
    role: 'Vice President',
    department: 'Media and Visual Arts',
    year: 'Junior',
    imageSrc: '/images/board/vicepresident.jpeg',
    danceStyle: 'Modern',
    danceStyleColor: 'indigo'
  },
  {
    id: 'treasurer',
    name: 'Ramazan Efe Demirel',
    role: 'Treasurer',
    department: 'Business Administration',
    year: 'Sophomore',
    imageSrc: '/images/board/treasurer.jpeg',
    danceStyle: 'Social Latin',
    danceStyleColor: 'pink'
  },
  {
    id: 'secretary',
    name: 'Ahmet Efe Yakut',
    role: 'Secretary',
    department: 'Industrial Engineering',
    year: 'Freshman',
    imageSrc: '/images/board/secretary.jpeg',
    danceStyle: 'Swing',
    danceStyleColor: 'pink'
  }
];

export const departmentCoordinators: BoardMember[] = [
  {
    id: 'social-media',
    name: 'Zeynep Özveri',
    role: 'Social Media Coordinator',
    department: 'Media and Visual Arts',
    year: 'Junior',
    imageSrc: '/images/board/socialmedia.jpeg',
    danceStyle: 'Hip Hop',
    danceStyleColor: 'pink'
  },
  {
    id: 'events',
    name: 'Enis Yürük',
    role: 'Events Coordinator',
    department: 'Industrial Engineering',
    year: 'Junior',
    imageSrc: '/images/board/events.jpeg',
    danceStyle: 'Hip Hop',
    danceStyleColor: 'orange'
  },
  {
    id: 'sponsorship',
    name: 'Ezgi Çelebi',
    role: 'Sponsorship & Logistics',
    department: 'Business Administration',
    year: 'Sophomore',
    imageSrc: '/images/board/sponsorship.jpeg',
    danceStyle: 'Hip Hop',
    danceStyleColor: 'pink'
  },
  {
    id: 'competition',
    name: 'Asil Söylev',
    role: 'Coordinator',
    department: 'Medicine',
    year: 'Sophomore',
    imageSrc: '/images/board/coordination.jpeg',
    danceStyle: 'Tango',
    danceStyleColor: 'indigo'
  }
];

export const danceStyleCoordinators: BoardMember[] = [
  {
    id: 'swing',
    name: 'İkranur Şeker',
    role: 'Swing Dance Coordinator',
    department: 'Law',
    year: 'Junior',
    imageSrc: '/images/board/swing.jpeg',
    danceStyle: 'Swing',
    danceStyleColor: 'amber'
  },
  {
    id: 'modern',
    name: 'Irmak Bozkurt',
    role: 'Modern Dance Coordinator',
    department: 'Electrical and Electronics Engineering',
    year: 'Sophomore',
    imageSrc: '/images/board/modern.jpeg',
    danceStyle: 'Modern',
    danceStyleColor: 'emerald'
  },
  {
    id: 'tango',
    name: 'Abdulmelih Avlukyarı',
    role: 'Tango Coordinator',
    department: 'Industrial Engineering & Business Administration',
    year: 'Junior',
    imageSrc: '/images/board/tango.jpeg',
    danceStyle: 'Tango',
    danceStyleColor: 'purple'
  },
  {
    id: 'international-latin',
    name: 'Ece Aktürk',
    role: 'International Latin Coordinator',
    department: 'Chemistry',
    year: 'Senior',
    imageSrc: '/images/board/intballroom.jpeg',
    danceStyle: 'International Latin',
    danceStyleColor: 'indigo'
  },
  {
    id: 'hiphop',
    name: 'Ezgi Bekiroğlu',
    role: 'Hip Hop Coordinator',
    department: 'Psychology',
    year: 'Senior',
    imageSrc: '/images/board/hiphop.jpeg',
    danceStyle: 'Hip Hop',
    danceStyleColor: 'pink'
  },
  {
    id: 'social-latin',
    name: 'Alper Aydın',
    role: 'Social Latin Coordinator',
    department: 'Computer Engineering',
    year: 'Junior',
    imageSrc: '/images/board/sociallatin.jpeg',
    danceStyle: 'Social Latin',
    danceStyleColor: 'orange'
  }
]; 
const speakersData = [
  {
    id: 1,
    name: 'Dr. Jane Smith',
    position: 'Neuroscientist',
    biography:
      'Dr. Jane Smith is a leading expert in the field of neuroscience, with over 20 years of experience studying the brain and behavior. She has published numerous papers and received numerous awards for her groundbreaking research.',
    image: './images/v3_0237743.jpg',
  },
  {
    id: 2,
    name: 'Henry Peterson',
    position: 'Marketing Manager',
    biography:
      'John Doe is a seasoned marketing professional with over 15 years of experience in the industry. He has worked with a variety of clients across multiple sectors, and is known for his innovative and creative approach to marketing strategy.',
    image: './images/v3_0697001.jpg',
  },
  {
    id: 3,
    name: 'Dr. Michael Lee',
    position: 'Cardiologist',
    biography:
      'Dr. Michael Lee is a highly respected cardiologist with over 25 years of experience in the field. He has performed thousands of procedures and surgeries, and has developed innovative new techniques to improve patient outcomes.',
    image: './images/v3_0625410.jpg',
  },
  {
    id: 4,
    name: 'Samantha Brown',
    position: 'CEO',
    biography:
      'Samantha Brown is a successful entrepreneur and CEO with a proven track record of building and scaling businesses. She has founded several companies and has been recognized as one of the top business leaders in her industry.',
    image: './images/v4_0010433.jpg',
  },
  {
    id: 5,
    name: 'Dr. David Lee',
    position: 'Data Scientist',
    biography:
      'Dr. David Lee is a renowned data scientist with over 15 years of experience in the field. He has developed cutting-edge algorithms and models that have revolutionized the way businesses use data to make decisions.',
    image: './images/v3_0564925.jpg',
  },
  {
    id: 6,
    name: 'Emily Jones',
    position: 'Journalist',
    biography:
      'Emily Jones is an award-winning journalist with a career spanning over 20 years. She has reported on some of the biggest stories of our time, and is known for her fearless and uncompromising approach to investigative journalism.',
    image: './images/v4_0980001.jpg',
  },
];

const moreBtn = document.getElementById('collapse');
const expandBtn = document.getElementById('expand');
const exitBtn = document.getElementById('exit');

const myScreen = window.screen.width;

const speaker = document.getElementById('speakers');
speaker.innerHTML = speakersData
  .map(
    (spk) => `
    <!-- Speaker ${spk.id} -->
    <div
    id="speaker-${spk.id}"
    class=" flex justify-start gap-4 my-gap items-center  ${
  spk.id > 2 && (myScreen < 768) ? 'hidden' : ''
} md:items-start">
    <div class="w-[30%]">
      <img class="w-16" src="./images/bellow-images.svg" alt="" />
      <img
        class="-mt-10 ml-8 w-28 rounded-md"
        src="${spk.image}"
        alt="${spk.name}"
      />
    </div>
    <div class="flex flex-col w-[60%] gap-2">
      <h3 class="font-bold text-lg">${spk.name}</h3>
      <span class="italic text-callAction text-sm font-semibold">
      ${spk.position}
      </span>
      <span class="dash bg-gray-400"></span>
      <p class="text-gray-500 text-sm font-medium">
      ${spk.biography}
      </p>
    </div>
  </div>`,
  )
  .join('');

const speaker3 = document.getElementById('speaker-3');
const speaker4 = document.getElementById('speaker-4');
const speaker5 = document.getElementById('speaker-5');
const speaker6 = document.getElementById('speaker-6');
const spkArr = [speaker3, speaker4, speaker5, speaker6];

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    spkArr.forEach((spk) => spk.classList.add('hidden'));
    expandBtn.classList.remove('hidden');
    exitBtn.classList.add('hidden');
  } else {
    spkArr.forEach((spk) => spk.classList.remove('hidden'));
  }
});

moreBtn.addEventListener('click', () => {
  expandBtn.classList.toggle('hidden');
  exitBtn.classList.toggle('hidden');
  spkArr.forEach((spk) => spk.classList.toggle('hidden'));
});

const navBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-mobile');
const overly = document.getElementById('overly');

navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('open');
  navList.classList.toggle('hidden');
  overly.classList.toggle('hidden');
});
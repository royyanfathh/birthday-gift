 AOS.init();

var musik = "";
var audio = document.querySelector(".audio");

if(musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";

  // Tampilkan kembang api
  const container = document.getElementById('fireworks-container');
  const fireworks = new Fireworks(container, {
      speed: 3,             
      acceleration: 1.05,   
      friction: 0.95,       
      gravity: 1.5,         
      particles: 150,       
      traceLength: 3,       
      explosion: 5,         
      brightness: {
          min: 50,          
          max: 80           
      },
      boundaries: {         
          x: 0,
          y: 0,
          width: window.innerWidth,
          height: window.innerHeight
      },
      hue: {
          min: 0,           
          max: 360          
      }
  });

  fireworks.start(); 

  setTimeout(() => fireworks.stop(), 5000);

  setTimeout(function () {
    document.querySelector(".open").style.display = "none";
  }, 1200);
}


function wa(keinginan) {
  window.open("https://api.whatsapp.com/send?phone=+62882000769955&text=Makasih%20yaa%20udaa%20ucapin%20ulang%20tahun%20akuu,%20di%20hari%20ulang%20tahun%20aku%20yang%20ke%2018%20inii,%20aku%20mau...... " + keinginan);
}

async function tanya() {
  var {
    value: keinginan
  } = await swal.fire({
    title: 'Di hari yang spesial ini, keinginan kamu apaa?',
    input: 'text',
    ShowCancelButton: false,
  });

  if (keinginan) {
    await swal.fire({
      imageUrl: 'resources/wa.png',
      title: 'Kirim jawabannya ke wa aku yaa hehehehe'
    });
    wa(keinginan);
  } else {
    await swal.fire({
      icon: 'error',
      title: 'Jangan dikosongin dong :('
    });
    tanya();
  }
}

setTimeout(() => {
    document.querySelector('.card').classList.add('shake');
}, 1000);

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (rect.top <= window.innerHeight && rect.bottom >= 0);
}

window.addEventListener('scroll', function () {
  const video = document.getElementById('birthday-video');
  
  if (isElementInViewport(video)) {
    video.play();
  } else {
    video.pause(); 
  }
});


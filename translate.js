function translateToArabic() {
    document.getElementById('title').innerText = 'يونيكست';
    document.getElementById('subtitle').innerText = 'تقدم شركة يونيكست خدمات استثنائية في الكتابة والتصميم الجرافيكي وتطوير الويب، وتقديم حلول مخصصة لتلبية احتياجاتك.';
    document.getElementById('founder').innerHTML = 'تأسست من قبل <a href="https://ksayounes.github.io/KsaYounes-web/">يونس القساسوة</a> من <a href="https://g.co/kgs/BZZDW2i">المغرب</a>';
    document.getElementById('writing-services-title').innerText = 'خدمات الكتابة:';
    document.getElementById('writing-services-description').innerText = 'تقدم خدمات الكتابة لدينا إنشاء محتوى عالي الجودة وتنقيحه، مما يضمن أن كلماتك تترك صدى وتلمع. فريقنا من الكتاب المهرة يجلب خبرة متنوعة عبر مواضيع مختلفة، مما يوفر محتوى مخصصًا يلبي احتياجاتك الخاصة. من التدوينات والمقالات إلى نسخ التسويق والأوراق الأكاديمية، نقدم عملًا مصقولًا وجذابًا وعالي الجودة.';
    document.getElementById('writing-services-contact').innerHTML = '<strong>تواصل معنا:</strong> تواصل معنا عبر <a href="https://wa.me/2120696934044">واتساب</a> لمعرفة المزيد عن خدمات الكتابة لدينا.';
    document.getElementById('graphic-design-title').innerText = 'خدمات التصميم الجرافيكي';
    document.getElementById('graphic-design-description').innerText = 'تركز خدمات التصميم الجرافيكي لدينا على تقديم تصميمات بصرية مذهلة وفعالة مخصصة لعلامتك التجارية وجمهورك. من الشعارات ومواد العلامة التجارية إلى الأصول الرقمية والمواد الترويجية، يستفيد فريقنا من الخبرة الإبداعية والأدوات الرائدة في الصناعة لتحقيق رؤيتك.';
    document.getElementById('graphic-design-contact').innerHTML = '<strong>تواصل معنا:</strong> تواصل معنا عبر <a href="https://wa.me/2120696934044">واتساب</a> لمعرفة المزيد عن خدمات التصميم الجرافيكي لدينا.';
    document.getElementById('web-development-title').innerText = 'خدمات تطوير الويب';
    document.getElementById('web-development-description').innerText = 'تشمل خدمات تطوير الويب لدينا إنشاء مواقع وتطبيقات ويب متجاوبة وعملية وسهلة الاستخدام. سواء كنت بحاجة إلى صفحة هبوط بسيطة أو منصة تجارة إلكترونية معقدة، يجمع فريقنا بين الخبرة التقنية والإبداع لبناء حلول رقمية تحقق النتائج وتعزز وجودك على الإنترنت.';
    document.getElementById('web-development-contact').innerHTML = '<strong>تواصل معنا:</strong> تواصل معنا عبر <a href="https://wa.me/2120696934044">واتساب</a> لمعرفة المزيد عن خدمات تطوير الويب لدينا.';
}

function translateToEnglish() {
    document.getElementById('title').innerText = 'Younexit';
    document.getElementById('subtitle').innerText = 'Younexit company provides exceptional services in writing, graphic design, and web development, delivering tailored solutions to meet your needs.';
    document.getElementById('founder').innerHTML = 'Founded by <a href="https://ksayounes.github.io/KsaYounes-web/">Younes Ksassoua</a> from <a href="https://g.co/kgs/BZZDW2i">Morocco</a>';
    document.getElementById('writing-services-title').innerText = 'Writing Services:';
    document.getElementById('writing-services-description').innerText = 'Our writing services offer top-notch content creation and refinement, ensuring your words resonate and shine. Our team of skilled writers brings diverse expertise across various subjects, providing tailored content that meets your specific needs. From blog posts and articles to marketing copy and academic papers, we deliver polished, engaging, and high-quality work.';
    document.getElementById('writing-services-contact').innerHTML = '<strong>Contact Us:</strong> Contact us via <a href="https://wa.me/2120696934044">WhatsApp</a> to know more about our writing services.';
    document.getElementById('graphic-design-title').innerText = 'Graphic Design Services';
    document.getElementById('graphic-design-description').innerText = 'Our graphic design services focus on delivering visually stunning and effective designs tailored to your brand and audience. From logos and branding materials to digital assets and promotional materials, our team utilizes creative expertise and industry-leading tools to bring your vision to life.';
    document.getElementById('graphic-design-contact').innerHTML = '<strong>Contact Us:</strong> Contact us via <a href="https://wa.me/2120696934044">WhatsApp</a> to know more about our graphic design services.';
    document.getElementById('web-development-title').innerText = 'Web Development Services';
    document.getElementById('web-development-description').innerText = 'Our web development services encompass the creation of responsive, functional, and user-friendly websites and web applications. Whether you need a simple landing page or a complex e-commerce platform, our team combines technical expertise with creativity to build digital solutions that drive results and enhance your online presence.';
    document.getElementById('web-development-contact').innerHTML = '<strong>Contact Us:</strong> Contact us via <a href="https://wa.me/2120696934044">WhatsApp</a> to know more about our web development services.';
}
/**
 * YouTube Tutorial:
 * https://youtu.be/wG_5453Vq98
 */

console.clear();

// Select the circle element
const circleElement = document.querySelector('.circle');

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 } // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position

// Initialize variables to track scaling and rotation
let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value

// Update mouse position on the 'mousemove' event
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.17;

// Start animation
const tick = () => {
  // MOVE
  // Calculate circle movement based on mouse position and smoothing
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  // Create a transformation string for cursor translation
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // SQUEEZE
  // 1. Calculate the change in mouse position (deltaMouse)
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  // Update previous mouse position for the next frame
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
  // 3. Convert mouse velocity to a value in the range [0, 0.5]
  const scaleValue = (mouseVelocity / 150) * 0.5;
  // 4. Smoothly update the current scale
  currentScale += (scaleValue - currentScale) * speed;
  // 5. Create a transformation string for scaling
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  // ROTATE
  // 1. Calculate the angle using the atan2 function
  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
  // 2. Check for a threshold to reduce shakiness at low mouse velocity
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  // 3. Create a transformation string for rotation
  const rotateTransform = `rotate(${currentAngle}deg)`;

  // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  // Request the next frame to continue the animation
  window.requestAnimationFrame(tick);
}

// Start the animation loop
tick();
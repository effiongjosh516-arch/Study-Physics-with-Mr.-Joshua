const APP_NAME = "Study Physics with Mr. Joshua";

const scheme = {
  SS1: [
    "Introduction to Physics",
    "Fundamental and Derived Quantities",
    "Measurement of Length, Mass and Time",
    "Position, Distance and Displacement",
    "Scalars and Vectors",
    "Motion",
    "Forces",
    "Types of Motion",
    "Simple Machines"
  ],
  SS2: [
    "Light Waves I",
    "Light Waves II",
    "Sound Waves",
    "Human Eye",
    "Application of Sound Waves",
    "Electric Charges",
    "Properties and Description of Fields",
    "Gravitational Field"
  ],
  SS3: [
    "Conversion of Energy",
    "Transmission System",
    "Uses of Machines",
    "Repair and Maintenance of Machines",
    "Dams and Energy Production",
    "Rockets and Satellites",
    "Niger-SAT 1",
    "NICOM-SAT 1"
  ]
};

const lessons = {
  "Introduction to Physics": `
    <p>Physics is the branch of science that studies matter, energy, motion and the interactions between them.</p>
    <p>Physics helps us understand many things around us, such as why objects fall, how machines work, how electricity is generated and how sound and light travel.</p>
    <h3>Major Areas of Physics</h3>
    <ul>
      <li>Mechanics — motion, forces and energy.</li>
      <li>Heat — temperature and thermal energy.</li>
      <li>Waves — sound, water waves and other wave phenomena.</li>
      <li>Electricity and Magnetism — electric charges, current and magnetic effects.</li>
      <li>Optics — light and its behaviour.</li>
      <li>Modern Physics — atoms, nuclei and radiation.</li>
    </ul>
    <h3>Applications of Physics</h3>
    <p>Physics is applied in engineering, medicine, communication, transportation, construction, agriculture and power generation.</p>
  `,

  "Fundamental and Derived Quantities": `
    <p>A physical quantity is a measurable property of a body or phenomenon.</p>
    <h3>SI Fundamental Quantities</h3>
    <ul>
      <li>Length — metre (m)</li>
      <li>Mass — kilogram (kg)</li>
      <li>Time — second (s)</li>
      <li>Electric current — ampere (A)</li>
      <li>Temperature — kelvin (K)</li>
      <li>Amount of substance — mole (mol)</li>
      <li>Luminous intensity — candela (cd)</li>
    </ul>
    <h3>Derived Quantities</h3>
    <p>Derived quantities are obtained by combining fundamental quantities.</p>
    <ul>
      <li>Area — m²</li>
      <li>Volume — m³</li>
      <li>Speed — m/s</li>
      <li>Acceleration — m/s²</li>
      <li>Force — newton (N)</li>
      <li>Density — kg/m³</li>
    </ul>
  `,

  "Measurement of Length, Mass and Time": `
    <p>Measurement is the process of determining the magnitude of a physical quantity by comparing it with a standard unit.</p>
    <h3>Measuring Length</h3>
    <p>Common instruments include metre rule, measuring tape, vernier caliper and micrometer screw gauge.</p>
    <h3>Measuring Mass</h3>
    <p>Mass can be measured using a beam balance or electronic balance.</p>
    <h3>Measuring Time</h3>
    <p>Time can be measured using clocks, watches and stopwatches.</p>
    <h3>Errors in Measurement</h3>
    <p>Parallax error can occur when a scale is viewed from an incorrect angle. Zero error occurs when an instrument does not read zero when it should.</p>
  `,

  "Position, Distance and Displacement": `
    <p><b>Position</b> describes the location of an object relative to a reference point.</p>
    <p><b>Distance</b> is the total length of the path travelled by an object. It is a scalar quantity.</p>
    <p><b>Displacement</b> is the straight-line change in position from the initial position to the final position. It is a vector quantity.</p>
    <h3>Example</h3>
    <p>If a student walks 3 m east and then 3 m west:</p>
    <p>Distance = 3 + 3 = <b>6 m</b></p>
    <p>Displacement = <b>0 m</b>, because the student returns to the starting point.</p>
  `,

  "Scalars and Vectors": `
    <p>A <b>scalar quantity</b> has magnitude only, while a <b>vector quantity</b> has both magnitude and direction.</p>
    <h3>Examples of Scalars</h3>
    <p>Mass, time, distance, speed, temperature and energy.</p>
    <h3>Examples of Vectors</h3>
    <p>Displacement, velocity, acceleration, force and weight.</p>
    <p>Direction is important when dealing with vector quantities.</p>
  `,

  "Motion": `
    <p>Motion is the change in position of an object with time relative to a reference point.</p>
    <h3>Important Formulae</h3>
    <p><b>Speed:</b> v = distance / time</p>
    <p><b>Velocity:</b> velocity = displacement / time</p>
    <p><b>Acceleration:</b> a = (v − u) / t</p>
    <p>where u is initial velocity, v is final velocity and t is time.</p>
    <h3>Worked Example</h3>
    <p>A car travels 120 m in 10 s. Find its average speed.</p>
    <p>Speed = 120 / 10 = <b>12 m/s</b>.</p>
  `,

  "Forces": `
    <p>Force is a push or pull that can change the state of motion, direction or shape of an object.</p>
    <p>The SI unit of force is the <b>newton (N)</b>.</p>
    <h3>Effects of Force</h3>
    <ul>
      <li>It can start or stop motion.</li>
      <li>It can change the speed of an object.</li>
      <li>It can change the direction of motion.</li>
      <li>It can change the shape of an object.</li>
    </ul>
    <h3>Weight</h3>
    <p>Weight is the force with which gravity attracts a body.</p>
    <p><b>W = mg</b></p>
    <p>where m is mass and g is acceleration due to gravity.</p>
  `,

  "Types of Motion": `
    <p>Motion can be classified according to the way an object moves.</p>
    <ul>
      <li><b>Translational motion:</b> movement from one position to another.</li>
      <li><b>Rotational motion:</b> movement around an axis.</li>
      <li><b>Oscillatory motion:</b> repeated movement about a fixed position.</li>
      <li><b>Random motion:</b> irregular movement with no definite path.</li>
    </ul>
    <p>Examples include a moving car, rotating wheel, swinging pendulum and randomly moving gas particles.</p>
  `,

  "Simple Machines": `
    <p>A simple machine is a device that makes work easier by changing the size or direction of a force.</p>
    <h3>Examples</h3>
    <ul>
      <li>Lever</li>
      <li>Pulley</li>
      <li>Wheel and axle</li>
      <li>Inclined plane</li>
      <li>Screw</li>
      <li>Wedge</li>
    </ul>
    <h3>Important Formulae</h3>
    <p>Mechanical Advantage (MA) = Load / Effort</p>
    <p>Velocity Ratio (VR) = Distance moved by effort / Distance moved by load</p>
    <p>Efficiency = (MA / VR) × 100%</p>
  `,

  "Light Waves I": `
    <p>Light is a form of electromagnetic radiation. It can travel through a vacuum.</p>
    <h3>Reflection</h3>
    <p>Reflection is the bouncing back of light when it strikes a surface.</p>
    <p>The law of reflection states that the angle of incidence is equal to the angle of reflection.</p>
    <p><b>i = r</b></p>
    <h3>Refraction</h3>
    <p>Refraction is the change in direction of light as it passes from one transparent medium into another because its speed changes.</p>
  `,

  "Light Waves II": `
    <p>Lenses are transparent optical devices that refract light.</p>
    <h3>Convex Lens</h3>
    <p>A convex lens is thicker at the centre and thinner at the edges. It converges parallel rays of light.</p>
    <h3>Concave Lens</h3>
    <p>A concave lens is thinner at the centre and thicker at the edges. It diverges parallel rays of light.</p>
    <p>Lenses are used in cameras, spectacles, microscopes, telescopes and projectors.</p>
  `,

  "Sound Waves": `
    <p>Sound is produced by vibrating objects and normally requires a material medium for transmission.</p>
    <h3>Characteristics of Sound</h3>
    <ul>
      <li>Frequency determines pitch.</li>
      <li>Amplitude is related to loudness.</li>
      <li>Waveform contributes to quality or timbre.</li>
    </ul>
    <p>Sound can travel through solids, liquids and gases, but it cannot travel through a vacuum.</p>
  `,

  "Human Eye": `
    <p>The human eye is an organ that detects light and allows us to see objects.</p>
    <h3>Main Parts</h3>
    <ul>
      <li>Cornea — protects the front of the eye and helps refract light.</li>
      <li>Iris — controls the size of the pupil.</li>
      <li>Pupil — opening through which light enters.</li>
      <li>Lens — focuses light on the retina.</li>
      <li>Retina — contains light-sensitive cells.</li>
      <li>Optic nerve — carries visual information to the brain.</li>
    </ul>
    <h3>Defects of Vision</h3>
    <p>Myopia is corrected with a concave lens, while hypermetropia is corrected with a convex lens.</p>
  `,

  "Application of Sound Waves": `
    <p>Sound has many practical applications.</p>
    <ul>
      <li><b>Echo:</b> reflected sound heard separately from the original sound.</li>
      <li><b>Ultrasound:</b> sound with frequency above the normal human hearing range.</li>
      <li><b>SONAR:</b> uses reflected sound waves to detect underwater objects and measure depth.</li>
      <li>Ultrasound is also used in medical scanning.</li>
    </ul>
  `,

  "Electric Charges": `
    <p>Electric charge is a property of matter responsible for electrical attraction and repulsion.</p>
    <p>There are two types of charge: positive and negative.</p>
    <p>Like charges repel while unlike charges attract.</p>
    <h3>Methods of Charging</h3>
    <ul>
      <li>Friction</li>
      <li>Conduction</li>
      <li>Induction</li>
    </ul>
    <p>The SI unit of electric charge is the <b>coulomb (C)</b>.</p>
  `,

  "Properties and Description of Fields": `
    <p>A field is a region of space in which an object experiences a force.</p>
    <h3>Examples</h3>
    <ul>
      <li>Gravitational field</li>
      <li>Electric field</li>
      <li>Magnetic field</li>
    </ul>
    <p>Field lines are used to represent the direction and relative strength of a field.</p>
  `,

  "Gravitational Field": `
    <p>A gravitational field is a region where a mass experiences gravitational force.</p>
    <p>Gravitational field strength is given by:</p>
    <p><b>g = F / m</b></p>
    <p>Near the Earth's surface, g is approximately 9.8 N/kg, often taken as 10 N/kg in simple calculations.</p>
    <p>Weight is calculated using:</p>
    <p><b>W = mg</b></p>
    <p>Mass remains constant when location changes, but weight can change because gravitational field strength can change.</p>
  `,

  "Conversion of Energy": `
    <p>Energy is the ability to do work. Energy can change from one form to another.</p>
    <p>The law of conservation of energy states that energy cannot be created or destroyed; it can only be transformed from one form to another.</p>
    <h3>Hydroelectric Power</h3>
    <p>Water stored at a height has gravitational potential energy. As it flows downward, this becomes kinetic energy, which drives turbines to produce electrical energy.</p>
  `,

  "Transmission System": `
    <p>A transmission system transfers motion or power from one part of a machine or system to another.</p>
    <h3>Examples</h3>
    <ul>
      <li>Belts and pulleys</li>
      <li>Chains and sprockets</li>
      <li>Gears</li>
      <li>Shafts</li>
    </ul>
    <p>Electrical transmission systems also transfer generated electrical energy over long distances through transmission networks.</p>
  `,

  "Uses of Machines": `
    <p>Machines are used to make work easier and more efficient.</p>
    <ul>
      <li>They can reduce the effort required.</li>
      <li>They can change the direction of force.</li>
      <li>They can increase speed or distance of movement.</li>
      <li>They can transmit power from one point to another.</li>
    </ul>
    <p>Examples include gears, pulleys, hydraulic systems and levers.</p>
  `,

  "Repair and Maintenance of Machines": `
    <p>Maintenance involves keeping machines in good working condition.</p>
    <h3>Preventive Maintenance</h3>
    <p>This is regular maintenance carried out to prevent faults before they occur.</p>
    <h3>Corrective Maintenance</h3>
    <p>This involves repairing or replacing faulty components after a problem occurs.</p>
    <h3>Examples</h3>
    <ul>
      <li>Cleaning</li>
      <li>Lubrication</li>
      <li>Inspection</li>
      <li>Tightening loose parts</li>
      <li>Replacing worn components</li>
    </ul>
    <p>Electrical equipment should be disconnected from the power supply before repair.</p>
  `,

  "Dams and Energy Production": `
    <p>Dams are structures built across rivers to store or control water.</p>
    <p>In a hydroelectric power station, water stored at a height possesses gravitational potential energy.</p>
    <p>As water flows through turbines, its energy is converted into kinetic and mechanical energy and finally into electrical energy.</p>
    <h3>Possible Effects</h3>
    <p>Dams can provide electricity, irrigation and water storage, but their construction can also affect communities, land and ecosystems.</p>
  `,

  "Rockets and Satellites": `
    <p>A rocket moves by expelling gases at high speed in the opposite direction.</p>
    <p>This demonstrates Newton's third law of motion and conservation of momentum.</p>
    <h3>Satellites</h3>
    <p>Satellites are objects placed in orbit around a planet or other body.</p>
    <p>They are used for communication, weather observation, navigation, scientific research, mapping and Earth observation.</p>
  `,

  "Niger-SAT 1": `
    <p>NigeriaSat-1 was Nigeria's first Earth observation satellite. It was launched in 2003 as part of the Disaster Monitoring Constellation.</p>
    <p>It was designed to provide Earth observation information for applications such as environmental monitoring, mapping, agriculture and disaster management.</p>
    <p>Its development also contributed to Nigerian capacity in satellite technology and space science.</p>
  `,

  "NICOM-SAT 1": `
    <p>The topic refers to Nigeria's satellite communication programme, commonly associated with NigComSat-1.</p>
    <p>Communication satellites support the transmission of information over large distances through communication links between ground stations and satellites.</p>
    <h3>Important Components</h3>
    <ul>
      <li>Satellite spacecraft</li>
      <li>Ground stations</li>
      <li>Communication links</li>
      <li>Trained technical personnel</li>
    </ul>
  `
};

const quizData = {
  "Introduction to Physics": [
    ["Physics mainly studies:", ["Matter, energy and interactions", "Only plants", "Only animals", "Only weather"], 0],
    ["Which is an area of Physics?", ["Mechanics", "Botany", "Zoology", "Literature"], 0],
    ["Physics is useful in:", ["Engineering and medicine", "Only farming", "Only music", "None"], 0]
  ],
  "Fundamental and Derived Quantities": [
    ["The SI unit of length is:", ["metre", "kilogram", "second", "ampere"], 0],
    ["Which is a derived quantity?", ["Force", "Mass", "Time", "Temperature"], 0],
    ["The SI unit of force is:", ["newton", "metre", "kilogram", "joule"], 0]
  ],
  "Measurement of Length, Mass and Time": [
    ["Which instrument can measure small lengths accurately?", ["Vernier caliper", "Clock", "Thermometer", "Ammeter"], 0],
    ["Mass is commonly measured using a:", ["Balance", "Stopwatch", "Metre rule", "Thermometer"], 0],
    ["Parallax error is caused mainly by:", ["Incorrect viewing angle", "High temperature", "Heavy objects", "Low battery"], 0]
  ],
  "Position, Distance and Displacement": [
    ["Distance is a:", ["Scalar", "Vector", "Tensor", "Field"], 0],
    ["Displacement has:", ["Magnitude and direction", "Magnitude only", "Direction only", "No magnitude"], 0],
    ["A person walks 3 m east and 3 m west. The displacement is:", ["0 m", "3 m", "6 m", "9 m"], 0]
  ],
  "Scalars and Vectors": [
    ["A scalar has:", ["Magnitude only", "Direction only", "Magnitude and direction", "Neither"], 0],
    ["Which is a vector?", ["Velocity", "Mass", "Time", "Distance"], 0],
    ["Which is a scalar?", ["Speed", "Force", "Displacement", "Acceleration"], 0]
  ],
  "Motion": [
    ["The formula for speed is:", ["distance/time", "time/distance", "mass/volume", "force/mass"], 0],
    ["Acceleration is:", ["(v-u)/t", "d/t", "m/V", "F/t"], 0],
    ["A car travels 120 m in 10 s. Its speed is:", ["12 m/s", "1200 m/s", "1.2 m/s", "10 m/s"], 0]
  ],
  "Forces": [
    ["Force is a:", ["Push or pull", "Temperature", "Mass", "Distance"], 0],
    ["The SI unit of force is:", ["Newton", "Metre", "Kilogram", "Second"], 0],
    ["Weight is calculated using:", ["W = mg", "W = m/g", "W = g/m", "W = mv"], 0]
  ],
  "Types of Motion": [
    ["Motion around an axis is:", ["Rotational", "Random", "Oscillatory", "Static"], 0],
    ["A swinging pendulum demonstrates:", ["Oscillatory motion", "Random motion", "Rotational motion only", "No motion"], 0],
    ["Irregular movement is called:", ["Random motion", "Rotational motion", "Uniform motion", "Rest"], 0]
  ],
  "Simple Machines": [
    ["Which is a simple machine?", ["Lever", "Battery", "Thermometer", "Ammeter"], 0],
    ["Mechanical advantage is:", ["Load/Effort", "Effort/Load", "Distance/Time", "Mass/Volume"], 0],
    ["Efficiency is calculated as:", ["MA/VR × 100%", "VR/MA × 100%", "MA+VR", "MA−VR"], 0]
  ],
  "Light Waves I": [
    ["The law of reflection states:", ["i = r", "i > r", "i < r", "i = 0"], 0],
    ["Reflection is the:", ["Bouncing back of light", "Bending of sound", "Production of heat", "Absorption of mass"], 0],
    ["Refraction occurs mainly because light changes:", ["Speed between media", "Mass", "Charge", "Temperature only"], 0]
  ],
  "Light Waves II": [
    ["A convex lens:", ["Converges light", "Always blocks light", "Diverges light", "Produces sound"], 0],
    ["A concave lens:", ["Diverges light", "Converges light", "Produces electricity", "Stops reflection"], 0],
    ["Lenses are used in:", ["Cameras", "Only batteries", "Only engines", "Only switches"], 0]
  ],
  "Sound Waves": [
    ["Sound is produced by:", ["Vibrations", "Still objects", "Light", "Electric charge only"], 0],
    ["Frequency mainly determines:", ["Pitch", "Mass", "Weight", "Distance"], 0],
    ["Sound requires a medium because it is:", ["A mechanical wave", "A vacuum", "An electric charge", "A magnetic field"], 0]
  ],
  "Human Eye": [
    ["The light-sensitive layer of the eye is the:", ["Retina", "Iris", "Cornea", "Pupil"], 0],
    ["The iris controls the:", ["Size of the pupil", "Shape of the retina", "Optic nerve", "Colour of blood"], 0],
    ["Myopia is corrected using a:", ["Concave lens", "Convex lens", "Plane mirror", "Prism only"], 0]
  ],
  "Application of Sound Waves": [
    ["SONAR uses:", ["Reflected sound", "Visible light only", "Heat", "Electric charge only"], 0],
    ["An echo is:", ["Reflected sound heard separately", "Direct light", "Electric current", "Heat radiation"], 0],
    ["Ultrasound has a frequency:", ["Above normal human hearing range", "Below zero", "Equal to zero", "Always below 20 Hz"], 0]
  ],
  "Electric Charges": [
    ["Like electric charges:", ["Repel", "Attract", "Disappear", "Become neutral always"], 0],
    ["A method of charging is:", ["Friction", "Cooling", "Boiling", "Freezing"], 0],
    ["The SI unit of charge is:", ["Coulomb", "Newton", "Metre", "Watt"], 0]
  ],
  "Properties and Description of Fields": [
    ["A field is a region where an object experiences:", ["A force", "Only heat", "Only light", "No interaction"], 0],
    ["Which is a type of field?", ["Gravitational", "Literary", "Musical", "Chemical only"], 0],
    ["Field lines can show the:", ["Direction of a field", "Mass of an object only", "Temperature only", "Time only"], 0]
  ],
  "Gravitational Field": [
    ["Gravitational field strength is:", ["F/m", "m/F", "F×m", "F+m"], 0],
    ["Near Earth's surface, g is approximately:", ["9.8 N/kg", "98 kg", "0 N/kg", "1000 N/kg"], 0],
    ["Weight is:", ["mg", "m/g", "g/m", "mv"], 0]
  ],
  "Conversion of Energy": [
    ["Energy can be:", ["Converted from one form to another", "Destroyed completely", "Created from nothing", "Lost from the universe"], 0],
    ["Water stored at a height has:", ["Gravitational potential energy", "Only sound energy", "Only light energy", "No energy"], 0],
    ["Hydroelectric power ultimately produces:", ["Electrical energy", "Only heat", "Only sound", "Only chemical energy"], 0]
  ],
  "Transmission System": [
    ["Which can transmit mechanical power?", ["Gears", "Thermometer", "Compass", "Glass"], 0],
    ["A belt commonly works with a:", ["Pulley", "Battery", "Lens", "Switch"], 0],
    ["Transmission systems transfer:", ["Motion or power", "Only temperature", "Only light", "Only sound"], 0]
  ],
  "Uses of Machines": [
    ["Machines can:", ["Make work easier", "Remove all energy", "Create matter", "Stop gravity"], 0],
    ["A pulley can change the:", ["Direction of force", "Mass of Earth", "Temperature of water", "Colour of an object"], 0],
    ["Gears are used to:", ["Transmit motion and power", "Measure temperature", "Measure mass", "Produce light only"], 0]
  ],
  "Repair and Maintenance of Machines": [
    ["Preventive maintenance is done to:", ["Prevent faults", "Cause faults", "Destroy machines", "Increase rust"], 0],
    ["Which is maintenance activity?", ["Lubrication", "Breaking parts", "Removing safety guards", "Ignoring faults"], 0],
    ["Before electrical repair, power should be:", ["Disconnected", "Increased", "Ignored", "Short-circuited"], 0]
  ],
  "Dams and Energy Production": [
    ["Water stored behind a dam has:", ["Gravitational potential energy", "Only sound energy", "No energy", "Only chemical energy"], 0],
    ["A turbine converts water energy into:", ["Mechanical energy", "Mass", "Temperature only", "Charge only"], 0],
    ["Hydroelectric stations produce:", ["Electrical energy", "Only sound", "Only light", "Only chemical energy"], 0]
  ],
  "Rockets and Satellites": [
    ["A rocket moves by:", ["Expelling gas in the opposite direction", "Pulling itself with a rope", "Using no force", "Stopping gravity"], 0],
    ["Rocket propulsion demonstrates Newton's:", ["Third law", "First law only", "Law of reflection", "Law of refraction"], 0],
    ["Satellites can be used for:", ["Communication", "Only cooking", "Only farming manually", "Only printing"], 0]
  ],
  "Niger-SAT 1": [
    ["NigeriaSat-1 was mainly an:", ["Earth observation satellite", "Underwater vehicle", "Aircraft", "Submarine"], 0],
    ["NigeriaSat-1 was launched in:", ["2003", "1990", "2015", "2020"], 0],
    ["One application was:", ["Environmental monitoring", "Cooking", "Road construction by hand", "Sports training"], 0]
  ],
  "NICOM-SAT 1": [
    ["Communication satellites help transmit:", ["Information", "Only water", "Only food", "Only soil"], 0],
    ["A satellite communication system includes:", ["Ground stations", "Only books", "Only roads", "Only engines"], 0],
    ["NigComSat-1 was associated with:", ["Satellite communication", "Crop harvesting", "Road transport", "Mining only"], 0]
  ]
};

let state = {
  profile: null,
  done: {},
  scores: {},
  streak: 0,
  lastStudy: null
};

function loadState() {
  try {
    const saved = localStorage.getItem("mrJoshuaPhysics");
    if (saved) state = { ...state, ...JSON.parse(saved) };
  } catch (e) {
    console.log("Could not load saved data.");
  }
}

function saveState() {
  try {
    localStorage.setItem("mrJoshuaPhysics", JSON.stringify(state));
  } catch (e) {
    alert("Your progress could not be saved. Your browser storage may be full.");
  }
}

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function firstName(name) {
  return String(name || "").trim().split(/\s+/)[0] || "Student";
}

function topicKey(cls, index) {
  return `${cls}-${index}`;
}

function completedCount(cls) {
  return scheme[cls].filter((_, i) => state.done[topicKey(cls, i)]).length;
}

function totalCompleted() {
  return Object.values(state.done).filter(Boolean).length;
}

function bestScore() {
  const scores = Object.values(state.scores);
  return scores.length ? Math.max(...scores) : 0;
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);

  if (!state.lastStudy) {
    state.streak = 1;
    state.lastStudy = today;
    saveState();
    return;
  }

  if (state.lastStudy === today) return;

  const oldDate = new Date(state.lastStudy);
  const newDate = new Date(today);
  const difference = Math.round((newDate - oldDate) / 86400000);

  if (difference === 1) {
    state.streak = (state.streak || 0) + 1;
  } else {
    state.streak = 1;
  }

  state.lastStudy = today;
  saveState();
}

function app() {
  loadState();

  if (!state.profile) {
    renderWelcome();
  } else {
    updateStreak();
    renderDashboard();
  }
}

function renderWelcome() {
  const root = document.getElementById("app");

  root.innerHTML = `
    <main class="welcome">
      <div class="hero">
        <div class="badge">⚛️ PHYSICS LEARNING HUB</div>
        <h1>STUDY PHYSICS<br>WITH MR. JOSHUA</h1>
        <p>Learn it. Understand it. Solve it. Master it.</p>
      </div>

      <section class="page narrow">
        <div class="welcome-card">
          <h2>Create Student Profile</h2>
          <p class="muted">Your profile and progress stay on this device.</p>

          <form class="profile-form" onsubmit="createProfile(event)">
            <label>Full Name</label>
            <input id="profileName" type="text" placeholder="Enter your full name" required>

            <label>Profile Photo <span class="muted">(optional)</span></label>
            <div class="avatar-preview" id="avatarPreview">👤</div>

            <label class="upload">
              📷 Choose Photo
              <input id="profilePhoto" type="file" accept="image/*" hidden onchange="previewPhoto(event)">
            </label>

            <button class="primary full" type="submit">Create My Profile 🚀</button>
          </form>
        </div>
      </section>
    </main>
  `;
}

function previewPhoto(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {
    document.getElementById("avatarPreview").innerHTML =
      `<img src="${reader.result}" alt="Profile photo">`;
  };

  reader.readAsDataURL(file);
}

function compressImage(file, callback) {
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();

    img.onload = function () {
      const max = 500;
      const scale = Math.min(1, max / Math.max(img.width, img.height));

      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      callback(canvas.toDataURL("image/jpeg", 0.75));
    };

    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
}

function createProfile(event) {
  event.preventDefault();

  const name = document.getElementById("profileName").value.trim();
  const photo = document.getElementById("profilePhoto").files?.[0];

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  state.profile = {
    name: name,
    photo: null
  };

  if (photo) {
    compressImage(photo, function (data) {
      state.profile.photo = data;
      saveState();
      updateStreak();
      renderDashboard();
    });
  } else {
    saveState();
    updateStreak();
    renderDashboard();
  }
}

function avatarHTML(size = "") {
  if (state.profile?.photo) {
    return `<img class="avatar ${size}" src="${state.profile.photo}" alt="Profile photo">`;
  }

  return `<div class="avatar ${size}">👤</div>`;
}

function renderDashboard() {
  const root = document.getElementById("app");
  const completed = totalCompleted();

  root.innerHTML = `
    <main class="page">
      <header class="topbar">
        <div class="user">
          ${avatarHTML()}
          <div>
            <div class="muted small">Welcome back</div>
            <strong>Hi, ${esc(firstName(state.profile.name))}! 👋</strong>
          </div>
        </div>

        <button class="icon-btn" onclick="showMenu()">☰</button>
      </header>

      <section class="hero">
        <div class="atom">⚛️</div>
        <div class="eyebrow">YOUR PHYSICS JOURNEY</div>
        <h1>Learn it. Understand it. Solve it.</h1>
        <p>Build your Physics knowledge one topic at a time.</p>
      </section>

      <section class="stats">
        <div class="stat">
          <strong>${completed}</strong>
          <span>Topics Done</span>
        </div>
        <div class="stat">
          <strong>${bestScore()}%</strong>
          <span>Best Quiz</span>
        </div>
        <div class="stat">
          <strong>${state.streak || 0}</strong>
          <span>Day Streak</span>
        </div>
      </section>

      <div class="section-head">
        <h2>Choose Your Class</h2>
      </div>

      <section class="class-grid">
        ${["SS1", "SS2", "SS3"].map(cls => `
          <button class="class-card" onclick="showClass('${cls}')">
            <span class="class-label">${cls}</span>
            <strong>Physics</strong>
            <span>${completedCount(cls)}/${scheme[cls].length} topics completed</span>
            <span class="arrow">→</span>
          </button>
        `).join("")}
      </section>

      <div class="section-head">
        <h2>Study Tools</h2>
      </div>

      <section class="tools-grid">
        <button class="menu-card" onclick="showCalculator()">🧮<span>Physics Calculator</span></button>
        <button class="menu-card" onclick="showFlashcards()">🃏<span>Flashcards</span></button>
        <button class="menu-card" onclick="exportProgress()">💾<span>Export Progress</span></button>
        <label class="menu-card restore-btn">
          ♻️<span>Restore Progress</span>
          <input type="file" accept="application/json" hidden onchange="restoreProgress(event)">
        </label>
      </section>
    </main>
  `;
}

function showMenu() {
  const root = document.getElementById("app");

  root.innerHTML = `
    <main class="page narrow">
      <button class="back" onclick="renderDashboard()">← Back</button>

      <section class="welcome-card">
        <div class="user">
          ${avatarHTML()}
          <div>
            <strong>${esc(state.profile.name)}</strong>
            <div class="muted">Student Profile</div>
          </div>
        </div>

        <hr>

        <button class="menu-card full" onclick="showProfileEdit()">✏️ Edit Profile</button>
        <button class="menu-card full" onclick="renderDashboard()">🏠 Dashboard</button>
        <button class="menu-card full danger" onclick="resetProfile()">🗑️ Reset Profile</button>
      </section>
    </main>
  `;
}

function showProfileEdit() {
  const root = document.getElementById("app");

  root.innerHTML = `
    <main class="page narrow">
      <button class="back" onclick="showMenu()">← Back</button>

      <section class="welcome-card">
        <h2>Edit Profile</h2>

        <form class="profile-form" onsubmit="saveProfileEdit(event)">
          <label>Full Name</label>
          <input id="editName" value="${esc(state.profile.name)}" required>

          <label>Change Photo</label>
          <div class="avatar-preview">
            ${state.profile.photo
              ? `<img src="${state.profile.photo}" alt="Profile photo">`
              : "👤"}
          </div>

          <input id="editPhoto" type="file" accept="image/*">

          <button class="primary full" type="submit">Save Changes</button>
        </form>
      </section>
    </main>
  `;
}

function saveProfileEdit(event) {
  event.preventDefault();

  const name = document.getElementById("editName").value.trim();
  const photo = document.getElementById("editPhoto").files?.[0];

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  state.profile.name = name;

  if (photo) {
    compressImage(photo, function (data) {
      state.profile.photo = data;
      saveState();
      renderDashboard();
    });
  } else {
    saveState();
    renderDashboard();
  }
}

function showClass(cls) {
  const root = document.getElementById("app");
  const done = completedCount(cls);
  const total = scheme[cls].length;
  const percentage = Math.round((done / total) * 100);

  root.innerHTML = `
    <main class="page">
      <button class="back" onclick="renderDashboard()">← Dashboard</button>

      <header class="class-title">
        <div>
          <div class="eyebrow">${cls}</div>
          <h1>Physics</h1>
        </div>
        <strong>${percentage}%</strong>
      </header>

      <div class="progress-bar">
        <span style="width:${percentage}%"></span>
      </div>

      <section class="topic-list">
        ${scheme[cls].map((topic, i) => {
          const isDone = !!state.done[topicKey(cls, i)];

          return `
            <button class="topic-item ${isDone ? "done" : ""}"
              onclick="showTopic('${cls}', ${i})">
              <span class="topic-number">${i + 1}</span>
              <span class="topic-text">${esc(topic)}</span>
              <span class="topic-status">${isDone ? "✓" : "→"}</span>
            </button>
          `;
        }).join("")}
      </section>
    </main>
  `;
}

function showTopic(cls, index) {
  updateStreak();

  const topic = scheme[cls][index];
  const key = topicKey(cls, index);
  const isDone = !!state.done[key];

  const root = document.getElementById("app");

  root.innerHTML = `
    <main class="page">
      <button class="back" onclick="showClass('${cls}')">← ${cls} Topics</button>

      <header class="topic-header">
        <div class="eyebrow">${cls} • TOPIC ${index + 1}</div>
        <h1>${esc(topic)}</h1>
      </header>

      <section class="lesson-card">
        <h2>📚 Lesson</h2>
        ${lessons[topic] || "<p>Lesson content coming soon.</p>"}
      </section>

      <section class="revision-card">
        <h2>⚡ Quick Revision</h2>
        <p>Read the lesson carefully, identify the key definitions and formulae, then test yourself with the quiz.</p>
      </section>

      <section class="topic-actions">
        <button class="primary full" onclick="showQuiz('${cls}', ${index})">
          📝 Take Quiz
        </button>

        <button class="menu-card full" onclick="markComplete('${cls}', ${index})">
          ${isDone ? "✓ Topic Completed" : "☑ Mark Topic Complete"}
        </button>
      </section>
    </main>
  `;
}

function markComplete(cls, index) {
  state.done[topicKey(cls, index)] = true;
  updateStreak();
  saveState();
  showTopic(cls, index);
}

function showQuiz(cls, index) {
  updateStreak();

  const topic = scheme[cls][index];
  const questions = quizData[topic] || [];

  const root = document.getElementById("app");

  if (!questions.length) {
    root.innerHTML = `
      <main class="page narrow">
        <button class="back" onclick="showTopic('${cls}', ${index})">← Lesson</button>
        <section class="welcome-card">
          <h2>Quiz Coming Soon</h2>
          <p>This topic does not have quiz questions yet.</p>
        </section>
      </main>
    `;
    return;
  }

  root.innerHTML = `
    <main class="page">
      <button class="back" onclick="showTopic('${cls}', ${index})">← Lesson</button>

      <header class="quiz-header">
        <div class="eyebrow">QUIZ</div>
        <h1>${esc(topic)}</h1>
        <p>${questions.length} questions</p>
      </header>

      <form onsubmit="submitQuiz(event, '${cls}', ${index})">
        ${questions.map((q, qi) => `
          <section class="question-card">
            <div class="question-number">Question ${qi + 1}</div>
            <h3>${esc(q[0])}</h3>

            <div class="options">
              ${q[1].map((option, oi) => `
                <label class="option">
                  <input type="radio" name="q${qi}" value="${oi}" required>
                  <span>${esc(option)}</span>
                </label>
              `).join("")}
            </div>
          </section>
        `).join("")}

        <button class="primary full" type="submit">Submit Quiz 🚀</button>
      </form>
    </main>
  `;
}

function submitQuiz(event, cls, index) {
  event.preventDefault();

  const topic = scheme[cls][index];
  const questions = quizData[topic] || [];
  let score = 0;

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && Number(selected.value) === q[2]) {
      score++;
    }
  });

  const percentage = Math.round((score / questions.length) * 100);
  const key = topicKey(cls, index);

  if (!state.scores[key] || percentage > state.scores[key]) {
    state.scores[key] = percentage;
  }

  if (percentage >= 70) {
    state.done[key] = true;
  }

  updateStreak();
  saveState();

  const message =
    percentage >= 70
      ? "Excellent work! You have mastered this quiz. 🎉"
      : percentage >= 50
      ? "Good effort! Review the lesson and try again."
      : "Keep studying. Review the lesson and try the quiz again.";

  document.getElementById("app").innerHTML = `
    <main class="page narrow">
      <section class="result-card">
        <div class="result-icon">${percentage >= 70 ? "🎉" : "📚"}</div>
        <div class="eyebrow">QUIZ RESULT</div>
        <h1>${percentage}%</h1>
        <p>${score} out of ${questions.length} correct.</p>
        <p>${message}</p>

        <button class="primary full" onclick="showTopic('${cls}', ${index})">
          Back to Lesson
        </button>

        <button class="menu-card full" onclick="showQuiz('${cls}', ${index})">
          Try Again
        </button>
      </section>
    </main>
  `;
}

const flashcards = [
  ["Speed", "Distance travelled per unit time. v = d/t"],
  ["Velocity", "Displacement per unit time."],
  ["Acceleration", "Rate of change of velocity. a = (v-u)/t"],
  ["Force", "A push or pull that can change motion or shape."],
  ["Weight", "The force of gravity acting on a body. W = mg"],
  ["Density", "Mass per unit volume. ρ = m/V"],
  ["Reflection", "The bouncing back of light from a surface."],
  ["Refraction", "The change in direction of light when it passes between media."],
  ["Frequency", "Number of complete vibrations or cycles per second."],
  ["Electric Charge", "A property of matter responsible for electrical attraction and repulsion."]
];

let flashIndex = 0;

function showFlashcards() {
  flashIndex = 0;
  renderFlashcard();
}

function renderFlashcard() {
  const root = document.getElementById("app");
  const card = flashcards[flashIndex];

  root.innerHTML = `
    <main class="page narrow">
      <button class="back" onclick="renderDashboard()">← Dashboard</button>

      <header class="topic-header">
        <div class="eyebrow">FLASHCARDS</div>
        <h1>Quick Physics Revision</h1>
        <p>${flashIndex + 1} of ${flashcards.length}</p>
      </header>

      <section class="flashcard" onclick="toggleFlashAnswer()">
        <div class="flash-label">QUESTION</div>
        <h2>${esc(card[0])}</h2>
        <p class="muted">Tap the card to reveal the answer.</p>

        <div id="flashAnswer" class="hidden-answer">
          ${esc(card[1])}
        </div>
      </section>

      <div class="flash-actions">
        <button class="menu-card" onclick="previousFlashcard()">← Previous</button>
        <button class="primary" onclick="nextFlashcard()">Next →</button>
      </div>
    </main>
  `;
}

function toggleFlashAnswer() {
  const answer = document.getElementById("flashAnswer");
  if (answer) answer.classList.toggle("show");
}

function nextFlashcard() {
  flashIndex = (flashIndex + 1) % flashcards.length;
  renderFlashcard();
}

function previousFlashcard() {
  flashIndex = (flashIndex - 1 + flashcards.length) % flashcards.length;
  renderFlashcard();
}

function showCalculator() {
  const root = document.getElementById("app");

  root.innerHTML = `
    <main class="page narrow">
      <button class="back" onclick="renderDashboard()">← Dashboard</button>

      <header class="topic-header">
        <div class="eyebrow">PHYSICS TOOL</div>
        <h1>Physics Calculator</h1>
        <p>Choose a formula and enter the required values.</p>
      </header>

      <section class="calculator-card">
        <label>Formula</label>
        <select id="formula" onchange="updateCalculator()">
          <option value="speed">v = d / t</option>
          <option value="force">F = ma</option>
          <option value="density">ρ = m / V</option>
          <option value="power">P = W / t</option>
          <option value="ohm">V = IR</option>
          <option value="ke">KE = ½mv²</option>
        </select>

        <div id="calculatorInputs"></div>

        <button class="primary full" onclick="calculatePhysics()">Calculate</button>

        <div id="calculationResult"></div>
      </section>
    </main>
  `;

  updateCalculator();
}

function updateCalculator() {
  const formula = document.getElementById("formula")?.value;
  const box = document.getElementById("calculatorInputs");

  if (!box) return;

  const inputs = {
    speed: [
      ["distance", "Distance (m)"],
      ["time", "Time (s)"]
    ],
    force: [
      ["mass", "Mass (kg)"],
      ["acceleration", "Acceleration (m/s²)"]
    ],
    density: [
      ["mass", "Mass (kg)"],
      ["volume", "Volume (m³)"]
    ],
    power: [
      ["work", "Work/Energy (J)"],
      ["time", "Time (s)"]
    ],
    ohm: [
      ["current", "Current (A)"],
      ["resistance", "Resistance (Ω)"]
    ],
    ke: [
      ["mass", "Mass (kg)"],
      ["velocity", "Velocity (m/s)"]
    ]
  };

  box.innerHTML = (inputs[formula] || []).map(item => `
    <label>
      ${item[1]}
      <input id="calc_${item[0]}" type="number" step="any" inputmode="decimal" placeholder="Enter value">
    </label>
  `).join("");
}

function getNumber(id) {
  return Number(document.getElementById(id)?.value);
}

function calculatePhysics() {
  const formula = document.getElementById("formula").value;
  let result;
  let unit;
  let expression;

  if (formula === "speed") {
    const d = getNumber("calc_distance");
    const t = getNumber("calc_time");

    if (!t) return showCalcError();
    result = d / t;
    unit = "m/s";
    expression = `${d} ÷ ${t}`;
  }

  if (formula === "force") {
    const m = getNumber("calc_mass");
    const a = getNumber("calc_acceleration");

    result = m * a;
    unit = "N";
    expression = `${m} × ${a}`;
  }

  if (formula === "density") {
    const m = getNumber("calc_mass");
    const v = getNumber("calc_volume");

    if (!v) return showCalcError();
    result = m / v;
    unit = "kg/m³";
    expression = `${m} ÷ ${v}`;
  }

  if (formula === "power") {
    const w = getNumber("calc_work");
    const t = getNumber("calc_time");

    if (!t) return showCalcError();
    result = w / t;
    unit = "W";
    expression = `${w} ÷ ${t}`;
  }

  if (formula === "ohm") {
    const i = getNumber("calc_current");
    const r = getNumber("calc_resistance");

    result = i * r;
    unit = "V";
    expression = `${i} × ${r}`;
  }

  if (formula === "ke") {
    const m = getNumber("calc_mass");
    const v = getNumber("calc_velocity");

    result = 0.5 * m * v * v;
    unit = "J";
    expression = `½ × ${m} × ${v}²`;
  }

  if (!Number.isFinite(result)) {
    showCalcError();
    return;
  }

  document.getElementById("calculationResult").innerHTML = `
    <div class="calculation-result">
      <div class="muted">Calculation</div>
      <strong>${esc(expression)}</strong>
      <h2>${Number(result.toFixed(4))} ${unit}</h2>
    </div>
  `;
}

function showCalcError() {
  document.getElementById("calculationResult").innerHTML = `
    <div class="calculation-result">
      Please enter valid values. Make sure you do not divide by zero.
    </div>
  `;
}

function exportProgress() {
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "mr-joshua-physics-progress.json";
  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}

function restoreProgress(event) {
  const file = event.target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {
    try {
      const restored = JSON.parse(reader.result);

      if (!restored.profile) {
        throw new Error("Invalid file");
      }

      state = {
        profile: restored.profile || null,
        done: restored.done || {},
        scores: restored.scores || {},
        streak: restored.streak || 0,
        lastStudy: restored.lastStudy || null
      };

      saveState();
      alert("Progress restored successfully! 🎉");
      app();
    } catch (error) {
      alert("That file is not a valid Physics progress backup.");
    }
  };

  reader.readAsText(file);
}

function resetProfile() {
  const confirmed = confirm(
    "This will delete your profile and all saved Physics progress from this device. Continue?"
  );

  if (!confirmed) return;

  localStorage.removeItem("mrJoshuaPhysics");

  state = {
    profile: null,
    done: {},
    scores: {},
    streak: 0,
    lastStudy: null
  };

  renderWelcome();
}

document.addEventListener("DOMContentLoaded", app);

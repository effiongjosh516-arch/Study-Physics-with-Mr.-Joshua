const KEY='spmj_v1';
const scheme={
SS1:['Introduction to Physics','Fundamental and Derived Quantities','Measurement of Length, Mass and Time','Position, Distance and Displacement','Scalars and Vectors','Motion','Forces','Types of Motion','Simple Machines'],
SS2:['Light Waves I','Light Waves II','Sound Waves','Human Eye','Application of Sound Waves','Electric Charges','Properties and Description of Fields','Gravitational Field'],
SS3:['Conversion of Energy','Transmission System','Uses of Machines','Repair and Maintenance of Machines','Dams and Energy Production','Rockets and Satellites','Niger-SAT 1','NICOM-SAT 1']
};

const lessons={
'Introduction to Physics':'Physics is the branch of science that studies matter, energy, motion and interactions between them. It is applied in engineering, medicine, communication, transport, construction, power generation and agriculture. Major areas include mechanics, heat, waves, electricity and magnetism, optics and modern Physics.',
'Fundamental and Derived Quantities':'SI base quantities include length (m), mass (kg), time (s), electric current (A), temperature (K), amount of substance (mol) and luminous intensity (cd). Derived quantities are obtained from base quantities; examples include area (m²), volume (m³), speed (m/s), acceleration (m/s²), force (N) and density (kg/m³).',
'Measurement of Length, Mass and Time':'Length may be measured with a metre rule, measuring tape, vernier caliper or micrometer screw gauge. Mass is measured with a balance and time with a clock or stopwatch. Avoid parallax and zero errors, read scales correctly and record appropriate precision.',
'Position, Distance and Displacement':'Position describes where an object is relative to a reference point. Distance is the total path travelled and is scalar. Displacement is the straight-line change from initial to final position with direction and is vector. Example: 3 m east then 3 m west gives 6 m distance but 0 m displacement.',
'Scalars and Vectors':'A scalar has magnitude only, such as mass, time, temperature, distance, speed and energy. A vector has magnitude and direction, such as displacement, velocity, acceleration, force and weight. Vector addition must consider direction.',
'Motion':'Motion occurs when position changes with time relative to a reference point. Speed is distance per unit time: v=d/t. Velocity is displacement per unit time. Acceleration is change of velocity per unit time: a=(v-u)/t. Example: 120 m in 10 s gives 12 m/s.',
'Forces':'A force is a push or pull that can change motion, direction or shape. Force can start or stop motion, change speed or direction, or deform an object. Weight is gravitational force: W=mg. Force and weight are measured in newtons (N).',
'Types of Motion':'Translational motion moves an object from one place to another. Rotational motion is turning about an axis. Oscillatory motion is repeated to-and-fro motion about a mean position. Random motion has irregular direction.',
'Simple Machines':'Simple machines include levers, pulleys, wheel and axle, inclined plane, screw and wedge. Mechanical advantage MA=load/effort. Velocity ratio VR=distance moved by effort/distance moved by load. Efficiency=(MA/VR)×100%.',

'Light Waves I':'Light is electromagnetic radiation and can travel through a vacuum. Reflection is the return of light into the same medium; angle of incidence equals angle of reflection. Refraction is a change in direction when light passes between media because its speed changes.',
'Light Waves II':'A convex lens converges parallel rays while a concave lens diverges them. Image nature depends on object position relative to the focal point and optical centre. Lenses are used in cameras, spectacles, microscopes, projectors and telescopes.',
'Sound Waves':'Sound is produced by vibrating sources and normally travels through a material medium. Frequency is related to pitch; amplitude is related to loudness; waveform affects timbre. Sound is used in communication, music, medical imaging and industrial testing.',
'Human Eye':'Important parts include cornea, iris, pupil, lens, retina and optic nerve. Accommodation is the change in lens shape that allows near and distant objects to focus on the retina. Myopia is commonly corrected with a concave lens; hypermetropia with a convex lens.',
'Application of Sound Waves':'An echo is reflected sound heard separately from the original when the time gap is sufficient. Ultrasound has a frequency above the normal human hearing range and is used in medical scanning and testing. SONAR uses reflected sound pulses to locate underwater objects or measure depth.',
'Electric Charges':'Objects can become charged by friction, conduction or induction. Conductors allow charges to move relatively easily while insulators resist movement. Like charges repel and unlike charges attract. Charge is measured in coulombs (C).',
'Properties and Description of Fields':'A field is a region of space in which an object experiences a force due to a source. Field lines are imaginary representations showing field direction and relative strength. Examples include gravitational, electric and magnetic fields.',
'Gravitational Field':'A gravitational field is a region where a mass experiences gravitational force. Field strength g=F/m. Near Earth, g≈9.8 N/kg, often taken as 10 N/kg for simple calculations. Weight W=mg; mass stays the same while weight can change with gravitational field strength.',

'Conversion of Energy':'Energy occurs as kinetic, potential, thermal, electrical, chemical, light and sound energy. Energy can be transformed from one form to another and is conserved in a closed system. A hydroelectric station converts stored water potential energy through mechanical stages into electrical energy.',
'Transmission System':'A transmission system transfers power or energy from a source to where it is needed. Belts, chains, gears, shafts and pulleys transmit rotational motion and power. Electrical power is transmitted through networks from generating stations to consumers.',
'Uses of Machines':'Machines can reduce effort, change force direction, increase speed or transmit motion and power. Examples include gears in vehicles, pulleys for lifting and hydraulic systems for force transmission. Machines should be used safely and according to instructions.',
'Repair and Maintenance of Machines':'Maintenance keeps machines safe, efficient and reliable and may be preventive or corrective. Cleaning, lubrication, inspection, tightening and replacement of worn parts help prevent breakdowns. Before electrical repair, isolate the power supply and use correct tools and safety procedures.',
'Dams and Energy Production':'A dam stores water at height. Its gravitational potential energy becomes kinetic energy, then mechanical and electrical energy. Hydroelectric systems can generate large amounts of electricity without burning fuel during generation, but dams can affect communities and ecosystems.',
'Rockets and Satellites':'Rockets move by expelling gases at high speed in the opposite direction. This is explained by Newton’s third law and conservation of momentum. Satellites are objects placed in orbit for communication, weather observation, navigation, research and Earth observation.',
'Niger-SAT 1':'NigeriaSat-1 was Nigeria’s first Earth-observation satellite and was launched in 2003 as part of the Disaster Monitoring Constellation. Earth-observation satellites collect information about the Earth for uses such as environmental monitoring, mapping, agriculture and disaster management.',
'NICOM-SAT 1':'NigeriaSat-1 and later Nigerian space
  const quizData={
'Introduction to Physics':[
['Physics mainly studies:', ['matter, energy and their interactions','only living things','only plants','only history'],0],
['Which is an area of Physics?', ['Mechanics','Literature','Grammar','Civics'],0],
['Physics is useful in:', ['engineering and medicine','only farming','only cooking','none'],0]
],
'Fundamental and Derived Quantities':[
['Which is an SI base quantity?', ['Length','Speed','Force','Density'],0],
['The SI unit of mass is:', ['kilogram','newton','metre','joule'],0],
['The unit m/s represents:', ['speed or velocity','mass','force','density'],0]
],
'Measurement of Length, Mass and Time':[
['Which instrument can measure very small thickness accurately?', ['Micrometer screw gauge','Metre rule','Clock','Balance'],0],
['Mass is commonly measured using a:', ['balance','stopwatch','thermometer','ruler'],0],
['Parallax error is mainly caused by:', ['wrong eye position','heavy objects','high temperature','low mass'],0]
],
'Position, Distance and Displacement':[
['Distance is a:', ['scalar','vector','force','field'],0],
['Displacement has:', ['magnitude and direction','magnitude only','direction only','no magnitude'],0],
['If an object returns to its starting point, its displacement is:', ['zero','maximum','negative always','equal to distance'],0]
],
'Scalars and Vectors':[
['Which is a vector quantity?', ['Velocity','Mass','Time','Temperature'],0],
['Which is a scalar?', ['Speed','Force','Displacement','Acceleration'],0],
['A vector must have:', ['magnitude and direction','magnitude only','direction only','unit only'],0]
],
'Motion':[
['Speed is calculated as:', ['distance/time','time/distance','force/mass','mass/volume'],0],
['The SI unit of acceleration is:', ['m/s²','m/s','N','kg'],0],
['An object travelling 120 m in 10 s has a speed of:', ['12 m/s','1200 m/s','0.083 m/s','10 m/s'],0]
],
'Forces':[
['The SI unit of force is:', ['newton','joule','watt','pascal'],0],
['Weight is given by:', ['W=mg','W=m/g','W=g/m','W=mv'],0],
['A force can change an object’s:', ['motion or shape','colour only','mass only','temperature only'],0]
],
'Light Waves I':[
['The law of reflection states that:', ['angle of incidence equals angle of reflection','light stops at a mirror','all light is absorbed','refraction never occurs'],0],
['Refraction occurs because light:', ['changes speed between media','has no energy','becomes sound','stops moving'],0],
['Light can travel through:', ['a vacuum','only water','only solids','only air'],0]
],
'Light Waves II':[
['A convex lens is generally:', ['converging','diverging','opaque','a mirror'],0],
['A concave lens is generally:', ['diverging','converging','a prism','a reflector'],0],
['Lenses are used in:', ['cameras and spectacles','only batteries','only motors','only clocks'],0]
],
'Sound Waves':[
['Sound is produced by:', ['vibrations','still objects','light rays','electric fields only'],0],
['Frequency is mainly associated with:', ['pitch','loudness','mass','weight'],0],
['Sound normally needs:', ['a material medium','a vacuum only','sunlight','a magnetic field'],0]
],
'Human Eye':[
['The image is formed on the:', ['retina','iris','cornea','pupil'],0],
['The iris controls the size of the:', ['pupil','retina','optic nerve','lens'],0],
['Myopia is commonly corrected with a:', ['concave lens','convex lens','plane mirror','prism'],0]
],
'Application of Sound Waves':[
['SONAR uses:', ['reflected soundfunction renderDashboard(root){
  updateStreak();

  const avatar=state.profile.photo
    ? `<img src="${state.profile.photo}" alt="Profile">`
    : `<span>👤</span>`;

  root.innerHTML=`
    <div class="page">
      <header class="topbar">
        <div class="user">
          <div class="avatar">${avatar}</div>
          <div>
            <small>Welcome back</small>
            <strong>Hi, ${esc(firstName())}! 👋</strong>
          </div>
        </div>
        <button class="icon-btn" onclick="showMenu()">☰</button>
      </header>

      <section class="welcome-card">
        <div>
          <span class="eyebrow">YOUR PHYSICS JOURNEY</span>
          <h1>Learn. Solve.<br>Master Physics.</h1>
          <p>Keep learning and build your confidence one topic at a time.</p>
        </div>
        <div class="atom">⚛️</div>
      </section>

      <section class="stats">
        <div class="stat">
          <strong>${totalCompleted()}</strong>
          <span>Topics Done</span>
        </div>
        <div class="stat">
          <strong>${bestScore()}%</strong>
          <span>Best Score</span>
        </div>
        <div class="stat">
          <strong>${state.streak}</strong>
          <span>Day Streak 🔥</span>
        </div>
      </section>

      <div class="section-head">
        <h2>Choose Your Class</h2>
        <span>Scheme order</span>
      </div>

      <div class="class-grid">
        ${['SS1','SS2','SS3'].map(cls=>`
          <button class="class-card ${cls.toLowerCase()}" onclick="showClass('${cls}')">
            <span class="class-label">${cls}</span>
            <strong>Physics</strong>
            <small>${completedCount(cls)}/${scheme[cls].length} topics completed</small>
            <span class="arrow">→</span>
          </button>
        `).join('')}
      </div>

      <div class="tools-grid">
        <button onclick="showFlashcards()">
          <span>🃏</span>
          <strong>Flashcards</strong>
          <small>Quick revision</small>
        </button>

        <button onclick="showCalculator()">
          <span>🧮</span>
          <strong>Physics Calculator</strong>
          <small>Formula + working</small>
        </button>
      </div>

      <div class="backup">
        <button onclick="exportProgress()">⬇ Export My Progress</button>
        <label class="restore-btn">
          ⬆ Restore Progress
          <input type="file" accept=".json" hidden onchange="restoreProgress(event)">
        </label>
      </div>
    </div>
  `;
}

function showMenu(){
  const root=document.getElementById('app');
  root.innerHTML=`
    <div class="page narrow">
      <button class="back" onclick="app()">← Dashboard</button>
      <h2>Settings</h2>

      <div class="menu-card">
        <button onclick="showProfileEdit()">👤 Edit Profile</button>
        <button onclick="exportProgress()">⬇ Export My Progress</button>
        <label>
          ⬆ Restore My Progress
          <input type="file" accept=".json" hidden onchange="restoreProgress(event)">
        </label>
        <button class="danger" onclick="resetProfile()">Reset Profile</button>
      </div>

      <p class="muted small">
        Your information is stored locally on this device/browser.
        It is not sent to a server.
      </p>
    </div>
  `;
}

function showProfileEdit(){
  const root=document.getElementById('app');

  root.innerHTML=`
    <div class="page narrow">
      <button class="back" onclick="showMenu()">← Back</button>
      <h2>Edit Profile</h2>

      <div class="profile-form">
        <div class="avatar-preview">
          ${state.profile.photo
            ? `<img src="${state.profile.photo}" alt="Profile">`
            : '👤'}
        </div>

        <label class="upload">
          📷 Change Profile Photo
          <input id="editPhoto" type="file" accept="image/*" capture="user" hidden>
        </label>

        <label>
          Full Name
          <input id="editName" type="text" value="${esc(state.profile.name)}">
        </label>

        <button class="primary" onclick="saveProfileEdit()">Save Changes</button>
      </div>
    </div>
  `;

  document.getElementById('editPhoto').addEventListener('change',function(){
    const file=this.files?.[0];
    if(!file)return;

    const reader=new FileReader();

    reader.onload=e=>{
      window.editPhoto=e.target.result;
      document.querySelector('.avatar-preview').innerHTML=
        `<img src="${e.target.result}" alt="Profile">`;
    };

    reader.readAsDataURL(file);
  });
}

function saveProfileEdit(){
  const name=document.getElementById('editName').value.trim();

  if(!name){
    alert('Please enter your name.');
    return;
  }

  state.profile.name=name;

  if(window.editPhoto){
    state.profile.photo=window.editPhoto;
  }

  saveState();
  app();
}

function showClass(cls){
  const root=document.getElementById('app');

  root.innerHTML=`
    <div class="page">
      <button class="back" onclick="app()">← Dashboard</button>

      <div class="class-title">
        <span class="class-label">${cls}</span>
        <h1>${cls} Physics</h1>
        <p>Follow the topics in order and mark each one complete when you finish.</p>
      </div>

      <div class="progress-bar">
        <span style="width:${(completedCount(cls)/scheme[cls].length)*100}%"></span>
      </div>

      <div class="topic-list">
        ${scheme[cls].map((topic,i)=>{
          const done=state.done[topicKey(cls,i)];

          return `
            <button class="topic-item ${done?'done':''}" onclick="showTopic('${cls}',${i})">
              <span class="topic-number">${i+1}</span>
              <span class="topic-text">
                <strong>${esc(topic)}</strong>
                <small>${done?'Completed':'Start lesson'}</small>
              </span>
              <span class="topic-status">${done?'✓':'→'}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function showTopic(cls,index){
  updateStreak();

  const topic=scheme[cls][index];
  const lesson=lessons[topic]||'This lesson is being prepared. Review the key Physics ideas and practise questions related to this topic.';
  const key=topicKey(cls,index);
  const score=state.scores[key];

  const root=document.getElementById('app');

  root.innerHTML=`
    <div class="page">
      <button class="back" onclick="showClass('${cls}')">← ${cls} Topics</button>

      <div class="topic-header">
        <span>${cls} • Topic ${index+1}</span>
        <h1>${esc(topic)}</h1>
      </div>

      <article class="lesson-card">
        <h2>Lesson</h2>
        <p>${esc(lesson)}</p>
      </article>

      <article class="revision-card">
        <h2>Quick Revision</h2>
        <ul>
          <li>Understand the definition and key ideas.</li>
          <li>Know the relevant SI units and symbols.</li>
          <li>Practise applying the idea to simple problems.</li>
        </ul>
      </article>

      <div class="topic-actions">
        <button class="primary" onclick="showQuiz('${cls}',${index})">
          ${score!==undefined?'Retake Quiz':'Take Quiz'} 📝
        </button>

        <button class="secondary" onclick="markComplete('${cls}',${index})">
          ${state.done[key]?'✓ Completed':'Mark Topic Complete'}
        </button>
      </div>
    </div>
  `;
}

function markComplete(cls,index){
  const key=topicKey(cls,index);
  state.done[key]=true;
  updateStreak();
  saveState();
  showClass(cls);
} function showQuiz(cls,index){
  const topic=scheme[cls][index];
  const questions=quizData[topic]||[
    ['What should you do when studying this topic?',['Understand the key ideas and practise problems','Skip the lesson','Ignore units','Avoid examples'],0],
    ['What should you pay attention to?',['Definitions, formulas and SI units','Only the title','Only pictures','Nothing'],0],
    ['What helps you master Physics?',['Practice and understanding','Guessing only','Memorising without understanding','Skipping questions'],0]
  ];

  const root=document.getElementById('app');

  root.innerHTML=`
    <div class="page">
      <button class="back" onclick="showTopic('${cls}',${index})">← Back to Lesson</button>

      <div class="quiz-header">
        <span>${cls} • Quiz</span>
        <h1>${esc(topic)}</h1>
        <p>Choose the correct answer for each question.</p>
      </div>

      <form id="quizForm">
        ${questions.map((q,i)=>`
          <div class="question-card">
            <div class="question-number">Question ${i+1}</div>
            <h3>${esc(q[0])}</h3>

            <div class="options">
              ${q[1].map((option,j)=>`
                <label class="option">
                  <input type="radio" name="q${i}" value="${j}">
                  <span>${esc(option)}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `).join('')}

        <button type="button" class="primary full" onclick="submitQuiz('${cls}',${index})">
          Submit Quiz
        </button>
      </form>
    </div>
  `;
}

function submitQuiz(cls,index){
  const topic=scheme[cls][index];
  const questions=quizData[topic]||[];
  let correct=0;

  questions.forEach((q,i)=>{
    const selected=document.querySelector(`input[name="q${i}"]:checked`);

    if(selected && Number(selected.value)===q[2]){
      correct++;
    }
  });

  const total=questions.length||1;
  const score=Math.round((correct/total)*100);
  const key=topicKey(cls,index);

  state.scores[key]=Math.max(state.scores[key]||0,score);

  if(score>=70){
    state.done[key]=true;
  }

  updateStreak();
  saveState();

  const root=document.getElementById('app');

  root.innerHTML=`
    <div class="page narrow">
      <div class="result-card">
        <div class="result-icon">${score>=70?'🎉':'💪'}</div>

        <span class="eyebrow">QUIZ RESULT</span>
        <h1>${score}%</h1>

        <p>You got <strong>${correct}</strong> out of <strong>${total}</strong> questions correct.</p>

        <div class="result-message">
          ${
            score>=70
            ? 'Excellent work! You have completed this topic.'
            : 'Keep practising. Review the lesson and try the quiz again.'
          }
        </div>

        <button class="primary full" onclick="showTopic('${cls}',${index})">
          Back to Lesson
        </button>

        <button class="secondary full" onclick="showQuiz('${cls}',${index})">
          Try Again
        </button>
      </div>
    </div>
  `;
}

function showFlashcards(){
  const cards=[
    ['What is Physics?','Physics is the study of matter, energy, motion and their interactions.'],
    ['What is speed?','Speed is distance travelled per unit time. v = d/t.'],
    ['What is velocity?','Velocity is displacement per unit time and has direction.'],
    ['What is acceleration?','Acceleration is the rate of change of velocity.'],
    ['What is force?','A force is a push or pull that can change motion or shape.'],
    ['What is the SI unit of force?','The newton (N).'],
    ['What is density?','Density is mass per unit volume. ρ = m/V.'],
    ['What is refraction?','Refraction is the change in direction of light as it passes between media because its speed changes.'],
    ['What is frequency?','Frequency is the number of complete vibrations or cycles per second. Its SI unit is hertz (Hz).'],
    ['What is gravitational field strength?','It is force per unit mass: g = F/m. Near Earth it is approximately 9.8 N/kg.']
  ];

  let current=0;
  const root=document.getElementById('app');

  function render(){
    const card=cards[current];

    root.innerHTML=`
      <div class="page narrow">
        <button class="back" onclick="app()">← Dashboard</button>

        <div class="section-head">
          <h2>Physics Flashcards</h2>
          <span>${current+1}/${cards.length}</span>
        </div>

        <button class="flashcard" id="flashcard">
          <span class="flash-label">TAP TO REVEAL</span>
          <h2>${esc(card[0])}</h2>
          <p id="answer" class="hidden-answer">${esc(card[1])}</p>
        </button>

        <div class="flash-actions">
          <button class="secondary" onclick="previousCard()">← Previous</button>
          <button class="primary" onclick="nextCard()">Next →</button>
        </div>
      </div>
    `;

    document.getElementById('flashcard').onclick=()=>{
      document.getElementById('answer').classList.toggle('show');
    };
  }

  window.previousCard=function(){
    current=(current-1+cards.length)%cards.length;
    render();
  };

  window.nextCard=function(){
    current=(current+1)%cards.length;
    render();
  };

  render();
}

function showCalculator(){
  const root=document.getElementById('app');

  root.innerHTML=`
    <div class="page narrow">
      <button class="back" onclick="app()">← Dashboard</button>

      <h1>Physics Calculator</h1>
      <p class="muted">Enter the values you know and calculate the required quantity.</p>

      <div class="calculator-card">
        <label>
          Choose Formula
          <select id="formula" onchange="updateCalculator()">
            <option value="speed">Speed: v = d/t</option>
            <option value="force">Force: F = ma</option>
            <option value="density">Density: ρ = m/V</option>
            <option value="power">Power: P = W/t</option>
            <option value="ohm">Ohm's Law: V = IR</option>
            <option value="ke">Kinetic Energy: KE = ½mv²</option>
          </select>
        </label>

        <div id="calculatorInputs"></div>

        <button class="primary full" onclick="calculatePhysics()">
          Calculate
        </button>

        <div id="calculationResult" class="calculation-result"></div>
      </div>
    </div>
  `;

  updateCalculator();
}

function updateCalculator(){
  const formula=document.getElementById('formula').value;
  const box=document.getElementById('calculatorInputs');

  const fields={
    speed:[
      ['distance','Distance (m)'],
      ['time','Time (s)']
    ],
    force:[
      ['mass','Mass (kg)'],
      ['acceleration','Acceleration (m/s²)']
    ],
    density:[
      ['mass','Mass (kg)'],
      ['volume','Volume (m³)']
    ],
    power:[
      ['work','Work/Energy (J)'],
      ['time','Time (s)']
    ],
    ohm:[
      ['current','Current (A)'],
      ['resistance','Resistance (Ω)']
    ],
    ke:[
      ['mass','Mass (kg)'],
      ['velocity','Velocity (m/s)']
    ]
  };

  box.innerHTML=fields[formula].map(field=>`
    <label>
      ${field[1]}
      <input id="calc_${field[0]}" type="number" step="any" placeholder="Enter value">
    </label>
  `).join('');
}

function calculatePhysics(){
  const formula=document.getElementById('formula').value;
  const result=document.getElementById('calculationResult');

  const get=id=>Number(document.getElementById('calc_'+id).value);

  let answer;
  let working;
  let unit;

  if(formula==='speed'){
    const d=get('distance');
    const t=get('time');

    if(t===0){
      result.innerHTML='<strong>Time cannot be zero.</strong>';
      return;
    }

    answer=d/t;
    working=`v = d/t = ${d}/${t}`;
    unit='m/s';
  }

  if(formula==='force'){
    const m=get('mass');
    const a=get('acceleration');

    answer=m*a;
    working=`F = ma = ${m} × ${a}`;
    unit='N';
  }

  if(formula==='density'){
    const m=get('mass');
    const v=get('volume');

    if(v===0){
      result.innerHTML='<strong>Volume cannot be zero.</strong>';
      return;
    }

    answer=m/v;
    working=`ρ = m/V = ${m}/${v}`;
    unit='kg/m³';
  }

  if(formula==='power'){
    const w=get('work');
    const t=get('time');

    if(t===0){
      result.innerHTML='<strong>Time cannot be zero.</strong>';
      return;
    }

    answer=w/t;
    working=`P = W/t = ${w}/${t}`;
    unit='W';
  }

  if(formula==='ohm'){
    const i=get('current');
    const r=get('resistance');

    answer=i*r;
    working=`V = IR = ${i} × ${r}`;
    unit='V';
  }

  if(formula==='ke'){
    const m=get('mass');
    const v=get('velocity');

    answer=0.5*m*v*v;
    working=`KE = ½mv² = ½ × ${m} × ${v}²`;
    unit='J';
  }

  if(!Number.isFinite(answer)){
    result.innerHTML='<strong>Please enter valid values.</strong>';
    return;
  }

  result.innerHTML=`
    <span class="eyebrow">ANSWER</span>
    <h2>${answer.toFixed(2)} ${unit}</h2>
    <p><strong>Working:</strong> ${working}</p>
  `;
}

function exportProgress(){
  const data=JSON.stringify(state,null,2);
  const blob=new Blob([data],{type:'application/json'});
  const url=URL.createObjectURL(blob);

  const a=document.createElement('a');
  a.href=url;
  a.download='study-physics-mr-joshua-progress.json';
  a.click();

  URL.revokeObjectURL(url);
}

function restoreProgress(event){
  const file=event.target.files?.[0];

  if(!file)return;

  const reader=new FileReader();

  reader.onload=function(e){
    try{
      const imported=JSON.parse(e.target.result);

      if(!imported || typeof imported!=='object'){
        throw new Error('Invalid file');
      }

      state={
        profile:imported.profile||null,
        done:imported.done||{},
        scores:imported.scores||{},
        streak:imported.streak||0,
        lastStudy:imported.lastStudy||null
      };

      saveState();

      alert('Progress restored successfully.');
      app();

    }catch(error){
      alert('This progress file is not valid.');
    }
  };

  reader.readAsText(file);
}

function resetProfile(){
  const confirmReset=confirm(
    'This will remove your profile and learning progress from this device. Continue?'
  );

  if(!confirmReset)return;

  localStorage.removeItem(KEY);

  state={
    profile:null,
    done:{},
    scores:{},
    streak:0,
    lastStudy:null
  };

  app();
}

document.addEventListener('DOMContentLoaded',app);

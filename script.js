const roles=[
{t:'Communications Manager (Remote)',o:'American University of Afghanistan',d:'November 2025 – March 2026',b:[
'Develop, implement, and oversee the university’s brand strategy to ensure a consistent and compelling institutional identity across all communication channels.',
'Maintain and update brand guidelines, including logo usage, color schemes and typography.',
'Ensure all marketing and communication materials (digital and print) align with the university’s brand standards.',
'Build and maintain positive relationships with local, national, and international media outlets.',
'Monitor media coverage and prepare regular reports on university visibility.',
'Develop engaging digital content that promotes academic programs and achievements.',
'Monitor and analyze web and social media analytics to improve outreach and engagement.',
'Manage internal communication channels to ensure effective information flow among faculty, staff, and students.',
'Support leadership in drafting internal announcements, newsletters, and speeches.',
'Develop promotional materials (brochures, reports, videos) in coordination with departments.',
'Develop and implement crisis communication plans.',
'Advise senior management on sensitive communication issues.',
'Monitor public sentiment and respond appropriately to protect institutional reputation.'
]},
{t:'Communications Officer (Remote)',o:'American University of Afghanistan',d:'January 2023 – October 2025',b:[
'Developing, writing, and editing communications and marketing materials (internal and external communications, social media content, press releases).',
'Conduct surveys or contact people of the target audience to understand their views (examples are students and former students).',
'Prepare reports for the management team, including recommendations to ensure more effective outreach.',
'Promote communications and marketing materials through social media.',
'Regularly meet and arrange interviews with media personnel, students, former students, etc.',
'Develop working relationships with stakeholders to create content.',
'Provide advocacy materials, insights, and strategies.',
'Ensure that all marketing and communications material align with the brand’s standards.',
'Maintain digital media archives (photos, videos).',
'Act as a spokesperson for the brand.',
'Arrange events.',
'Perform media outreach to maximize brand exposure.',
'Work closely with internal and external stakeholders to collect information that will improve the brand’s reputation and reach.',
'Crisis communications.'
]},
{t:'Communications and Social Media Officer',o:'Khan-Poor Afghan Charity',d:'November 2021 – November 2022',b:[
'Develop engaging posts, articles, and multimedia content that highlight the NGO’s mission, campaigns, and impact.',
'Plan, schedule, and monitor posts across platforms ensuring consistent branding and tone.',
'Respond to comments, messages, and inquiries; foster dialogue with supporters, donors, and beneficiaries.',
'Support fundraising, advocacy, and awareness campaigns through targeted digital strategies and creative storytelling.',
'Draft press releases, liaise with journalists, and maintain relationships with local and international media outlets.',
'Adapt and translate content to reach diverse audiences and ensure inclusivity.',
'Work closely with program teams to amplify project updates, success stories, and urgent appeals.',
'Collaborate on drafting, editing, and reviewing social media and multimedia materials for publication.',
'Communicate with the multimedia team on better management of onsite photography and videography.'
]},
{t:'Communications Assistant (Remote from 2020 onwards)',o:'American University of Afghanistan',d:'February 2019 – January 2023',b:[
'Took part in drafting/implementation of Communications Strategy.',
'Draft and review of communication strategy and policies.',
'Draft and review of social media and website policies.',
'Send out weekly social media reports/analysis about political dynamics and education development in Afghanistan.',
'Facilitated development of work plans, budget, and reports.',
'Led the procurement process for services and supplies.',
'Program management support to the department.',
'Advice on photography and filming of events.',
'Lead in event coordination.',
'The liaison between the student body and senior administration.',
'Advise on communications and public relation strategies.',
'Assist, track media visits, and create a network with all media agencies.',
'Generate craft/content for social media and website.',
'Review social media activities, and take necessary actions, based on senior communications staff’s direction.',
'Supported recruitment of work study and interns.',
'Manage external affairs between the university and international universities.',
'Cooperate with AUAF partners to ensure sustainable partnership.'
]},
{t:'Communications Intern',o:'American University of Afghanistan',d:'November 2017 – February 2019',b:[
'Daily administrative tasks.',
'Following admin work.',
'Track procurement processes.',
'Ensure the promotional advertisements were compliant with the policy.',
'Design word and excel files for reporting and documenting.',
'Supporting the communications team in event management.',
'Preparation, logistics, procurement.',
'Organizing meetings and preparing meeting notes.',
'Facilitate media visits for events.',
'Photography and Filming of events organized by the university.',
'Interviewing students and staff for website and social media stories.',
'Writing monthly reports.',
'Compiling university wide weekly highlights for USAID weekly reporting.',
'Updating AUAF website and Social Media.'
]},
{t:'Communications Work Study',o:'American University of Afghanistan',d:'April 2017 – November 2017',b:[
'Supporting the department in rebranding of print material.',
'Preparing draft material for social media and website.',
'Organizing interviews with students and staff for stories and videos.',
'Helping the communications staff in video production.',
'Photography of AUAF events.'
]},
{t:'Communications Officer',o:'Law Student Association at American University of Afghanistan',d:'July 2017 – July 2018',b:[
'Facilitate with the team members with organizing events, visiting court sessions, inviting guest speakers, reporting to AUAF’s Law department on monthly activities, maintain external affairs, and event management.'
]},
{t:'Communications Intern',o:'Ministry of Education of the Islamic Republic of Afghanistan',d:'June – July 2013',b:[
'Data entry, gather documents from different departments, assist officers and managers with their tasks, attending meetings and taking notes, taking part of drafting policies and giving presentations about strategies and policies.'
]}
];
const list=document.getElementById('experience-list');
function renderExperience(){
  roles.forEach((r,i)=>{
    const item=document.createElement('article');
    item.className='experience-item';
    const button=document.createElement('button');
    button.className='experience-toggle';
    button.type='button';
    button.setAttribute('aria-expanded','false');
    button.innerHTML='<span><b>'+r.t+'</b><small>'+r.o+' · '+r.d+'</small></span><span class="plus" aria-hidden="true">+</span>';
    const details=document.createElement('div');
    details.className='experience-details';
    details.innerHTML='<h3>'+r.t+'</h3><div class="org">'+r.o+'</div><div class="date">'+r.d+'</div><ul>'+r.b.map(x=>'<li>'+x+'</li>').join('')+'</ul>';
    button.addEventListener('click',()=>{
      const opening=!item.classList.contains('open');
      document.querySelectorAll('.experience-item.open').forEach(openItem=>{
        openItem.classList.remove('open');
        openItem.querySelector('.experience-toggle').setAttribute('aria-expanded','false');
      });
      if(opening){
        item.classList.add('open');
        button.setAttribute('aria-expanded','true');
      }
    });
    item.append(button,details);
    list.appendChild(item);
  });
}
renderExperience();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');if(e.target.querySelector('[data-n]'))count(e.target);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
function count(root){root.querySelectorAll('[data-n]').forEach(el=>{const n=+el.dataset.n;let c=0;const t=setInterval(()=>{c++;el.textContent=c;if(c>=n)clearInterval(t)},130)})}
const links=[...document.querySelectorAll('#nav a')],secs=links.map(a=>document.querySelector(a.getAttribute('href')));
const bar=document.getElementById('bar');
function spy(){bar.classList.toggle('sc',scrollY>40);let cur=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=i});links.forEach((a,i)=>a.classList.toggle('on',i===cur))}
addEventListener('scroll',spy,{passive:true});spy();

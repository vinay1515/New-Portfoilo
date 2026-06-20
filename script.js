// --- script.js ---

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Theme Toggle (Light / Dark)
  // ==========================================
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const themeIcon = document.getElementById('theme-icon');

  const updateIcon = () => {
    if (htmlEl.classList.contains('dark')) {
      // Sun Icon
      themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>`;
      if(themeToggleMobile) themeToggleMobile.textContent = "Switch to Light Mode";
    } else {
      // Moon Icon
      themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>`;
      if(themeToggleMobile) themeToggleMobile.textContent = "Switch to Dark Mode";
    }
  };

  const toggleTheme = () => {
    htmlEl.classList.toggle('dark');
    const isDark = htmlEl.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcon();
  };

  themeToggleBtn.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);
  updateIcon(); 


  // ==========================================
  // 2. Mobile Navigation Menu
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });


  // ==========================================
  // 3. Project Modal Viewer logic
  // ==========================================
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');

  const projectData = {
    'aws-infra': {
      title: 'AWS Cloud Infrastructure Deployment',
      image: 'Assets/AWS Project.jpeg',
      desc: 'End-to-end AWS infrastructure deployment utilizing S3, CloudFront, EC2, and IAM. Focus on strict least-privilege security boundaries and cost-optimization.',
      tech: ['AWS IAM', 'S3', 'CloudFront', 'EC2', 'Route 53'],
      repo: 'https://github.com/vinay1515/Vinay_kumar_AWS_Beginner_level_projects',
      live: '',  
      video: '',
      details: `
        <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-600 dark:text-slate-300 font-medium">
          <li>Secured AWS root account by enabling MFA, CloudWatch/SNS billing alerts, and strict least-privilege IAM policies.</li>
          <li>Deployed a static website globally on S3 and CloudFront with Route 53 DNS routing.</li>
          <li>Provisioned a secure EC2 instance using SSM Session Manager to completely remove public port 22 exposure.</li>
          <li>Enabled S3 versioning and lifecycle policies to transition data, cutting storage costs up to 95%.</li>
          <li>Implemented S3 cross-region replication to establish a disaster recovery pattern.</li>
        </ul>
      `
    },
    'azure-vnet': {
      title: 'Multi-Region Azure Virtual Network',
      image: 'Assets/AzureProject.png',
      desc: 'Designed and deployed a highly secure 3-region VNet architecture for Contoso Ltd., ensuring restricted lateral movement and scalable growth.',
      tech: ['Azure VNet', 'VPN', 'NSGs', 'Routing Tables'],
      repo: '', 
      live: '',
      video: 'https://www.linkedin.com/posts/vinay-kumar-duvva_azure-cloudnetworking-networking-activity-7306592741407211521-FRkI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADytoGQBxbbDoyPVesNycFwpZLTIu2Y2Y_Q',
      details: `
        <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-600 dark:text-slate-300 font-medium">
          <li>Designed a 3-region VNet architecture covering East US, West Europe, and Southeast Asia.</li>
          <li>Configured <strong>CoreServicesVnet</strong> with web/database subnets and VPN for hybrid connectivity.</li>
          <li>Provisioned isolated environments (Manufacturing & Research) to prevent cross-contamination.</li>
          <li>Enforced traffic segmentation using NSGs and custom routing tables, improving network security by 40%.</li>
          <li>Validations completed via Azure Portal accompanied by 7+ pages of technical documentation.</li>
        </ul>
      `
    },
    'gcp-gke': {
      title: 'GCP VPC & Kubernetes Cluster Deployment',
      image: 'Assets/GCPProject.png',
      desc: 'Provisioned and monitored a production GKE cluster on GCP using Terraform, cutting deployment time by 40%.',
      tech: ['GCP VPC', 'GKE', 'Terraform', 'Stackdriver'],
      repo: '', 
      live: 'https://www.credly.com/badges/77de8248-cc33-4e05-a9cb-ba4602a31585/public_url',
      video: '',
      details: `
        <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-600 dark:text-slate-300 font-medium">
          <li>Provisioned and monitored a production GKE cluster on GCP using Terraform, cutting deployment time by 40%.</li>
          <li>Configured Stackdriver Monitoring with active alerting to maintain 99.9% application uptime.</li>
          <li>Automated infrastructure provisioning with Terraform, reducing manual intervention by 80%.</li>
          <li>Set up alerting policies with notification channels to detect and escalate pod crashes, node pressure, and latency spikes.</li>
          <li>Applied Kubernetes Network Policies to restrict pod-to-pod traffic, enforcing least-privilege communication.</li>
          <li>Produced 5+ pages of technical documentation covering deployment procedures and incident runbooks.</li>
        </ul>
      `
    }
  };

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project');
      const data = projectData[id];
      if (data) {
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-desc').innerHTML = data.desc + data.details;
        document.getElementById('modal-image').src = data.image;
        
        // Render tech badges
        document.getElementById('modal-tech').innerHTML = data.tech.map(t => 
          `<span class="px-3 py-1 bg-blue/10 text-blue font-bold text-xs rounded-lg">${t}</span>`
        ).join('');
        
        // Handle Links
        const repoBtn = document.getElementById('modal-repo');
        const liveBtn = document.getElementById('modal-live');
        const videoBtn = document.getElementById('modal-video');
        
        if (data.repo && data.repo !== '#') {
          repoBtn.href = data.repo;
          repoBtn.classList.remove('hidden');
        } else {
          repoBtn.classList.add('hidden');
        }

        if (data.live && data.live !== '#') {
          liveBtn.href = data.live;
          liveBtn.textContent = data.live.includes('credly.com') ? 'View Credential' : 'Live Demo';
          liveBtn.classList.remove('hidden');
        } else {
          liveBtn.classList.add('hidden');
        }

        if (data.video && data.video !== '#') {
          videoBtn.href = data.video;
          videoBtn.classList.remove('hidden');
        } else {
          videoBtn.classList.add('hidden');
        }

        modal.showModal();
        document.body.style.overflow = 'hidden'; // Lock background scrolling
      }
    });
  });

  const closeModal = () => {
    modal.close();
    document.body.style.overflow = 'auto'; // Unlock background scrolling
  };

  modalCloseBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeModal();
    }
  });


  // ==========================================
  // 4. Formspree Form Logic
  // ==========================================
  const form = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');

  const sanitize = (str) => {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', "/": '&#x2F;' };
    const reg = /[&<>"'/]/ig;
    return str.replace(reg, (match) => (map[match]));
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formSuccess.classList.add('hidden');
    formError.classList.add('hidden');

    const formData = new FormData(form);
    const data = {
      name: sanitize(formData.get('name')),
      email: sanitize(formData.get('email')),
      subject: sanitize(formData.get('subject')),
      message: sanitize(formData.get('message')),
      resume_request: formData.get('resume_request') ? 'Yes' : 'No'
    };

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        formSuccess.classList.remove('hidden');
        form.reset();
      } else {
        formError.classList.remove('hidden');
      }
    } catch (err) {
      formError.classList.remove('hidden');
    }
  });


  // ==========================================
  // 5. Copy Email Helper
  // ==========================================
  const copyBtn = document.getElementById('copy-email-btn');
  const copyToast = document.getElementById('copy-toast');
  
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('duvvavinaykumar@gmail.com').then(() => {
        copyToast.classList.remove('hidden');
        setTimeout(() => copyToast.classList.add('hidden'), 2000);
      });
    });
  }

});
// Application Data
const appData = {
  "internships": [
    {"id": 1, "title": "Digital Marketing Assistant", "company": "Reliance Industries", "sector": "Digital Marketing", "location": "Mumbai", "skills_required": "Communication, Basic Computer, Social Media", "education_required": "12th Pass", "stipend": 5000, "description": "Learn digital marketing strategies, social media management, and online campaign creation."},
    {"id": 2, "title": "Data Entry Clerk", "company": "Tata Consultancy Services", "sector": "IT Services", "location": "Bangalore", "skills_required": "MS Office, Data Entry, Attention to Detail", "education_required": "Graduation", "stipend": 6000, "description": "Maintain accurate data records, process information, and support database management."},
    {"id": 3, "title": "Customer Service Representative", "company": "HDFC Bank", "sector": "Banking", "location": "Delhi", "skills_required": "Communication, Problem Solving, Phone Skills", "education_required": "12th Pass", "stipend": 5500, "description": "Handle customer inquiries, resolve issues, and provide excellent customer service."},
    {"id": 4, "title": "Sales Associate", "company": "Flipkart", "sector": "E-commerce", "location": "Bangalore", "skills_required": "Sales, Communication, Product Knowledge", "education_required": "12th Pass", "stipend": 5000, "description": "Assist customers with product selection, process sales, and meet targets."},
    {"id": 5, "title": "Administrative Assistant", "company": "Infosys", "sector": "IT Services", "location": "Hyderabad", "skills_required": "MS Office, Organization, Communication", "education_required": "Graduation", "stipend": 5500, "description": "Support office operations, manage schedules, and coordinate meetings."},
    {"id": 6, "title": "Content Writer", "company": "Wipro", "sector": "IT Services", "location": "Pune", "skills_required": "Writing, Research, Content Creation", "education_required": "Graduation", "stipend": 7000, "description": "Create engaging content for websites, blogs, and marketing materials."},
    {"id": 7, "title": "Social Media Coordinator", "company": "ICICI Bank", "sector": "Digital Marketing", "location": "Chennai", "skills_required": "Social Media, Creativity, Analytics", "education_required": "12th Pass", "stipend": 6000, "description": "Manage social media accounts, create posts, and engage with followers."},
    {"id": 8, "title": "Finance Assistant", "company": "Asian Paints", "sector": "Manufacturing", "location": "Kolkata", "skills_required": "Excel, Accounting Basics, Analysis", "education_required": "Commerce Graduate", "stipend": 6500, "description": "Assist with financial record keeping, invoice processing, and budget tracking."},
    {"id": 9, "title": "HR Trainee", "company": "Mahindra Group", "sector": "Automotive", "location": "Mumbai", "skills_required": "Communication, HR Knowledge, Organization", "education_required": "Graduation", "stipend": 5500, "description": "Support recruitment processes, employee onboarding, and HR documentation."},
    {"id": 10, "title": "Operations Support Specialist", "company": "Larsen & Toubro", "sector": "Engineering", "location": "Mumbai", "skills_required": "Operations, Process Management, Analytics", "education_required": "Engineering/Graduation", "stipend": 6000, "description": "Streamline operations, improve processes, and support daily business functions."},
    {"id": 11, "title": "Quality Control Trainee", "company": "ITC Limited", "sector": "FMCG", "location": "Kolkata", "skills_required": "Quality Control, Attention to Detail, Manufacturing", "education_required": "12th Pass/ITI", "stipend": 5000, "description": "Inspect products for quality, conduct tests, and maintain quality standards."},
    {"id": 12, "title": "Supply Chain Assistant", "company": "HUL", "sector": "FMCG", "location": "Mumbai", "skills_required": "Supply Chain, Logistics, Coordination", "education_required": "Graduation", "stipend": 5500, "description": "Coordinate supply chain activities, manage inventory, and track shipments."},
    {"id": 13, "title": "IT Support Technician", "company": "Tech Mahindra", "sector": "IT Services", "location": "Bangalore", "skills_required": "Computer Hardware, Troubleshooting, Customer Service", "education_required": "Engineering/IT Graduate", "stipend": 6500, "description": "Provide technical support, troubleshoot issues, and maintain IT systems."},
    {"id": 14, "title": "Research Analyst", "company": "Bajaj Auto", "sector": "Automotive", "location": "Pune", "skills_required": "Research, Analysis, Report Writing", "education_required": "Graduation", "stipend": 7000, "description": "Conduct research, analyze data, and prepare detailed reports."},
    {"id": 15, "title": "Banking Operations Trainee", "company": "State Bank of India", "sector": "Banking", "location": "Mumbai", "skills_required": "Banking Operations, Customer Service, Finance", "education_required": "Graduation", "stipend": 6000, "description": "Learn banking operations, process transactions, and assist customers."},
    {"id": 16, "title": "Retail Management Trainee", "company": "Big Bazaar", "sector": "Retail", "location": "Delhi", "skills_required": "Management, Sales, Customer Service", "education_required": "12th Pass", "stipend": 5000, "description": "Support store management, handle customer service, and learn retail operations."},
    {"id": 17, "title": "Manufacturing Trainee", "company": "Maruti Suzuki", "sector": "Automotive", "location": "Gurgaon", "skills_required": "Manufacturing, Safety, Quality Control", "education_required": "12th Pass/ITI", "stipend": 5500, "description": "Learn manufacturing processes, ensure safety compliance, and maintain quality."},
    {"id": 18, "title": "Hospitality Associate", "company": "Taj Hotels", "sector": "Hospitality", "location": "Delhi", "skills_required": "Customer Service, Hospitality, Communication", "education_required": "12th Pass", "stipend": 5000, "description": "Provide excellent guest service, handle bookings, and support hotel operations."},
    {"id": 19, "title": "Healthcare Assistant", "company": "Apollo Hospitals", "sector": "Healthcare", "location": "Chennai", "skills_required": "Healthcare, Patient Care, Empathy", "education_required": "12th Pass/ANM", "stipend": 5500, "description": "Assist healthcare professionals, support patient care, and maintain records."},
    {"id": 20, "title": "Education Support Coordinator", "company": "BYJU'S", "sector": "Education", "location": "Bangalore", "skills_required": "Education, Communication, Technology", "education_required": "Graduation", "stipend": 6000, "description": "Support educational programs, assist students, and coordinate learning activities."}
  ],
  "skills": [
    "Communication", "MS Office", "Data Entry", "Social Media", "Writing", "Sales", 
    "Customer Service", "Problem Solving", "Research", "Analysis", "Organization",
    "Basic Computer", "Phone Skills", "Content Creation", "Excel", "Accounting",
    "HR Knowledge", "Operations", "Quality Control", "Supply Chain", "Logistics",
    "Manufacturing", "Banking Operations", "Management", "Hospitality", "Healthcare",
    "Education", "Technology", "Engineering", "Safety", "Report Writing", 
    "Attention to Detail", "Product Knowledge", "Creativity", "Analytics",
    "Accounting Basics", "Process Management", "Computer Hardware", "Troubleshooting",
    "Finance", "Patient Care", "Empathy", "Coordination"
  ],
  "sectors": [
    "IT Services", "Banking", "Digital Marketing", "E-commerce", "Manufacturing", 
    "Automotive", "Engineering", "FMCG", "Retail", "Hospitality", "Healthcare", "Education"
  ]
};

// Translations
const translations = {
  "en": {"name": "English", "welcome": "Welcome to PM Internship Recommendations", "start": "Start Now", "next": "Next", "back": "Back", "apply": "Apply Now", "personalInfo": "Personal Information", "name": "Full Name", "age": "Age", "education": "Education Background", "educationLevel": "Education Level", "skills": "Your Skills", "skillsDesc": "Select skills you have (choose at least 3)", "sectors": "Sector Interests", "sectorsDesc": "Which sectors interest you? (choose at least 2)", "location": "Location Preference", "preferredCity": "Preferred City", "findInternships": "Find Internships", "processing": "Finding Your Perfect Internships...", "processingDesc": "Please wait while we match your profile with available opportunities", "results": "Your Recommended Internships", "resultsDesc": "Here are the top matches based on your profile", "searchAgain": "Search Again", "viewDetails": "View Details", "applyNow": "Apply Now", "detailsTitle": "Internship Details", "successMsg": "Application submitted successfully!", "errorMsg": "Please fill all required fields"},
  "hi": {"name": "हिंदी", "welcome": "PM इंटर्नशिप सिफारिशों में आपका स्वागत है", "start": "अभी शुरू करें", "next": "आगे", "back": "वापस", "apply": "अभी आवेदन करें", "personalInfo": "व्यक्तिगत जानकारी", "name": "पूरा नाम", "age": "उम्र", "education": "शिक्षा पृष्ठभूमि", "educationLevel": "शिक्षा स्तर", "skills": "आपके कौशल", "skillsDesc": "आपके पास जो कौशल हैं उन्हें चुनें (कम से कम 3 चुनें)", "sectors": "क्षेत्र रुचियां", "sectorsDesc": "आपको कौन से क्षेत्र रुचि हैं? (कम से कम 2 चुनें)", "location": "स्थान वरीयता", "preferredCity": "पसंदीदा शहर", "findInternships": "इंटर्नशिप खोजें", "processing": "आपकी परफेक्ट इंटर्नशिप खोजी जा रही है...", "processingDesc": "कृपया प्रतीक्षा करें जबकि हम आपकी प्रोफाइल को उपलब्ध अवसरों से मैच कर रहे हैं", "results": "आपकी सिफारिशी इंटर्नशिप", "resultsDesc": "आपकी प्रोफाइल के आधार पर यहाँ टॉप मैच हैं", "searchAgain": "फिर से खोजें", "viewDetails": "विवरण देखें", "applyNow": "अभी आवेदन करें", "detailsTitle": "इंटर्नशिप विवरण", "successMsg": "आवेदन सफलतापूर्वक जमा कर दिया गया!", "errorMsg": "कृपया सभी आवश्यक फील्ड भरें"},
  "kn": {"name": "ಕನ್ನಡ", "welcome": "PM ಇಂಟರ್ನ್‌ಶಿಪ್ ಶಿಫಾರಸುಗಳಿಗೆ ಸ್ವಾಗತ", "start": "ಈಗ ಪ್ರಾರಂಭಿಸಿ", "next": "ಮುಂದೆ", "back": "ಹಿಂದೆ", "apply": "ಈಗ ಅಪ್ಲೈ ಮಾಡಿ", "personalInfo": "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ", "name": "ಪೂರ್ಣ ಹೆಸರು", "age": "ವಯಸ್ಸು", "education": "ಶಿಕ್ಷಣ ಹಿನ್ನೆಲೆ", "educationLevel": "ಶಿಕ್ಷಣ ಮಟ್ಟ", "skills": "ನಿಮ್ಮ ಕೌಶಲ್ಯಗಳು", "skillsDesc": "ನಿಮ್ಮಲ್ಲಿರುವ ಕೌಶಲ್ಯಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ (ಕನಿಷ್ಠ 3 ಆಯ್ಕೆ ಮಾಡಿ)", "sectors": "ಕ್ಷೇತ್ರ ಆಸಕ್ತಿಗಳು", "sectorsDesc": "ಯಾವ ಕ್ಷೇತ್ರಗಳು ನಿಮ್ಮನ್ನು ಆಸಕ್ತಿ ಪಡಿಸುತ್ತವೆ? (ಕನಿಷ್ಠ 2 ಆಯ್ಕೆ ಮಾಡಿ)", "location": "ಸ್ಥಳದ ಆದ್ಯತೆ", "preferredCity": "ಆದ್ಯತೆಯ ನಗರ", "findInternships": "ಇಂಟರ್ನ್‌ಶಿಪ್‌ಗಳನ್ನು ಹುಡುಕಿ", "processing": "ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಇಂಟರ್ನ್‌ಶಿಪ್‌ಗಳನ್ನು ಹುಡುಕಲಾಗುತ್ತಿದೆ...", "processingDesc": "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್‌ನೊಂದಿಗೆ ಲಭ್ಯವಿರುವ ಅವಕಾಶಗಳನ್ನು ಹೊಂದಿಸುವಾಗ ದಯವಿಟ್ಟು ಕಾಯಿರಿ", "results": "ನಿಮ್ಮ ಶಿಫಾರಸು ಮಾಡಿದ ಇಂಟರ್ನ್‌ಶಿಪ್‌ಗಳು", "resultsDesc": "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಆಧಾರದ ಮೇಲೆ ಇಲ್ಲಿ ಟಾಪ್ ಮ್ಯಾಚ್‌ಗಳಿವೆ", "searchAgain": "ಮತ್ತೆ ಹುಡುಕಿ", "viewDetails": "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ", "applyNow": "ಈಗ ಅಪ್ಲೈ ಮಾಡಿ", "detailsTitle": "ಇಂಟರ್ನ್‌ಶಿಪ್ ವಿವರಗಳು", "successMsg": "ಅರ್ಜಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!", "errorMsg": "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ"},
  "te": {"name": "తెలుగు", "welcome": "PM ఇంటర్న్‌షిప్ సిఫార్సులకు స్వాగతం", "start": "ఇప్పుడే ప్రారంభించండి", "next": "తదుపరి", "back": "వెనుకకు", "apply": "ఇప్పుడు దరఖాస్తు చేయండి", "personalInfo": "వ్యక్తిగత సమాచారం", "name": "పూర్తి పేరు", "age": "వయస్సు", "education": "విద్యా నేపథ్యం", "educationLevel": "విద్యా స్థాయి", "skills": "మీ నైపుణ్యాలు", "skillsDesc": "మీకు ఉన్న నైపుణ్యాలను ఎంచుకోండి (కనీసం 3 ఎంచుకోండి)", "sectors": "రంగ ఆసక్తులు", "sectorsDesc": "మీకు ఏ రంగాలు ఆసక్తి కలిగిస్తాయి? (కనీసం 2 ఎంచుకోండి)", "location": "స్థల ప్రాధాన్యత", "preferredCity": "ఇష్టమైన నగరం", "findInternships": "ఇంటర్న్‌షిప్‌లను కనుగొనండి", "processing": "మీ పర్ఫెక్ట్ ఇంటర్న్‌షిప్‌లను కనుగొంటున్నాం...", "processingDesc": "లభ్యమైన అవకాశాలతో మీ ప్రొఫైల్‌ను మ్యాచ్ చేస్తున్నప్పుడు దయచేసి వేచి ఉండండి", "results": "మీ సిఫార్సు చేయబడిన ఇంటర్న్‌షిప్‌లు", "resultsDesc": "మీ ప్రొఫైల్ ఆధారంగా ఇక్కడ టాప్ మ్యాచ్‌లు ఉన్నాయి", "searchAgain": "మళ్లీ వెతకండి", "viewDetails": "వివరాలను చూడండి", "applyNow": "ఇప్పుడు దరఖాస్తు చేయండి", "detailsTitle": "ఇంటర్న్‌షిప్ వివరాలు", "successMsg": "దరఖాస్తు విజయవంతంగా సమర్పించబడింది!", "errorMsg": "దయచేసి అన్ని అవసరమైన ఫీల్డ్‌లను పూరించండి"},
  "bn": {"name": "বাংলা", "welcome": "PM ইন্টার্নশিপ সুপারিশে স্বাগতম", "start": "এখনই শুরু করুন", "next": "পরবর্তী", "back": "পেছনে", "apply": "এখনই আবেদন করুন", "personalInfo": "ব্যক্তিগত তথ্য", "name": "পূর্ণ নাম", "age": "বয়স", "education": "শিক্ষাগত পটভূমি", "educationLevel": "শিক্ষার স্তর", "skills": "আপনার দক্ষতা", "skillsDesc": "আপনার যে দক্ষতা রয়েছে সেগুলি নির্বাচন করুন (কমপক্ষে ৩টি নির্বাচন করুন)", "sectors": "সেক্টর আগ্রহ", "sectorsDesc": "কোন সেক্টরগুলি আপনাকে আগ্রহী করে? (কমপক্ষে ২টি নির্বাচন করুন)", "location": "অবস্থানের পছন্দ", "preferredCity": "পছন্দের শহর", "findInternships": "ইন্টার্নশিপ খুঁজুন", "processing": "আপনার নিখুঁত ইন্টার্নশিপ খুঁজে বের করা হচ্ছে...", "processingDesc": "উপলব্ধ সুযোগের সাথে আপনার প্রোফাইল মিলানোর সময় অনুগ্রহ করে অপেক্ষা করুন", "results": "আপনার প্রস্তাবিত ইন্টার্নশিপ", "resultsDesc": "আপনার প্রোফাইলের ভিত্তিতে এখানে শীর্ষ ম্যাচ রয়েছে", "searchAgain": "আবার খুঁজুন", "viewDetails": "বিস্তারিত দেখুন", "applyNow": "এখনই আবেদন করুন", "detailsTitle": "ইন্টার্নশিপের বিস্তারিত", "successMsg": "আবেদন সফলভাবে জমা দেওয়া হয়েছে!", "errorMsg": "অনুগ্রহ করে সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন"},
  "ta": {"name": "தமிழ்", "welcome": "PM இன்டர்ன்ஷிப் பரிந்துரைகளுக்கு வரவேற்கிறோம்", "start": "இப்போது தொடங்கவும்", "next": "அடுத்து", "back": "பின்", "apply": "இப்போது விண்ணப்பிக்கவும்", "personalInfo": "தனிப்பட்ட தகவல்", "name": "முழு பெயர்", "age": "வயது", "education": "கல்வி பின்னணி", "educationLevel": "கல்வி நிலை", "skills": "உங்கள் திறன்கள்", "skillsDesc": "உங்களிடம் உள்ள திறன்களைத் தேர்ந்தெடுக்கவும் (குறைந்தது 3 தேர்ந்தெடுக்கவும்)", "sectors": "துறை ஆர்வங்கள்", "sectorsDesc": "எந்த துறைகள் உங்களுக்கு ஆர்வமாக உள்ளன? (குறைந்தது 2 தேர்ந்தெடுக்கவும்)", "location": "இடம் விருப்பம்", "preferredCity": "விருப்பமான நகரம்", "findInternships": "இன்டர்ன்ஷிப்களைக் கண்டறியவும்", "processing": "உங்கள் சரியான இன்டர்ன்ஷிப்களைக் கண்டறிகிறோம்...", "processingDesc": "கிடைக்கும் வாய்ப்புகளுடன் உங்கள் சுயவிவரத்தை பொருத்தும்போது தயவுசெய்து காத்திருக்கவும்", "results": "உங்கள் பரிந்துரைக்கப்பட்ட இன்டர்ன்ஷிப்கள்", "resultsDesc": "உங்கள் சுயவிவரத்தின் அடிப்படையில் இங்கே சிறந்த பொருத்தங்கள் உள்ளன", "searchAgain": "மீண்டும் தேடவும்", "viewDetails": "விவரங்களைப் பார்க்கவும்", "applyNow": "இப்போது விண்ணப்பிக்கவும்", "detailsTitle": "இன்டர்ன்ஷிப் விவரங்கள்", "successMsg": "விண்ணப்பம் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!", "errorMsg": "தயவுசெய்து அனைத்து தேவையான புலங்களையும் நிரப்பவும்"},
  "mr": {"name": "मराठी", "welcome": "PM इंटर्नशिप शिफारसींमध्ये आपले स्वागत", "start": "आत्ताच सुरू करा", "next": "पुढे", "back": "मागे", "apply": "आत्ता अर्ज करा", "personalInfo": "वैयक्तिक माहिती", "name": "पूर्ण नाव", "age": "वय", "education": "शैक्षणिक पार्श्वभूमी", "educationLevel": "शिक्षण स्तर", "skills": "तुमची कौशल्ये", "skillsDesc": "तुमच्याकडे असलेली कौशल्ये निवडा (किमान ३ निवडा)", "sectors": "क्षेत्रातील स्वारस्ये", "sectorsDesc": "कोणती क्षेत्रे तुम्हाला स्वारस्य वाटतात? (किमान २ निवडा)", "location": "स्थानाची प्राधान्यता", "preferredCity": "प्राधान्य शहर", "findInternships": "इंटर्नशिप शोधा", "processing": "तुमच्या परफेक्ट इंटर्नशिप शोधत आहोत...", "processingDesc": "उपलब्ध संधींसह तुमची प्रोफाइल जुळवताना कृपया प्रतीक्षा करा", "results": "तुमच्या शिफारशीच्या इंटर्नशिप", "resultsDesc": "तुमच्या प्रोफाइलच्या आधारे येथे टॉप मॅच आहेत", "searchAgain": "पुन्हा शोधा", "viewDetails": "तपशील पहा", "applyNow": "आत्ता अर्ज करा", "detailsTitle": "इंटर्नशिप तपशील", "successMsg": "अर्ज यशस्वीरित्या सादर केला गेला!", "errorMsg": "कृपया सर्व आवश्यक फील्ड भरा"}
};

// Global state
let currentStep = 1;
let currentLanguage = 'en';
let candidateProfile = {};
let recommendations = [];

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    showScreen('landingPage');
    updateProgress();
    populateSkillsGrid();
    populateSectorsGrid();
}

// Global functions for inline handlers
window.changeLanguage = function(language) {
    currentLanguage = language;
    updateLanguage();
};

window.startApplication = function() {
    showScreen('profileForm');
    currentStep = 1;
    updateProgress();
};

window.nextStep = function() {
    if (!validateCurrentStep()) {
        showError(translations[currentLanguage].errorMsg);
        return;
    }

    // Hide current step
    document.getElementById('step' + currentStep).classList.add('hidden');
    
    currentStep++;
    if (currentStep <= 5) {
        // Show next step
        document.getElementById('step' + currentStep).classList.remove('hidden');
        updateProgress();
    }
};

window.prevStep = function() {
    // Hide current step
    document.getElementById('step' + currentStep).classList.add('hidden');
    
    currentStep--;
    if (currentStep >= 1) {
        // Show previous step
        document.getElementById('step' + currentStep).classList.remove('hidden');
        updateProgress();
    }
};

window.generateRecommendations = function() {
    if (!validateCurrentStep()) {
        showError(translations[currentLanguage].errorMsg);
        return;
    }

    // Collect form data
    candidateProfile = {
        name: document.getElementById('candidateName').value.trim(),
        age: parseInt(document.getElementById('candidateAge').value),
        education: document.getElementById('educationLevel').value,
        skills: Array.from(document.querySelectorAll('.skill-item.selected')).map(el => el.querySelector('input').value),
        sectors: Array.from(document.querySelectorAll('.sector-item.selected')).map(el => el.querySelector('input').value),
        location: document.getElementById('locationPreference').value
    };

    // Show processing screen
    showScreen('processingScreen');

    // Simulate processing delay
    setTimeout(() => {
        recommendations = calculateRecommendations(candidateProfile);
        displayRecommendations();
        showScreen('resultsScreen');
    }, 2000);
};

window.showInternshipDetails = function(internshipId) {
    const internship = appData.internships.find(i => i.id === internshipId);
    if (!internship) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h4>${internship.title}</h4>
        <p><strong>Company:</strong> ${internship.company}</p>
        <p><strong>Sector:</strong> ${internship.sector}</p>
        <p><strong>Location:</strong> ${internship.location}</p>
        <p><strong>Stipend:</strong> ₹${internship.stipend}/month</p>
        <p><strong>Education Required:</strong> ${internship.education_required}</p>
        <p><strong>Skills Required:</strong> ${internship.skills_required}</p>
        <p><strong>Description:</strong> ${internship.description}</p>
    `;

    document.getElementById('detailModal').classList.remove('hidden');
};

window.closeModal = function() {
    document.getElementById('detailModal').classList.add('hidden');
};

window.applyToInternship = function(internshipId) {
    closeModal();
    showSuccess(translations[currentLanguage].successMsg);
};

window.searchAgain = function() {
    resetForm();
    showScreen('profileForm');
    currentStep = 1;
    updateProgress();
};

// Helper functions
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
        targetScreen.classList.add('active');
    }
}

function updateProgress() {
    const progress = (currentStep / 5) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
}

function updateLanguage() {
    const lang = translations[currentLanguage];
    if (!lang) return;
    
    // Update text content safely
    const updateElement = (id, text) => {
        const element = document.getElementById(id);
        if (element && text) element.textContent = text;
    };

    updateElement('welcomeTitle', lang.welcome);
    updateElement('startText', lang.start);
    updateElement('personalInfoTitle', lang.personalInfo);
    updateElement('nameLabel', lang.name);
    updateElement('ageLabel', lang.age);
    updateElement('educationTitle', lang.education);
    updateElement('educationLabel', lang.educationLevel);
    updateElement('skillsTitle', lang.skills);
    updateElement('skillsDesc', lang.skillsDesc);
    updateElement('sectorsTitle', lang.sectors);
    updateElement('sectorsDesc', lang.sectorsDesc);
    updateElement('locationTitle', lang.location);
    updateElement('locationLabel', lang.preferredCity);
    
    // Update button texts
    updateElement('nextBtn1', lang.next);
    updateElement('nextBtn2', lang.next);
    updateElement('nextBtn3', lang.next);
    updateElement('nextBtn4', lang.next);
    updateElement('backBtn1', lang.back);
    updateElement('backBtn2', lang.back);
    updateElement('backBtn3', lang.back);
    updateElement('backBtn4', lang.back);
    updateElement('findBtn', lang.findInternships);
    
    // Update other texts
    updateElement('processingTitle', lang.processing);
    updateElement('processingDesc', lang.processingDesc);
    updateElement('resultsTitle', lang.results);
    updateElement('resultsDesc', lang.resultsDesc);
    updateElement('searchAgainBtn', lang.searchAgain);
    updateElement('detailTitle', lang.detailsTitle);
    updateElement('applyNowBtn', lang.applyNow);
    updateElement('successText', lang.successMsg);
    updateElement('errorText', lang.errorMsg);
}

function validateCurrentStep() {
    switch (currentStep) {
        case 1:
            const name = document.getElementById('candidateName').value.trim();
            const age = parseInt(document.getElementById('candidateAge').value);
            return name !== '' && age >= 18 && age <= 30;
        
        case 2:
            return document.getElementById('educationLevel').value !== '';
        
        case 3:
            const selectedSkills = document.querySelectorAll('.skill-item.selected').length;
            return selectedSkills >= 3;
        
        case 4:
            const selectedSectors = document.querySelectorAll('.sector-item.selected').length;
            return selectedSectors >= 2;
        
        case 5:
            return document.getElementById('locationPreference').value !== '';
        
        default:
            return true;
    }
}

function populateSkillsGrid() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    
    appData.skills.forEach((skill, index) => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <input type="checkbox" id="skill-${index}" value="${skill}" style="display: none;">
            <span>${skill}</span>
        `;
        
        skillElement.addEventListener('click', function() {
            this.classList.toggle('selected');
            const checkbox = this.querySelector('input');
            checkbox.checked = this.classList.contains('selected');
        });
        
        skillsGrid.appendChild(skillElement);
    });
}

function populateSectorsGrid() {
    const sectorsGrid = document.getElementById('sectorsGrid');
    if (!sectorsGrid) return;
    
    sectorsGrid.innerHTML = '';
    
    appData.sectors.forEach((sector, index) => {
        const sectorElement = document.createElement('div');
        sectorElement.className = 'sector-item';
        sectorElement.innerHTML = `
            <input type="checkbox" id="sector-${index}" value="${sector}" style="display: none;">
            <span>${sector}</span>
        `;
        
        sectorElement.addEventListener('click', function() {
            this.classList.toggle('selected');
            const checkbox = this.querySelector('input');
            checkbox.checked = this.classList.contains('selected');
        });
        
        sectorsGrid.appendChild(sectorElement);
    });
}

function calculateRecommendations(profile) {
    const scoredInternships = appData.internships.map(internship => {
        const score = calculateMatchScore(profile, internship);
        return { ...internship, matchScore: score };
    });

    // Sort by score and return top 5
    return scoredInternships
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 5);
}

function calculateMatchScore(profile, internship) {
    let totalScore = 0;

    // Education match (40% weight)
    const educationScore = getEducationScore(profile.education, internship.education_required);
    totalScore += educationScore * 0.4;

    // Skills match (30% weight)
    const skillsScore = getSkillsScore(profile.skills, internship.skills_required);
    totalScore += skillsScore * 0.3;

    // Location match (20% weight)
    const locationScore = getLocationScore(profile.location, internship.location);
    totalScore += locationScore * 0.2;

    // Sector match (10% weight)
    const sectorScore = getSectorScore(profile.sectors, internship.sector);
    totalScore += sectorScore * 0.1;

    return Math.round(totalScore);
}

function getEducationScore(candidateEd, requiredEd) {
    if (candidateEd === requiredEd) return 100;
    
    const educationLevels = {
        '12th Pass': 1,
        'ITI': 2,
        'Polytechnic': 3,
        '12th Pass/ITI': 2.5,
        '12th Pass/ANM': 2.5,
        'Commerce Graduate': 4,
        'Graduation': 4,
        'Engineering/Graduation': 5,
        'Engineering/IT Graduate': 5
    };

    const candidateLevel = educationLevels[candidateEd] || 0;
    const requiredLevel = educationLevels[requiredEd] || 0;

    if (candidateLevel >= requiredLevel) {
        return candidateLevel === requiredLevel ? 100 : 80;
    }
    return 0;
}

function getSkillsScore(candidateSkills, requiredSkillsStr) {
    const requiredSkills = requiredSkillsStr.split(',').map(s => s.trim());
    const matchingSkills = candidateSkills.filter(skill => 
        requiredSkills.some(reqSkill => reqSkill.toLowerCase().includes(skill.toLowerCase()))
    );
    
    return requiredSkills.length > 0 ? (matchingSkills.length / requiredSkills.length) * 100 : 0;
}

function getLocationScore(candidateLocation, jobLocation) {
    if (candidateLocation === jobLocation) return 100;
    
    // Group cities by states for partial matching
    const cityStates = {
        'Mumbai': 'Maharashtra',
        'Delhi': 'Delhi',
        'Bangalore': 'Karnataka',
        'Chennai': 'Tamil Nadu',
        'Kolkata': 'West Bengal',
        'Hyderabad': 'Telangana',
        'Pune': 'Maharashtra',
        'Gurgaon': 'Haryana'
    };

    const candidateState = cityStates[candidateLocation];
    const jobState = cityStates[jobLocation];

    if (candidateState === jobState) return 50;
    return 20; // Different state
}

function getSectorScore(candidateSectors, jobSector) {
    if (candidateSectors.includes(jobSector)) return 100;
    
    // Check for related sectors
    const relatedSectors = {
        'IT Services': ['Digital Marketing'],
        'Digital Marketing': ['IT Services', 'E-commerce'],
        'E-commerce': ['Digital Marketing', 'Retail'],
        'Banking': ['Manufacturing', 'FMCG'],
        'Manufacturing': ['Automotive', 'Engineering'],
        'Automotive': ['Manufacturing', 'Engineering']
    };

    const related = relatedSectors[jobSector] || [];
    if (candidateSectors.some(sector => related.includes(sector))) {
        return 60;
    }

    return 0;
}

function displayRecommendations() {
    const container = document.getElementById('recommendationsContainer');
    if (!container) return;
    
    container.innerHTML = '';

    recommendations.forEach((internship) => {
        const card = document.createElement('div');
        card.className = 'recommendation-card';
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <div class="card-title">${internship.title}</div>
                    <div class="card-company">${internship.company}</div>
                </div>
                <div class="match-score">${internship.matchScore}% Match</div>
            </div>
            <div class="card-details">
                <div class="detail-item">
                    <div class="detail-label">Location</div>
                    <div class="detail-value">${internship.location}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Stipend</div>
                    <div class="detail-value">₹${internship.stipend}/month</div>
                </div>
            </div>
            <div class="card-actions">
                <button class="btn btn--secondary btn--sm" onclick="showInternshipDetails(${internship.id})">
                    ${translations[currentLanguage].viewDetails || 'View Details'}
                </button>
                <button class="btn btn--primary btn--sm" onclick="applyToInternship(${internship.id})">
                    ${translations[currentLanguage].applyNow || 'Apply Now'}
                </button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function showSuccess(message) {
    const successElement = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    if (successElement && successText) {
        successText.textContent = message;
        successElement.classList.remove('hidden');
        
        setTimeout(() => {
            successElement.classList.add('hidden');
        }, 3000);
    }
}

function showError(message) {
    const errorElement = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    if (errorElement && errorText) {
        errorText.textContent = message;
        errorElement.classList.remove('hidden');
        
        setTimeout(() => {
            errorElement.classList.add('hidden');
        }, 3000);
    }
}

function resetForm() {
    // Reset form fields
    document.getElementById('candidateName').value = '';
    document.getElementById('candidateAge').value = '';
    document.getElementById('educationLevel').value = '';
    document.getElementById('locationPreference').value = '';
    
    // Reset skills and sectors
    document.querySelectorAll('.skill-item.selected, .sector-item.selected').forEach(item => {
        item.classList.remove('selected');
        const checkbox = item.querySelector('input');
        if (checkbox) checkbox.checked = false;
    });
    
    // Reset step
    currentStep = 1;
    
    // Hide all steps except first
    for (let i = 2; i <= 5; i++) {
        const stepElement = document.getElementById('step' + i);
        if (stepElement) stepElement.classList.add('hidden');
    }
    const step1 = document.getElementById('step1');
    if (step1) step1.classList.remove('hidden');
    
    updateProgress();
    
    // Clear profile and recommendations
    candidateProfile = {};
    recommendations = [];
}
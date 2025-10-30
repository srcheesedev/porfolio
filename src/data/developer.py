#!/usr/bin/env python3
"""
Developer Profile: Javier Argüeso
DevOps Engineer
"""

def get_personal_info():
    return {
        "name": "Javier Argüeso",
        "location": "Badajoz, España",
        "role": "DevOps Engineer",
        "motto": "Destroy Every Version On Production Servers",
        "education": "Ingeniería Informática - Universidad de Extremadura",
        "certification": "Google Cloud Associate Engineer"
    }

def get_skills():
    return {
        "cloud": ["Google Cloud", "AWS", "Azure"],
        "automation": ["Kubernetes", "Docker", "Jenkins"],
        "programming": ["Python", "Bash"],
        "ci_cd": ["GitLab CI/CD", "Azure DevOps"]
    }

def get_interests():
    return {
        "tech": ["Cloud Architecture", "Automation", "DevSecOps"],
        "personal": ["Metal Music", "Craft Beer", "Artisan Cheese"]
    }

def get_contact():
    return {
        "github": "srcheesedev",
        "linkedin": "javier-argueso-soto", 
        "instagram": "srcheese.dev"
    }

def main():
    profile = {
        **get_personal_info(),
        "skills": get_skills(),
        "interests": get_interests(),
        "contact": get_contact()
    }
    return profile

if __name__ == "__main__":
    dev = main()
    print(f"👋 {dev['name']} - {dev['role']}")
    print(f"📍 {dev['location']}")
    print(f"💭 {dev['motto']}")
    print(f"🎓 {dev['education']}")
    print(f"☁️ {dev['certification']}")
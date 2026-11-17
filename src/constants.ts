import {
  EmploymentType,
  JobApplicationTrackerSettings,
  JobStatus,
  WorkplaceType,
} from './types';

export const VIEW_TYPE_JOB_TRACKER = 'job-application-tracker-view';

/**
 * Sanitizes a status string for safe usage in CSS class names.
 */
export function getStatusClassName(status: string): string {
  return (
    'status-' +
    (status || '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9-]/g, '-')
  );
}

export const WORKPLACE_OPTIONS: readonly WorkplaceType[] = [
  'Remote',
  'Hybrid',
  'On-site',
];
export const EMPLOYMENT_OPTIONS: readonly EmploymentType[] = [
  'Full-time',
  'Contract',
  'Part-time',
  'Internship',
];

export const DEFAULT_STATUSES: JobStatus[] = [
  'Interesting',
  'In preparation',
  'Applied',
  'Interview',
  "Let's hope",
  'Rejected',
  'Ghosted',
];

export const DEFAULT_SOURCE_OPTIONS: string[] = [
  'MyAbility',
  'LinkedIn',
  'Company Website',
  'other',
];

export const DEFAULT_INTERVIEW_PREP_TEMPLATE = `---
type: interview-prep
company: "{{company}}"
role: "{{role}}"
round: "{{roundName}}"
date: "{{date}}"
---

# Interview Prep: {{roundName}} - {{company}} ({{role}})

> **Date & Time:** {{date}} {{time}}
> **Interviewers / Panel:** {{interviewers}}
> **Application Note:** [[{{applicationNoteTitle}}]]

---

## 🏢 Company Intelligence & Team Context
- **Business Model / Mission:**
- **Recent Product Launches & News:**
- **Tech Stack & Engineering Architecture:**
- **Team Scope & Why This Role is Open:**

---

## 🎯 Key Strengths & Role Alignment
- **Must-Have Requirement 1:** *How my background directly aligns...*
- **Must-Have Requirement 2:** *How my background directly aligns...*
- **Domain Expertise & Impact:** *Relevant past wins...*

---

## 💡 STAR Stories & Key Scenarios
### 1. Complex Technical / Cross-functional Challenge
- **Situation:**
- **Task:**
- **Action:**
- **Result & Metric:**

### 2. High-Impact Delivery / Innovation Win
- **Situation:**
- **Task:**
- **Action:**
- **Result & Metric:**

---

## 🛠️ Technical & Architecture Focus Areas
- **Core Topics to Review:**
- **Potential Deep-Dive Scenarios:**
- **Key Concepts / Code Examples:**

---

## 💰 Compensation & Target Range
- **Target Base / Total Comp:**
- **Notes on Benefits & Equity:**

---

## ❓ Tailored Questions for the Interviewer
### For Hiring Manager / Engineering Lead:
1. What does outstanding success look like in the first 90 days for this position?
2. What are the highest-priority architectural or product roadblocks currently facing the team?
3. How do you measure impact and growth within this group?

### For Peer Engineers / Teammates:
1. What does your day-to-day deployment and collaboration workflow look like?
2. What is the most exciting technical problem the team solved recently?

### For Recruiter / Talent Team:
1. What does the remainder of the evaluation pipeline and timeline look like?

---

## 📝 Post-Interview Debrief & Action Items
- **Overall Impressions & Sentiment:**
- **What Went Well:**
- **Areas to Improve / Follow Up On:**
- **Follow-up / Thank You Sent:** [ ] Yes  [ ] No
`;

/** Sub-folder of the tracker folder where cover letter notes are created. */
export const COVER_LETTER_SUBFOLDER = 'letters';

/**
 * Template for a new cover letter note.
 * Placeholders: {{applicationLink}}, {{date}}
 */
export const DEFAULT_COVER_LETTER_TEMPLATE = `---
type: cover-letter
application: "[[{{applicationLink}}]]"
date: {{date}}
---

## prep



## gpt version


## Claude Skill version


## edits


## final version


`;

export const DEFAULT_SETTINGS: JobApplicationTrackerSettings = {
  trackerFolderPath: 'job applications',
  interviewNotesFolderPath: 'job applications/interviews',
  attachmentsFolderPath: 'job applications/attachments',
  statuses: DEFAULT_STATUSES,
  defaultStatus: 'Interesting',
  interviewPrepTemplate: DEFAULT_INTERVIEW_PREP_TEMPLATE,
  defaultSourceOptions: DEFAULT_SOURCE_OPTIONS,
  openViewLocation: 'tab',
};

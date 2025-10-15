import Card from "./component/Card";

function App() {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Menlo Park, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "UI/UX Designer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Los Gatos, USA",
    },
    {
      brandLogo:
        "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Redmond, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "6 weeks ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Austin, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "2 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "San Francisco, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "AI Research Intern",
      tag1: "Part Time",
      tag2: "Internship",
      pay: "$45/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
      companyName: "Adobe",
      datePosted: "10 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$68/hr",
      location: "Noida, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (e, id) {
        return (
          <div key={id}>
            <Card
              brandLogo={e.brandLogo}
              company={e.companyName}
              post={e.post}
              datePosted={e.datePosted}
              tag1={e.tag1}
              tag2={e.tag2}
              pay={e.pay}
              location={e.location}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;

<script setup>
const servicesRef = ref(null);

const services = [
  {
    icon: "ph:code",
    color: "text-primary",
    title: "Software Development",
    items: [
      "MVP in 90 days",
      "Full-stack web app development (RoR, Spring Boot, Node.js, Golang)",
      "Modern frontends - Angular, React, Vue 3, Next.js, Nuxt.js",
      "Mobile app development (Android, iOS, Flutter, React Native)",
      "API development (RESTful & GraphQL)",
      "SaaS platform development - subscriptions, multi-tenant architecture",
      "Legacy app modernization - Monolith to microservices, UI revamp",
    ],
  },
  {
    icon: "ph:cloud",
    color: "text-cyan-400",
    title: "Cloud & DevOps",
    items: [
      "Cloud migration - AWS, Azure, GCP",
      "Cloud-native architecture & optimization",
      "Containerization - Docker, ECS, EKS, Fargate, GKE",
      "Infrastructure as Code - Terraform, AWS CDK",
      "CI/CD pipelines - GitHub Actions, GitLab CI, Jenkins",
      "Serverless computing - AWS Lambda, Cloud Functions",
    ],
  },
  {
    icon: "ph:brain",
    color: "text-purple-400",
    title: "Data & AI/ML",
    items: [
      "BI dashboards - Power BI, Tableau",
      "Data engineering - ETL pipelines, data lakes",
      "AI/ML model development & deployment",
      "Recommendation engines, NLP, computer vision",
      "Generative AI integrations - ChatGPT, LLMs",
    ],
  },
  {
    icon: "ph:paint-brush",
    color: "text-pink-400",
    title: "UI/UX & Digital Design",
    items: [
      "UI/UX design services",
      "Product design workshops",
      "Design systems",
    ],
  },
  {
    icon: "ph:compass-tool",
    color: "text-amber-400",
    title: "IT Consulting",
    items: [
      "Tech stack recommendations",
      "Solution architecture",
      "Code quality reviews & audits",
    ],
  },
  {
    icon: "ph:network",
    color: "text-green-400",
    title: "Microservices & Architecture",
    items: [
      "Kafka-based architectures",
      "Async processing, distributed systems",
      "Event sourcing & CQRS patterns",
      "Monolith to microservices conversion",
    ],
  },
  {
    icon: "ph:activity",
    color: "text-blue-400",
    title: "Realtime Applications",
    items: [
      "Kafka-based realtime notifications",
      "Serverless APIs for chat, alerts, activity feeds",
    ],
  },
  {
    icon: "ph:handshake",
    color: "text-lime-400",
    title: "Dedicated Teams",
    items: [
      "Monthly retainer-based engineering teams",
      "Full-time remote squads",
      "Flexible scale-up support for growing startups",
    ],
  },
];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        useAnime({
          targets: ".service-block",
          opacity: [0, 1],
          translateY: [40, 0],
          easing: "easeOutExpo",
          duration: 900,
          delay: useAnime.stagger(150),
        });
      }
    });
  }, { threshold: 0.25 });

  if (servicesRef.value)
    observer.observe(servicesRef.value);
});
</script>

<template>
  <section id="services" ref="servicesRef" class="bg-base-100 text-base-content pt-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 text-primary">
        {{ $t("services_section.title") }}
      </h2>

      <p class="mt-6 text-lg text-gray-400">
        {{ $t("services_section.description") }}
      </p>
    </div>

    <div class="mt-20 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      <div
        v-for="(service, index) in services" :key="index"
        class="service-block opacity-0 bg-base-200 p-6 rounded-xl shadow-md"
      >
        <h3 class="text-xl font-bold mb-3 flex items-center gap-2" :class="service.color">
          <Icon :name="service.icon" size="32" :class="service.color" />
          {{ service.title }}
        </h3>
        <ul class="text-gray-400 list-disc list-inside">
          <li v-for="(item, i) in service.items" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

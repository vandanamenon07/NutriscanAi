const foodData = {
  "Orange": {
    category: "Healthy",
    healthRate: "95/100",
    calories: "47 kcal per 100g",
    nutrition: "Vitamin C, Fiber, Potassium, Antioxidants",
    benefits: "Boosts immunity, improves skin health, and aids digestion."
  },

  "Banana": {
    category: "Healthy",
    healthRate: "90/100",
    calories: "89 kcal per 100g",
    nutrition: "Potassium, Vitamin B6, Vitamin C, Fiber",
    benefits: "Provides energy, supports heart health, and helps maintain blood pressure."
  },

  "Spinach": {
    category: "Healthy",
    healthRate: "98/100",
    calories: "23 kcal per 100g",
    nutrition: "Iron, Calcium, Vitamin K, Vitamin A, Folate",
    benefits: "Supports bone health, blood production, and immunity."
  },

  "Carrot": {
    category: "Healthy",
    healthRate: "95/100",
    calories: "41 kcal per 100g",
    nutrition: "Beta-carotene, Fiber, Vitamin K, Potassium",
    benefits: "Improves vision, supports immunity, and promotes healthy skin."
  },

  "Bitter gourd": {
    category: "Healthy",
    healthRate: "92/100",
    calories: "17 kcal per 100g",
    nutrition: "Vitamin C, Fiber, Antioxidants",
    benefits: "May help regulate blood sugar levels and improve digestion."
  },

  "Strawberry": {
    category: "Healthy",
    healthRate: "94/100",
    calories: "32 kcal per 100g",
    nutrition: "Vitamin C, Fiber, Antioxidants",
    benefits: "Supports heart health, immunity, and skin health."
  },

  "Cauliflower": {
    category: "Healthy",
    healthRate: "93/100",
    calories: "25 kcal per 100g",
    nutrition: "Vitamin C, Fiber, Folate",
    benefits: "Supports digestion and healthy weight management."
  },

  "Pea": {
    category: "Healthy",
    healthRate: "88/100",
    calories: "81 kcal per 100g",
    nutrition: "Protein, Fiber, Vitamin K, Vitamin C",
    benefits: "Supports muscle growth and digestive health."
  },

  "Egg": {
    category: "Healthy",
    healthRate: "85/100",
    calories: "155 kcal per 100g",
    nutrition: "Protein, Vitamin D, Vitamin B12, Healthy Fats",
    benefits: "Builds muscles and supports brain function."
  },

  "Salad": {
    category: "Healthy",
    healthRate: "98/100",
    calories: "35 kcal per 100g",
    nutrition: "Fiber, Vitamins, Minerals, Antioxidants",
    benefits: "Improves digestion and overall health."
  },

  "Apple": {
    category: "Healthy",
    healthRate: "93/100",
    calories: "52 kcal per 100g",
    nutrition: "Fiber, Vitamin C, Antioxidants",
    benefits: "Supports heart health and digestion."
  },

  "Tomato": {
    category: "Healthy",
    healthRate: "95/100",
    calories: "18 kcal per 100g",
    nutrition: "Lycopene, Vitamin C, Potassium",
    benefits: "Supports heart health and healthy skin."
  },

  "Avocado": {
    category: "Healthy",
    healthRate: "92/100",
    calories: "160 kcal per 100g",
    nutrition: "Healthy Fats, Fiber, Potassium, Vitamin E",
    benefits: "Supports heart health and brain function."
  },

  "Mango": {
    category: "Healthy",
    healthRate: "88/100",
    calories: "60 kcal per 100g",
    nutrition: "Vitamin A, Vitamin C, Fiber",
    benefits: "Supports vision and immunity."
  },

  "Grapes": {
    category: "Healthy",
    healthRate: "90/100",
    calories: "69 kcal per 100g",
    nutrition: "Antioxidants, Vitamin K, Vitamin C",
    benefits: "Supports heart health and protects cells."
  },

  "Broccoli": {
    category: "Healthy",
    healthRate: "98/100",
    calories: "34 kcal per 100g",
    nutrition: "Vitamin C, Vitamin K, Fiber, Antioxidants",
    benefits: "Supports immunity, digestion, and bone health."
  },

  "Ladies Finger": {
    category: "Healthy",
    healthRate: "92/100",
    calories: "33 kcal per 100g",
    nutrition: "Fiber, Vitamin C, Folate",
    benefits: "Supports digestion and blood sugar control."
  },

  "Beetroot": {
    category: "Healthy",
    healthRate: "90/100",
    calories: "43 kcal per 100g",
    nutrition: "Folate, Fiber, Potassium",
    benefits: "Improves blood circulation and stamina."
  },

  "Burger": {
    category: "Junk Food",
    healthRate: "35/100",
    calories: "295 kcal per 100g",
    nutrition: "Protein, Fat, Carbohydrates, Sodium",
    benefits: "Provides quick energy but should be consumed in moderation."
  },

  "Fried Chicken": {
    category: "Junk Food",
    healthRate: "30/100",
    calories: "300 kcal per 100g",
    nutrition: "Protein, Fat, Sodium",
    benefits: "Provides protein but is high in unhealthy fats."
  },

  "Soft drinks": {
    category: "Junk Food",
    healthRate: "10/100",
    calories: "42 kcal per 100ml",
    nutrition: "Sugar",
    benefits: "Provides temporary energy but little nutritional value."
  },

  "Ice cream": {
    category: "Junk Food",
    healthRate: "25/100",
    calories: "207 kcal per 100g",
    nutrition: "Sugar, Fat, Calcium",
    benefits: "Contains calcium but is high in sugar."
  },

  "Pizza": {
    category: "Junk Food",
    healthRate: "40/100",
    calories: "266 kcal per 100g",
    nutrition: "Carbohydrates, Protein, Fat, Sodium",
    benefits: "Provides energy but often contains excess salt and fat."
  },

  "Chips": {
    category: "Junk Food",
    healthRate: "15/100",
    calories: "536 kcal per 100g",
    nutrition: "Carbohydrates, Fat, Sodium",
    benefits: "Provides energy but has low nutritional value."
  },

  "Oily Snacks": {
    category: "Junk Food",
    healthRate: "35/100",
    calories: "400 kcal per 100g",
    nutrition: "Carbohydrates, Fat, Small Amounts of Protein",
    benefits: "Can satisfy hunger but is often deep-fried."
  },

  "Cake": {
    category: "Junk Food",
    healthRate: "20/100",
    calories: "370 kcal per 100g",
    nutrition: "Sugar, Fat, Carbohydrates",
    benefits: "Provides energy but should be eaten occasionally."
  }
};
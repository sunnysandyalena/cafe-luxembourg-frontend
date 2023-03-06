const dishesData = [
    {
        id: 1,
        price: 14.00,
        img: 'soup.webp',
        name: 'Tomato Soup',
        description: 'Garnished with wipped ricotta cheese and crouton.',
        category: 'APPETIZERS'
    },
    {
        id: 2,
        price: 17.00,
        img: 'dumplings.webp',
        name: 'Chicken Dumplings Buffalo Style',
        description: '6 pieces steamed chicken dumplings tossed in home-made buffalo sauce served with blue cheese dipping sauce.',
        category: 'APPETIZERS'
    },
    {
        id: 3,
        price: 14.00,
        img: 'green-salad.webp',
        name: 'Mixed Greens Salad',
        description: 'Mixed lettuces salad dressed in roasted shallot-sherry vinaigrette.',
        category: 'APPETIZERS'
    },
    {
        id: 4,
        price: 22.00,
        img: 'nicoise-salad.webp',
        name: 'Niçoise Salad',
        description: 'Mixed greens, roasted red peppers, haricots verts, hard boiled egg, Yukon Gold potato, Niçoise olives, roasted shallot-sherry vinaigrette.',
        category: 'APPETIZERS'
    },
    {
        id: 5,
        price: 16.00,
        img: 'kale-salad.webp',
        name: 'Baby Kale Caesar Salad',
        description: 'Baby kale, shaved parmesan, croutons, creamy garlic dressing.',
        category: 'APPETIZERS'
    },
    {
        id: 6,
        price: 18.00,
        img: 'country-salad.webp',
        name: 'Country Frisée Salad',
        description: 'Frisée, croutons, blue cheese, bacon lardons, bacon vinaigrette.',
        category: 'APPETIZERS'
    },
    {
        id: 7,
        price: 22.00,
        img: 'grilled-cheese.webp',
        name: 'Grilled Cheese',
        description: 'Rye sourdough, aged cheddar cheese, tomato. Served with a side of French fries and dill pickle.',
        category: 'SANDWICHES'
    },
    {
        id: 8,
        price: 35.00,
        img: 'lobster-roll.webp',
        name: 'Lobster Roll',
        description: 'Pain de mie, celery, lemon aioli, pickled peppers. Served with a side of French fries.',
        category: 'SANDWICHES'
    },
    {
        id: 9,
        price: 29.00,
        img: 'tuna-burger.webp',
        name: 'Yellowfin Tuna Burger',
        description: 'Broiche bun, lettuce, tomato, onion, wasabi mayonnaise. Served with a side of French fries.',
        category: 'SANDWICHES'
    },
    {
        id: 10,
        price: 25.00,
        img: 'lux-burger.webp',
        name: 'Luxembourger',
        description: 'Brioche bun, lettuce, tomato, onion, Gruyère cheese, chipotle mayonnaise. Served with a side of french fries.',
        category: 'SANDWICHES'
    },
    {
        id: 11,
        price: 30.00,
        img: 'chicken-entree.webp',
        name: 'Roasted Half Chicken Au Jus',
        description: 'Roasted all-natural Sullivan County Farms chicken, whipped potatoes, glazed baby carrots, caramelized Brussels sprouts.',
        category: 'ENTREES'
    },
    {
        id: 12,
        price: 32.00,
        img: 'veal-bolognese.webp',
        name: 'White Veal Bolognese',
        description: 'Spaghetti, veal, pancetta, aged pecorino, sage.',
        category: 'ENTREES'
    },
    {
        id: 13,
        price: 35.00,
        img: 'duck-confit.webp',
        name: 'Duck Leg Confit',
        description: 'Long Island Crescent duck leg confit, white bean stew, escarole, butternut squash, pancetta.',
        category: 'ENTREES'
    },
    {
        id: 14,
        price: 30.00,
        img: 'salmon-entree.webp',
        name: 'Pan-Roasted Salmon',
        description: 'Pan-roasted Faroe Island salmon served over creamy parmesan polenta, beurre rouge, crispy sunchokes.',
        category: 'ENTREES'
    },
    {
        id: 15,
        price: 42.00,
        img: 'steak.webp',
        name: 'All-Natural Aged NY Strip Steak',
        description: '8oz NY Strip Steak served with a side of French fries.',
        category: 'ENTREES'
    },
    {
        id: 16,
        price: 11.00,
        img: 'asparagus.webp',
        name: 'Grilled Asparagus',
        description: 'Olive oil.',
        category: 'SIDES'
    },
    {
        id: 17,
        price: 11.00,
        img: 'brocollini.webp',
        name: 'Sautéed Brocollini',
        description: 'Served with toasted garlic.',
        category: 'SIDES'
    },
    {
        id: 18,
        price: 11.00,
        img: 'potatoes.webp',
        name: 'Whipped Potatoes',
        description: 'Garnished with chives.',
        category: 'SIDES'
    },
    {
        id: 19,
        price: 11.00,
        img: 'fries.webp',
        name: 'French Fries',
        description: 'Served with a side of chipotle mayonnaise',
        category: 'SIDES'
    },
    {
        id: 20,
        price: 11.00,
        img: 'mushrooms.webp',
        name: 'Forest Mushrooms',
        description: 'Cremini, oyster and shitake mushrooms served with olive oil and scallions',
        category: 'SIDES'
    },
    {
        id: 21,
        price: 13.00,
        img: 'dougnuts.webp',
        name: 'Cinnamon Sugar Doughnut Holes',
        description: '6 pieces served with raspberry and maple dipping sauces.',
        category: 'DESSERTS'
    },
    {
        id: 22,
        price: 12.00,
        img: 'banana-trifle.webp',
        name: 'Caramelized Banana Trifle',
        description: 'Vanilla custard, wafers, caramelized bananas, whipped cream.',
        category: 'DESSERTS'
    },
    {
        id: 23,
        price: 14.00,
        img: 'molten-cake.webp',
        name: 'Molten Chocolate Cake',
        description: 'Served with a scoop of vanilla ice-cream.',
        category: 'DESSERTS'
    },
    {
        id: 24,
        price: 13.00,
        img: 'toffi-pudding.webp',
        name: 'Sticky Toffee Pudding',
        description: 'Served with butterscotch sauce and whipped cream.',
        category: 'DESSERTS'
    },
    
]

export default dishesData;
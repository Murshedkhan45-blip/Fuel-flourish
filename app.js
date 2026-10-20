const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const meals={
Monday:[
["Breakfast","Greek yoghurt power bowl","10 min","🥣","Greek yoghurt, oats, banana, peanut butter","Put 200 g Greek yoghurt in a bowl. Add 40–60 g oats, a sliced banana and a spoon of peanut butter.","Approx. 25–30 g"],
["Lunch","Chicken and avocado wrap","20 min","🌯","150 g halal chicken breast, 1 wholemeal wrap, 1/2 avocado, lettuce, tomato, 1 tsp oil, paprika","Slice chicken and season. Pan-cook in a little oil until the centre reaches 75°C. Chop the vegetables and avocado, then fill the wrap.","Approx. 35–40 g"],
["Dinner","Salmon, potatoes and broccoli","30 min","🐟","1 salmon fillet, potatoes, broccoli, olive oil, lemon","Boil diced potatoes until tender. Bake salmon at 200°C for 12–18 minutes, depending on thickness, until cooked through. Steam broccoli and serve with lemon.","Approx. 30–35 g"],
["Snack","Milk and fruit","2 min","🍌","Milk, apple or banana","Pour a glass of milk and eat a piece of fruit.","Approx. 8 g"]
],
Tuesday:[
["Breakfast","Scrambled eggs on toast","10 min","🍳","3 eggs, wholemeal bread, milk, tomatoes","Beat eggs and cook gently in a lightly oiled pan until set. Serve with toast, tomato and milk.","Approx. 25–30 g"],
["Lunch","Chicken rice bowl","25 min","🍚","150 g chicken breast, rice, frozen vegetables, olive oil, seasoning","Cook rice according to the packet. Pan-cook seasoned diced chicken until it reaches 75°C. Heat vegetables and serve together.","Approx. 35–40 g"],
["Dinner","Beef and tomato pasta","25 min","🍝","150 g halal lean beef mince, wholewheat pasta, tinned tomatoes, onion, spinach","Boil pasta. Fry chopped onion and mince until browned and thoroughly cooked. Add tomatoes and spinach and simmer for 8–10 minutes. Mix with pasta.","Approx. 30–35 g"],
["Snack","Greek yoghurt and nuts","2 min","🥜","Greek yoghurt, mixed nuts","Serve yoghurt with a small handful of nuts.","Approx. 15–20 g"]
],
Wednesday:[
["Breakfast","Overnight oats","5 min prep","🥣","60 g oats, 200 ml milk, Greek yoghurt, berries, chia seeds","Mix oats, milk, a few spoonfuls of yoghurt and chia seeds. Refrigerate overnight. Add berries before eating.","Approx. 20 g"],
["Lunch","Tuna jacket potato","15 min prep","🥔","1 large potato, tinned tuna, Greek yoghurt, sweetcorn, salad","Pierce potato with a fork and microwave in intervals until soft. Drain tuna and mix with yoghurt and sweetcorn. Split potato and add filling.","Approx. 25–30 g"],
["Dinner","Chicken fajita wraps","25 min","🌯","150 g halal chicken, wholemeal wraps, peppers, onion, paprika, yoghurt","Slice chicken and vegetables. Fry with paprika and a little oil until chicken reaches 75°C. Serve in wraps with yoghurt.","Approx. 35–40 g"],
["Snack","Banana peanut butter toast","5 min","🍞","Wholemeal bread, banana, peanut butter","Toast bread, spread peanut butter and add sliced banana.","Approx. 8–12 g"]
],
Thursday:[
["Breakfast","Protein smoothie and toast","5 min","🥤","Milk, Greek yoghurt, banana, oats, peanut butter, wholemeal bread","Blend milk, yoghurt, banana, oats and peanut butter. Serve with toast. Or eat the ingredients separately if you don't have a blender.","Approx. 25–30 g"],
["Lunch","Egg and chickpea salad","15 min","🥗","2–3 eggs, tinned chickpeas, cucumber, tomato, salad leaves, olive oil","Boil eggs until firm. Drain and rinse chickpeas. Chop vegetables, slice eggs and combine with a little olive oil and lemon.","Approx. 20–25 g"],
["Dinner","Chicken traybake","35 min","🍗","150–200 g halal chicken, potatoes, carrots, broccoli, olive oil, herbs","Chop potatoes and carrots. Toss with a little oil and herbs. Roast with chicken at 200°C until vegetables are tender and chicken reaches 75°C. Add broccoli for the last 10–15 minutes.","Approx. 35–45 g"],
["Snack","Cottage cheese and fruit","2 min","🍍","Cottage cheese, pineapple or berries","Serve cottage cheese with fruit.","Approx. 12–18 g"]
],
Friday:[
["Breakfast","Egg and cheese sandwich","10 min","🥪","2–3 eggs, wholemeal bread, cheese, tomato","Scramble eggs until set. Put on bread with cheese and tomato.","Approx. 20–25 g"],
["Lunch","Chicken pesto pasta","20 min","🍝","150 g chicken, wholewheat pasta, pesto, spinach, cherry tomatoes","Boil pasta. Pan-cook diced chicken until it reaches 75°C. Stir in pesto, spinach and tomatoes; mix with pasta.","Approx. 35–40 g"],
["Dinner","Homemade beef burgers","25 min","🍔","150 g halal lean beef mince, wholemeal buns, lettuce, tomato, potatoes, plain yoghurt","Shape mince into patties and cook thoroughly. Cut potatoes into wedges and roast at 200°C until tender and golden. Serve in a bun with salad and yoghurt sauce.","Approx. 30–35 g"],
["Snack","Milk and nuts","2 min","🥛","Milk, mixed nuts","Have a glass of milk and a handful of nuts.","Approx. 12 g"]
],
Saturday:[
["Breakfast","Porridge with milk and nuts","8 min","🥣","Oats, milk, banana, nuts, Greek yoghurt","Cook oats with milk, stirring until creamy. Add sliced banana, nuts and yoghurt.","Approx. 20–25 g"],
["Lunch","Tuna and egg sandwich","12 min","🥪","Tinned tuna, 2 eggs, wholemeal bread, yoghurt, cucumber","Boil eggs. Drain tuna and mix with a little yoghurt. Add chopped egg and cucumber and make sandwiches.","Approx. 30 g"],
["Dinner","Chicken and bean chilli","30 min","🍲","150 g halal chicken mince or diced chicken, kidney beans, tinned tomatoes, peppers, rice, mild chilli seasoning","Cook chicken with chopped peppers. Add drained beans, tomatoes and seasoning. Simmer until chicken is fully cooked and the dish is piping hot. Serve with rice.","Approx. 30–40 g"],
["Snack","Greek yoghurt and berries","2 min","🫐","Greek yoghurt, berries, oats","Top yoghurt with berries and a sprinkle of oats.","Approx. 15–20 g"]
],
Sunday:[
["Breakfast","Mushroom and cheese omelette","12 min","🍳","3 eggs, mushrooms, cheese, wholemeal toast","Slice mushrooms and cook in a pan. Beat eggs, pour in and cook gently. Add cheese, fold once set and serve with toast.","Approx. 25 g"],
["Lunch","Chicken salad wrap","15 min","🌯","Cooked halal chicken, wholemeal wraps, lettuce, yoghurt, parmesan","Use safely stored cooked chicken and reheat until steaming hot. Mix yoghurt with parmesan and pepper. Wrap chicken and lettuce with sauce.","Approx. 30–40 g"],
["Dinner","Baked fish, rice and vegetables","25 min","🐟","1 white fish fillet, rice, peas, carrots, lemon, olive oil","Cook rice according to packet. Bake fish at 200°C for 12–18 minutes depending on thickness, until cooked through. Heat peas and carrots and add lemon.","Approx. 25–35 g"],
["Snack","Peanut butter toast and milk","5 min","🍞","Wholemeal bread, peanut butter, milk","Toast bread, spread peanut butter and drink a glass of milk.","Approx. 12 g"]
]};
const shopping=[
["Protein and dairy",["Halal chicken breast, about 1–1.2 kg","Halal lean beef mince, about 400 g","Salmon or white fish, 2 fillets","Tinned tuna, 2 tins","Eggs, 12","Greek yoghurt, 1 kg","Milk, 2 litres","Cottage cheese, 1 tub","Cheese or parmesan, 1 pack","Tinned chickpeas, 1 tin","Kidney beans, 1 tin"]],
["Carbohydrates",["Oats, 500 g","Wholemeal bread, 1 loaf","Wholemeal wraps, 1 pack","Wholewheat pasta, 1 pack","Rice, 1 pack","Potatoes, 1.5 kg","Wholemeal burger buns, 1 pack"]],
["Fruit and vegetables",["Bananas, 6–7","Apples, 2","Berries, fresh or frozen","Avocado, 1–2","Lettuce or salad leaves","Tomatoes and cherry tomatoes","Cucumber, 1","Peppers, 3","Onions, 3","Broccoli, 1–2 heads","Carrots, 1 bag","Spinach, 1 bag","Mushrooms, 1 pack","Frozen mixed vegetables, 1 bag","Lemon, 1–2","Tinned tomatoes, 2 tins","Sweetcorn, 1 tin"]],
["Cupboard basics",["Peanut butter","Mixed nuts","Chia seeds, optional","Olive oil","Pesto","Mild paprika and mixed herbs","Black pepper and salt"]]
];
const app=document.getElementById("app");let currentTab="plan",currentDay="Monday";
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function getSet(k){try{return new Set(JSON.parse(localStorage.getItem(k)||"[]"))}catch{return new Set()}}
function saveSet(k,s){localStorage.setItem(k,JSON.stringify([...s]))}
function render(){
 document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===currentTab));
 if(currentTab==="plan")renderPlan();else if(currentTab==="shop")renderShop();else renderProgress();
}
function renderPlan(){
 const done=getSet("mealsDone");
 app.innerHTML=`<h2 class="section-title">Your 7-day meal plan</h2><p class="small">Choose a day and open a recipe. Quantities are adjustable to your appetite.</p><div class="dayrow">${days.map(d=>`<button class="day ${d===currentDay?"active":""}" data-day="${d}">${d.slice(0,3)}</button>`).join("")}</div><h2>${currentDay}</h2><div class="mealgrid">${meals[currentDay].map((m,i)=>{const id=currentDay+"-"+m[1];return `<article class="card"><div class="mealhead"><div class="emoji">${m[3]}</div><div><div class="meta">${m[0]} · ${m[2]}</div><h3>${m[1]}</h3><div class="protein">${m[6]} protein (estimate)</div></div></div><details class="details"><summary>Ingredients &amp; cooking steps</summary><h4>Ingredients</h4><p>${escapeHTML(m[4])}</p><h4>How to make it</h4><p>${escapeHTML(m[5])}</p><div class="notice">Beginner tip: prepare ingredients first, use medium heat, and check poultry is cooked safely.</div></details><label class="checkrow"><input type="checkbox" data-meal="${escapeHTML(id)}" ${done.has(id)?"checked":""}> I made this meal</label></article>`}).join("")}</div><div class="notice">Aim for variety: fruit and vegetables, carbohydrates for energy, protein foods, dairy or fortified alternatives, and healthy fats. Add snacks if you are hungry.</div>`;
 app.querySelectorAll("[data-day]").forEach(b=>b.onclick=()=>{currentDay=b.dataset.day;render()});
 app.querySelectorAll("[data-meal]").forEach(c=>c.onchange=()=>{const s=getSet("mealsDone");c.checked?s.add(c.dataset.meal):s.delete(c.dataset.meal);saveSet("mealsDone",s)});
}
function renderShop(){
 const checks=getSet("shoppingDone"),all=shopping.flatMap(g=>g[1]);app.innerHTML=`<h2 class="section-title">Weekly shopping list</h2><p class="small">Approximate list for one person. Check your cupboards first and swap fresh produce for frozen if cheaper.</p><div class="card"><div class="barline"><strong>Shopping progress</strong><span>${checks.size} / ${all.length}</span></div><div class="progressbar" style="margin-top:10px"><span style="width:${checks.size/all.length*100}%"></span></div></div>${shopping.map((g,gi)=>`<section><h3 class="group-title">${g[0]}</h3><div class="card">${g[1].map((item,i)=>{const id=gi+"-"+i;return `<label class="checkrow"><input type="checkbox" data-shop="${id}" ${checks.has(id)?"checked":""}>${escapeHTML(item)}</label>`}).join("")}</div></section>`).join("")}<button class="primary" id="copyList">Copy shopping list</button> <button id="resetShop">Clear ticks</button>`;
 app.querySelectorAll("[data-shop]").forEach(c=>c.onchange=()=>{const s=getSet("shoppingDone");c.checked?s.add(c.dataset.shop):s.delete(c.dataset.shop);saveSet("shoppingDone",s);renderShop()});
 document.getElementById("resetShop").onclick=()=>{localStorage.removeItem("shoppingDone");renderShop()};
 document.getElementById("copyList").onclick=async()=>{const txt=shopping.map(g=>g[0]+"\n"+g[1].map(x=>"- "+x).join("\n")).join("\n\n");try{await navigator.clipboard.writeText(txt);alert("Shopping list copied!")}catch{prompt("Copy your shopping list:",txt)}};
}
function renderProgress(){
 const done=getSet("mealsDone"),total=Object.values(meals).flat().length;app.innerHTML=`<h2 class="section-title">Your progress</h2><div class="card"><h3>Meals completed</h3><h2>${done.size} / ${total}</h2><div class="progressbar"><span style="width:${done.size/total*100}%"></span></div><p class="small">This is a habit tracker, not a score you need to perfect.</p><button id="resetMeals">Reset weekly progress</button></div><div class="card"><h3>What matters most</h3><ul><li>Eat enough overall; avoid crash diets.</li><li>Include protein in meals.</li><li>Eat a variety of fruit and vegetables.</li><li>Build up strength training gradually.</li><li>Sleep well and recover.</li></ul></div><div class="notice">Losing fat and gaining muscle at the same time can happen, but results vary. Portions and protein needs depend on your body and activity.</div>`;
 document.getElementById("resetMeals").onclick=()=>{localStorage.removeItem("mealsDone");renderProgress()};
}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>{currentTab=b.dataset.tab;render()}));render();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) { window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(()=>{})); }

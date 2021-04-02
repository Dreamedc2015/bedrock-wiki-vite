import{o as n,c as t,d as a}from"./app.5b64b048.js";const s='{"title":"Egg Drops","description":"","frontmatter":{"layout":"page","title":"Egg Drops","parent":"Tutorials"},"headers":[{"level":2,"title":"Add loot table to BP entity","slug":"add-loot-table-to-bp-entity"},{"level":2,"title":"Create the loot table","slug":"create-the-loot-table"}],"relativePath":"tutorials/egg-drops.md","lastUpdated":1617396959275}',o={},e=a('<h1 id="egg-drops-in-loot-tables"><a class="header-anchor" href="#egg-drops-in-loot-tables" aria-hidden="true">#</a> Egg Drops in loot tables</h1><p>Beginner {: .label .label-green }</p><p>Here is how to make entities drop their own eggs when killed:</p><h2 id="add-loot-table-to-bp-entity"><a class="header-anchor" href="#add-loot-table-to-bp-entity" aria-hidden="true">#</a> Add loot table to BP entity</h2><div class="language-json"><pre><code><span class="token property">&quot;minecraft:loot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;table&quot;</span><span class="token operator">:</span> <span class="token string">&quot;loot_tables/entities/your_entity.json&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><h2 id="create-the-loot-table"><a class="header-anchor" href="#create-the-loot-table" aria-hidden="true">#</a> Create the loot table</h2><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;pools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;rolls&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;entries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>\n                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:spawn_egg&quot;</span><span class="token punctuation">,</span>\n                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                    <span class="token property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                        <span class="token punctuation">{</span>\n                            <span class="token property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set_actor_id&quot;</span><span class="token punctuation">,</span>\n                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;namespace:your_entity&quot;</span> <span class="token comment">// View notes below</span>\n                        <span class="token punctuation">}</span>\n                    <span class="token punctuation">]</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><strong>Notes:</strong> Change this to match your entity, or remove it to automatically use the ID of the entity that drops this loot table.</p>',8);o.render=function(a,s,o,p,l,r){return n(),t("div",null,[e])};export default o;export{s as __pageData};
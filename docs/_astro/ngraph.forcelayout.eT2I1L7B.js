import{a as ve}from"./@react-three.DzcfnNYH.js";import{r as pe}from"./ngraph.merge.B9WtB87t.js";import{n as X}from"./ngraph.events.C8F6FHEm.js";import{r as he}from"./ngraph.random.CzRKCPxx.js";var A={exports:{}},M={exports:{}},H=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const le=H;var I=function(e){return i;function i(d,a){let s=a&&a.indent||0,h=a&&a.join!==void 0?a.join:`
`,c=Array(s+1).join(" "),f=[];for(let u=0;u<e;++u){let v=le(u),C=u===0?"":c;f.push(C+d.replace(/{var}/g,v))}return f.join(h)}};const K=I;M.exports=ge;M.exports.generateCreateBodyFunctionBody=Y;M.exports.getVectorCode=ee;M.exports.getBodyCode=Z;function ge(r,e){let i=Y(r,e),{Body:d}=new Function(i)();return d}function Y(r,e){return`
${ee(r,e)}
${Z(r)}
return {Body: Body, Vector: Vector};
`}function Z(r){let e=K(r),i=e("{var}",{join:", "});return`
function Body(${i}) {
  this.isPinned = false;
  this.pos = new Vector(${i});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${i}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function ee(r,e){let i=K(r),d="";return e&&(d=`${i(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${i("{var}",{join:", "})}) {
  ${d}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${i('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${i("this.{var} = v.{var};",{indent:4})}
    } else {
      ${i('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${i("this.{var} = ",{join:""})}0;
  };`}var ye=M.exports,B={exports:{}};const D=I,x=H;B.exports=me;B.exports.generateQuadTreeFunctionBody=te;B.exports.getInsertStackCode=ae;B.exports.getQuadNodeCode=ie;B.exports.isSamePosition=re;B.exports.getChildBodyCode=oe;B.exports.setChildBodyCode=ne;function me(r){let e=te(r);return new Function(e)()}function te(r){let e=D(r),i=Math.pow(2,r);return`
${ae()}
${ie(r)}
${re(r)}
${oe(r)}
${ne(r)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${h("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${x(0)} - node.min_${x(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${s()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${a(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function a(c){let f=[],u=Array(c+1).join(" ");for(let v=0;v<r;++v)f.push(u+`if (${x(v)} > max_${x(v)}) {`),f.push(u+`  quadIdx = quadIdx + ${Math.pow(2,v)};`),f.push(u+`  min_${x(v)} = max_${x(v)};`),f.push(u+`  max_${x(v)} = node.max_${x(v)};`),f.push(u+"}");return f.join(`
`)}function s(){let c=Array(11).join(" "),f=[];for(let u=0;u<i;++u)f.push(c+`if (node.quad${u}) {`),f.push(c+`  queue[pushIdx] = node.quad${u};`),f.push(c+"  queueLength += 1;"),f.push(c+"  pushIdx += 1;"),f.push(c+"}");return f.join(`
`)}function h(c){let f=[];for(let u=0;u<i;++u)f.push(`${c}quad${u} = null;`);return f.join(`
`)}}function re(r){let e=D(r);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function ne(r){var e=Math.pow(2,r);return`
function setChild(node, idx, child) {
  ${i()}
}`;function i(){let d=[];for(let a=0;a<e;++a){let s=a===0?"  ":"  else ";d.push(`${s}if (idx === ${a}) node.quad${a} = child;`)}return d.join(`
`)}}function oe(r){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let i=[],d=Math.pow(2,r);for(let a=0;a<d;++a)i.push(`  if (idx === ${a}) return node.quad${a};`);return i.join(`
`)}}function ie(r){let e=D(r),i=Math.pow(2,r);var d=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${a("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return d;function a(s){let h=[];for(let c=0;c<i;++c)h.push(`${s}quad${c} = null;`);return h.join(`
`)}}function ae(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var be=B.exports,W={exports:{}};W.exports=Be;W.exports.generateFunctionBody=de;const xe=I;function Be(r){let e=de(r);return new Function("bodies","settings","random",e)}function de(r){let e=xe(r);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var we=W.exports,z={exports:{}};const $e=I;z.exports=Ce;z.exports.generateCreateDragForceFunctionBody=se;function Ce(r){let e=se(r);return new Function("options",e)}function se(r){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${$e(r)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var Fe=z.exports,G={exports:{}};const Se=I;G.exports=_e;G.exports.generateCreateSpringForceFunctionBody=ue;function _e(r){let e=ue(r);return new Function("options","random",e)}function ue(r){let e=Se(r);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var qe=G.exports,R={exports:{}};const Ie=I;R.exports=Ne;R.exports.generateIntegratorFunctionBody=ce;function Ne(r){let e=ce(r);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function ce(r){let e=Ie(r);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var Pe=R.exports,O,U;function Ee(){if(U)return O;U=1,O=r;function r(e,i,d,a){this.from=e,this.to=i,this.length=d,this.coefficient=a}return O}var fe=Ve,Me=ye,Te=be,je=we,Le=Fe,ke=qe,Qe=Pe,J={};function Ve(r){var e=Ee(),i=pe(),d=X;if(r){if(r.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(r.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}r=i(r,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var a=J[r.dimensions];if(!a){var s=r.dimensions;a={Body:Me(s,r.debug),createQuadTree:Te(s),createBounds:je(s),createDragForce:Le(s),createSpringForce:ke(s),integrate:Qe(s)},J[s]=a}var h=a.Body,c=a.createQuadTree,f=a.createBounds,u=a.createDragForce,v=a.createSpringForce,C=a.integrate,T=t=>new h(t),F=he().random(42),l=[],g=[],w=c(r,F),S=f(l,r,F),j=v(r,F),k=u(r),N=0,$=[],y=new Map,L=0;E("nbody",V),E("spring",n);var P={bodies:l,quadTree:w,springs:g,settings:r,addForce:E,removeForce:_,getForces:Q,step:function(){for(var t=0;t<$.length;++t)$[t](L);var o=C(l,r.timeStep,r.adaptiveTimeStepWeight);return L+=1,o},addBody:function(t){if(!t)throw new Error("Body is required");return l.push(t),t},addBodyAt:function(t){if(!t)throw new Error("Body position is required");var o=T(t);return l.push(o),o},removeBody:function(t){if(t){var o=l.indexOf(t);if(!(o<0))return l.splice(o,1),l.length===0&&S.reset(),!0}},addSpring:function(t,o,p,b){if(!t||!o)throw new Error("Cannot add null spring to force simulator");typeof p!="number"&&(p=-1);var q=new e(t,o,p,b>=0?b:-1);return g.push(q),q},getTotalMovement:function(){return N},removeSpring:function(t){if(t){var o=g.indexOf(t);if(o>-1)return g.splice(o,1),!0}},getBestNewBodyPosition:function(t){return S.getBestNewPosition(t)},getBBox:m,getBoundingBox:m,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(t){return t!==void 0?(r.gravity=t,w.options({gravity:t}),this):r.gravity},theta:function(t){return t!==void 0?(r.theta=t,w.options({theta:t}),this):r.theta},random:F};return Oe(r,P),d(P),P;function m(){return S.update(),S.box}function E(t,o){if(y.has(t))throw new Error("Force "+t+" is already added");y.set(t,o),$.push(o)}function _(t){var o=$.indexOf(y.get(t));o<0||($.splice(o,1),y.delete(t))}function Q(){return y}function V(){if(l.length!==0){w.insertBodies(l);for(var t=l.length;t--;){var o=l[t];o.isPinned||(o.reset(),w.updateBodyForce(o),k.update(o))}}}function n(){for(var t=g.length;t--;)j.update(g[t])}}function Oe(r,e){for(var i in r)Ae(r,e,i)}function Ae(r,e,i){if(r.hasOwnProperty(i)&&typeof e[i]!="function"){var d=Number.isFinite(r[i]);d?e[i]=function(a){if(a!==void 0){if(!Number.isFinite(a))throw new Error("Value of "+i+" should be a valid number.");return r[i]=a,e}return r[i]}:e[i]=function(a){return a!==void 0?(r[i]=a,e):r[i]}}}A.exports=We;A.exports.simulator=fe;var De=X;function We(r,e){if(!r)throw new Error("Graph structure cannot be undefined");var i=e&&e.createSimulator||fe,d=i(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var a=r.version>19?V:Q;e&&typeof e.nodeMass=="function"&&(a=e.nodeMass);var s=new Map,h={},c=0,f=d.settings.springTransform||ze;k(),w();var u=!1,v={step:function(){if(c===0)return C(!0),!0;var n=d.step();v.lastMove=n,v.fire("step");var t=n/c,o=t<=.01;return C(o),o},getNodePosition:function(n){return _(n).pos},setNodePosition:function(n){var t=_(n);t.setPosition.apply(t,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(n){var t=h[n];if(t)return{from:t.from.pos,to:t.to.pos}},getGraphRect:function(){return d.getBBox()},forEachBody:T,pinNode:function(n,t){var o=_(n.id);o.isPinned=!!t},isNodePinned:function(n){return _(n.id).isPinned},dispose:function(){r.off("changed",j),v.fire("disposed")},getBody:g,getSpring:l,getForceVectorLength:F,simulator:d,graph:r,lastMove:0};return De(v),v;function C(n){u!==n&&(u=n,S(n))}function T(n){s.forEach(n)}function F(){var n=0,t=0;return T(function(o){n+=Math.abs(o.force.x),t+=Math.abs(o.force.y)}),Math.sqrt(n*n+t*t)}function l(n,t){var o;if(t===void 0)typeof n!="object"?o=n:o=n.id;else{var p=r.hasLink(n,t);if(!p)return;o=p.id}return h[o]}function g(n){return s.get(n)}function w(){r.on("changed",j)}function S(n){v.fire("stable",n)}function j(n){for(var t=0;t<n.length;++t){var o=n[t];o.changeType==="add"?(o.node&&N(o.node.id),o.link&&y(o.link)):o.changeType==="remove"&&(o.node&&$(o.node),o.link&&L(o.link))}c=r.getNodesCount()}function k(){c=0,r.forEachNode(function(n){N(n.id),c+=1}),r.forEachLink(y)}function N(n){var t=s.get(n);if(!t){var o=r.getNode(n);if(!o)throw new Error("initBody() was called with unknown node id");var p=o.position;if(!p){var b=P(o);p=d.getBestNewBodyPosition(b)}t=d.addBodyAt(p),t.id=n,s.set(n,t),m(n),E(o)&&(t.isPinned=!0)}}function $(n){var t=n.id,o=s.get(t);o&&(s.delete(t),d.removeBody(o))}function y(n){m(n.fromId),m(n.toId);var t=s.get(n.fromId),o=s.get(n.toId),p=d.addSpring(t,o,n.length);f(n,p),h[n.id]=p}function L(n){var t=h[n.id];if(t){var o=r.getNode(n.fromId),p=r.getNode(n.toId);o&&m(o.id),p&&m(p.id),delete h[n.id],d.removeSpring(t)}}function P(n){var t=[];if(!n.links)return t;for(var o=Math.min(n.links.length,2),p=0;p<o;++p){var b=n.links[p],q=b.fromId!==n.id?s.get(b.fromId):s.get(b.toId);q&&q.pos&&t.push(q)}return t}function m(n){var t=s.get(n);if(t.mass=a(n),Number.isNaN(t.mass))throw new Error("Node mass should be a number")}function E(n){return n&&(n.isPinned||n.data&&n.data.isPinned)}function _(n){var t=s.get(n);return t||(N(n),t=s.get(n)),t}function Q(n){var t=r.getLinks(n);return t?1+t.length/3:1}function V(n){var t=r.getLinks(n);return t?1+t.size/3:1}}function ze(){}var Ge=A.exports;const He=ve(Ge);export{He as f};

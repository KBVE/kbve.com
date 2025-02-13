import{a as me}from"./@react-three.BOv1JqT7.js";import{r as be}from"./ngraph.merge.B9WtB87t.js";import{r as he}from"./ngraph.events.CKJmVecw.js";import{r as xe}from"./ngraph.random.CzRKCPxx.js";var O={exports:{}},k={exports:{}},H,te;function le(){return te||(te=1,H=function(d){return d===0?"x":d===1?"y":d===2?"z":"c"+(d+1)}),H}var K,ne;function Q(){if(ne)return K;ne=1;const y=le();return K=function(l){return i;function i(t,f){let c=f&&f.indent||0,m=f&&f.join!==void 0?f.join:`
`,v=Array(c+1).join(" "),s=[];for(let e=0;e<l;++e){let b=y(e),u=e===0?"":v;s.push(u+t.replace(/{var}/g,b))}return s.join(m)}},K}var oe;function Be(){if(oe)return k.exports;oe=1;const y=Q();k.exports=d,k.exports.generateCreateBodyFunctionBody=l,k.exports.getVectorCode=t,k.exports.getBodyCode=i;function d(f,c){let m=l(f,c),{Body:v}=new Function(m)();return v}function l(f,c){return`
${t(f,c)}
${i(f)}
return {Body: Body, Vector: Vector};
`}function i(f){let c=y(f),m=c("{var}",{join:", "});return`
function Body(${m}) {
  this.isPinned = false;
  this.pos = new Vector(${m});
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

Body.prototype.setPosition = function (${m}) {
  ${c("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function t(f,c){let m=y(f),v="";return c&&(v=`${m(`
	   var v{var};
	Object.defineProperty(this, '{var}', {
	  set: function(v) { 
	    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
	    v{var} = v; 
	  },
	  get: function() { return v{var}; }
	});`)}`),`function Vector(${m("{var}",{join:", "})}) {
  ${v}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${m('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${m("this.{var} = v.{var};",{indent:4})}
    } else {
      ${m('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${m("this.{var} = ",{join:""})}0;
  };`}return k.exports}var _={exports:{}},ie;function we(){if(ie)return _.exports;ie=1;const y=Q(),d=le();_.exports=l,_.exports.generateQuadTreeFunctionBody=i,_.exports.getInsertStackCode=v,_.exports.getQuadNodeCode=m,_.exports.isSamePosition=t,_.exports.getChildBodyCode=c,_.exports.setChildBodyCode=f;function l(s){let e=i(s);return new Function(e)()}function i(s){let e=y(s),b=Math.pow(2,s);return`
${v()}
${m(s)}
${t(s)}
${c(s)}
${f(s)}

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
${C("      node.")}
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
        if ((node.max_${d(0)} - node.min_${d(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${h()}
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

${p(8)}

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

`;function p($){let x=[],w=Array($+1).join(" ");for(let F=0;F<s;++F)x.push(w+`if (${d(F)} > max_${d(F)}) {`),x.push(w+`  quadIdx = quadIdx + ${Math.pow(2,F)};`),x.push(w+`  min_${d(F)} = max_${d(F)};`),x.push(w+`  max_${d(F)} = node.max_${d(F)};`),x.push(w+"}");return x.join(`
`)}function h(){let $=Array(11).join(" "),x=[];for(let w=0;w<b;++w)x.push($+`if (node.quad${w}) {`),x.push($+`  queue[pushIdx] = node.quad${w};`),x.push($+"  queueLength += 1;"),x.push($+"  pushIdx += 1;"),x.push($+"}");return x.join(`
`)}function C($){let x=[];for(let w=0;w<b;++w)x.push(`${$}quad${w} = null;`);return x.join(`
`)}}function t(s){let e=y(s);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function f(s){var e=Math.pow(2,s);return`
function setChild(node, idx, child) {
  ${b()}
}`;function b(){let u=[];for(let p=0;p<e;++p){let h=p===0?"  ":"  else ";u.push(`${h}if (idx === ${p}) node.quad${p} = child;`)}return u.join(`
`)}}function c(s){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let b=[],u=Math.pow(2,s);for(let p=0;p<u;++p)b.push(`  if (idx === ${p}) return node.quad${p};`);return b.join(`
`)}}function m(s){let e=y(s),b=Math.pow(2,s);var u=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${p("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return u;function p(h){let C=[];for(let $=0;$<b;++$)C.push(`${h}quad${$} = null;`);return C.join(`
`)}}function v(){return`
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
`}return _.exports}var D={exports:{}},ae;function $e(){if(ae)return D.exports;ae=1,D.exports=d,D.exports.generateFunctionBody=l;const y=Q();function d(i){let t=l(i);return new Function("bodies","settings","random",t)}function l(i){let t=y(i);return`
  var boundingBox = {
    ${t("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${t("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${t("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${t("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${t("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${t("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${t("var max_{var} = -Infinity;",{indent:4})}
    ${t("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${t("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${t("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${t("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${t("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${t("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}return D.exports}var A={exports:{}},de;function Ce(){if(de)return A.exports;de=1;const y=Q();A.exports=d,A.exports.generateCreateDragForceFunctionBody=l;function d(i){let t=l(i);return new Function("options",t)}function l(i){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${y(i)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}return A.exports}var R={exports:{}},se;function qe(){if(se)return R.exports;se=1;const y=Q();R.exports=d,R.exports.generateCreateSpringForceFunctionBody=l;function d(i){let t=l(i);return new Function("options","random",t)}function l(i){let t=y(i);return`
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
      ${t("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${t("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${t("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${t("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${t("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${t("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}return R.exports}var W={exports:{}},ue;function Fe(){if(ue)return W.exports;ue=1;const y=Q();W.exports=d,W.exports.generateIntegratorFunctionBody=l;function d(i){let t=l(i);return new Function("bodies","timeStep","adaptiveTimeStepWeight",t)}function l(i){let t=y(i);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${t("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${t("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${t("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${t("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${t("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${t("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${t("body.pos.{var} += d{var};",{indent:4})}

    ${t("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${t("t{var} * t{var}",{join:" + "})})/length;
`}return W.exports}var Y,ce;function Se(){if(ce)return Y;ce=1,Y=y;function y(d,l,i,t){this.from=d,this.to=l,this.length=i,this.coefficient=t}return Y}var Z,fe;function ve(){if(fe)return Z;fe=1,Z=m;var y=Be(),d=we(),l=$e(),i=Ce(),t=qe(),f=Fe(),c={};function m(e){var b=Se(),u=be(),p=he();if(e){if(e.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(e.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}e=u(e,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var h=c[e.dimensions];if(!h){var C=e.dimensions;h={Body:y(C,e.debug),createQuadTree:d(C),createBounds:l(C),createDragForce:i(C),createSpringForce:t(C),integrate:f(C)},c[C]=h}var $=h.Body,x=h.createQuadTree,w=h.createBounds,F=h.createDragForce,z=h.createSpringForce,G=h.integrate,U=o=>new $(o),I=xe().random(42),q=[],S=[],N=x(e,I),E=w(q,e,I),P=z(e,I),J=F(e),L=0,M=[],T=new Map,r=0;B("nbody",ge),B("spring",ye);var n={bodies:q,quadTree:N,springs:S,settings:e,addForce:B,removeForce:j,getForces:V,step:function(){for(var o=0;o<M.length;++o)M[o](r);var g=G(q,e.timeStep,e.adaptiveTimeStepWeight);return r+=1,g},addBody:function(o){if(!o)throw new Error("Body is required");return q.push(o),o},addBodyAt:function(o){if(!o)throw new Error("Body position is required");var g=U(o);return q.push(g),g},removeBody:function(o){if(o){var g=q.indexOf(o);if(!(g<0))return q.splice(g,1),q.length===0&&E.reset(),!0}},addSpring:function(o,g,X,ee){if(!o||!g)throw new Error("Cannot add null spring to force simulator");typeof X!="number"&&(X=-1);var re=new b(o,g,X,ee>=0?ee:-1);return S.push(re),re},getTotalMovement:function(){return L},removeSpring:function(o){if(o){var g=S.indexOf(o);if(g>-1)return S.splice(g,1),!0}},getBestNewBodyPosition:function(o){return E.getBestNewPosition(o)},getBBox:a,getBoundingBox:a,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(o){return o!==void 0?(e.gravity=o,N.options({gravity:o}),this):e.gravity},theta:function(o){return o!==void 0?(e.theta=o,N.options({theta:o}),this):e.theta},random:I};return v(e,n),p(n),n;function a(){return E.update(),E.box}function B(o,g){if(T.has(o))throw new Error("Force "+o+" is already added");T.set(o,g),M.push(g)}function j(o){var g=M.indexOf(T.get(o));g<0||(M.splice(g,1),T.delete(o))}function V(){return T}function ge(){if(q.length!==0){N.insertBodies(q);for(var o=q.length;o--;){var g=q[o];g.isPinned||(g.reset(),N.updateBodyForce(g),J.update(g))}}}function ye(){for(var o=S.length;o--;)P.update(S[o])}}function v(e,b){for(var u in e)s(e,b,u)}function s(e,b,u){if(e.hasOwnProperty(u)&&typeof b[u]!="function"){var p=Number.isFinite(e[u]);p?b[u]=function(h){if(h!==void 0){if(!Number.isFinite(h))throw new Error("Value of "+u+" should be a valid number.");return e[u]=h,b}return e[u]}:b[u]=function(h){return h!==void 0?(e[u]=h,b):e[u]}}}return Z}var pe;function _e(){if(pe)return O.exports;pe=1,O.exports=d,O.exports.simulator=ve();var y=he();function d(i,t){if(!i)throw new Error("Graph structure cannot be undefined");var f=t&&t.createSimulator||ve(),c=f(t);if(Array.isArray(t))throw new Error("Physics settings is expected to be an object");var m=i.version>19?T:M;t&&typeof t.nodeMass=="function"&&(m=t.nodeMass);var v=new Map,s={},e=0,b=c.settings.springTransform||l;U(),F();var u=!1,p={step:function(){if(e===0)return h(!0),!0;var r=c.step();p.lastMove=r,p.fire("step");var n=r/e,a=n<=.01;return h(a),a},getNodePosition:function(r){return L(r).pos},setNodePosition:function(r){var n=L(r);n.setPosition.apply(n,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(r){var n=s[r];if(n)return{from:n.from.pos,to:n.to.pos}},getGraphRect:function(){return c.getBBox()},forEachBody:C,pinNode:function(r,n){var a=L(r.id);a.isPinned=!!n},isNodePinned:function(r){return L(r.id).isPinned},dispose:function(){i.off("changed",G),p.fire("disposed")},getBody:w,getSpring:x,getForceVectorLength:$,simulator:c,graph:i,lastMove:0};return y(p),p;function h(r){u!==r&&(u=r,z(r))}function C(r){v.forEach(r)}function $(){var r=0,n=0;return C(function(a){r+=Math.abs(a.force.x),n+=Math.abs(a.force.y)}),Math.sqrt(r*r+n*n)}function x(r,n){var a;if(n===void 0)typeof r!="object"?a=r:a=r.id;else{var B=i.hasLink(r,n);if(!B)return;a=B.id}return s[a]}function w(r){return v.get(r)}function F(){i.on("changed",G)}function z(r){p.fire("stable",r)}function G(r){for(var n=0;n<r.length;++n){var a=r[n];a.changeType==="add"?(a.node&&I(a.node.id),a.link&&S(a.link)):a.changeType==="remove"&&(a.node&&q(a.node),a.link&&N(a.link))}e=i.getNodesCount()}function U(){e=0,i.forEachNode(function(r){I(r.id),e+=1}),i.forEachLink(S)}function I(r){var n=v.get(r);if(!n){var a=i.getNode(r);if(!a)throw new Error("initBody() was called with unknown node id");var B=a.position;if(!B){var j=E(a);B=c.getBestNewBodyPosition(j)}n=c.addBodyAt(B),n.id=r,v.set(r,n),P(r),J(a)&&(n.isPinned=!0)}}function q(r){var n=r.id,a=v.get(n);a&&(v.delete(n),c.removeBody(a))}function S(r){P(r.fromId),P(r.toId);var n=v.get(r.fromId),a=v.get(r.toId),B=c.addSpring(n,a,r.length);b(r,B),s[r.id]=B}function N(r){var n=s[r.id];if(n){var a=i.getNode(r.fromId),B=i.getNode(r.toId);a&&P(a.id),B&&P(B.id),delete s[r.id],c.removeSpring(n)}}function E(r){var n=[];if(!r.links)return n;for(var a=Math.min(r.links.length,2),B=0;B<a;++B){var j=r.links[B],V=j.fromId!==r.id?v.get(j.fromId):v.get(j.toId);V&&V.pos&&n.push(V)}return n}function P(r){var n=v.get(r);if(n.mass=m(r),Number.isNaN(n.mass))throw new Error("Node mass should be a number")}function J(r){return r&&(r.isPinned||r.data&&r.data.isPinned)}function L(r){var n=v.get(r);return n||(I(r),n=v.get(r)),n}function M(r){var n=i.getLinks(r);return n?1+n.length/3:1}function T(r){var n=i.getLinks(r);return n?1+n.size/3:1}}function l(){}return O.exports}var Ie=_e();const je=me(Ie);export{je as f};

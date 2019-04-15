Module['stl'] = Module['stl'] || {};
Module['mud'] = Module['mud'] || {};
// BulletMedium
function BulletMedium() { throw "cannot construct a BulletMedium, no constructor in IDL" }
BulletMedium.prototype = Object.create(WrapperObject.prototype);
BulletMedium.prototype.constructor = BulletMedium;
BulletMedium.prototype.__class = BulletMedium;
BulletMedium.__cache = {};
Module['BulletMedium'] = BulletMedium;
BulletMedium.prototype["__destroy"] = BulletMedium.prototype.__destroy = function() {
    _toy_BulletMedium__destroy(this.__ptr);
};
// BulletShape
function BulletShape() { throw "cannot construct a BulletShape, no constructor in IDL" }
BulletShape.prototype = Object.create(WrapperObject.prototype);
BulletShape.prototype.constructor = BulletShape;
BulletShape.prototype.__class = BulletShape;
BulletShape.__cache = {};
Module['BulletShape'] = BulletShape;
BulletShape.prototype["__destroy"] = BulletShape.prototype.__destroy = function() {
    _toy_BulletShape__destroy(this.__ptr);
};
// Camera
function Camera(a0, a1, a2) {
    if (a0 === undefined) { this.__ptr = _toy_Camera__construct_0(); this.__type = Camera.__type; getCache(Camera)[this.__ptr] = this; return; }
    if (a1 === undefined) { this.__ptr = _toy_Camera__construct_1(/*distance*/a0); this.__type = Camera.__type; getCache(Camera)[this.__ptr] = this; return; }
    if (a2 === undefined) { this.__ptr = _toy_Camera__construct_2(/*distance*/a0, /*near*/a1); this.__type = Camera.__type; getCache(Camera)[this.__ptr] = this; return; }
    this.__ptr = _toy_Camera__construct_3(/*distance*/a0, /*near*/a1, /*far*/a2); this.__type = Camera.__type; getCache(Camera)[this.__ptr] = this;
};
Camera.prototype = Object.create(WrapperObject.prototype);
Camera.prototype.constructor = Camera;
Camera.prototype.__class = Camera;
Camera.__cache = {};
Module['Camera'] = Camera;
Object.defineProperty(Camera.prototype, "lens_distance", {
    get: function() {
        return _toy_Camera__get_lens_distance(this.__ptr);
    },
    set: function(value) {
        _toy_Camera__set_lens_distance(this.__ptr, value);
    }
});
Object.defineProperty(Camera.prototype, "lens_angle", {
    get: function() {
        return _toy_Camera__get_lens_angle(this.__ptr);
    },
    set: function(value) {
        _toy_Camera__set_lens_angle(this.__ptr, value);
    }
});
Object.defineProperty(Camera.prototype, "near", {
    get: function() {
        return _toy_Camera__get_near(this.__ptr);
    },
    set: function(value) {
        _toy_Camera__set_near(this.__ptr, value);
    }
});
Object.defineProperty(Camera.prototype, "far", {
    get: function() {
        return _toy_Camera__get_far(this.__ptr);
    },
    set: function(value) {
        _toy_Camera__set_far(this.__ptr, value);
    }
});
Object.defineProperty(Camera.prototype, "aspect", {
    get: function() {
        return _toy_Camera__get_aspect(this.__ptr);
    },
    set: function(value) {
        _toy_Camera__set_aspect(this.__ptr, value);
    }
});
Camera.prototype["__destroy"] = Camera.prototype.__destroy = function() {
    _toy_Camera__destroy(this.__ptr);
};
// Collider
function Collider(a0, a1, a2, a3, a4) {
    if (a0 === undefined) { this.__ptr = _toy_Collider__construct_0(); this.__type = Collider.__type; getCache(Collider)[this.__ptr] = this; return; }
    this.__ptr = _toy_Collider__construct_5(/*spatial*/a0.__ptr, /*movable*/a1.__ptr, /*collision_shape*/a2.__ptr, /*medium*/a3.__ptr, /*group*/a4); this.__type = Collider.__type; getCache(Collider)[this.__ptr] = this;
};
Collider.prototype = Object.create(WrapperObject.prototype);
Collider.prototype.constructor = Collider;
Collider.prototype.__class = Collider;
Collider.__cache = {};
Module['Collider'] = Collider;
Object.defineProperty(Collider.prototype, "spatial", {
    get: function() {
        return wrapPointer(_toy_Collider__get_spatial(this.__ptr), ComponentHandle_toy_Spatial);
    },
    set: function(value) {
        _toy_Collider__set_spatial(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Collider.prototype, "movable", {
    get: function() {
        return wrapPointer(_toy_Collider__get_movable(this.__ptr), ComponentHandle_toy_Movable);
    },
    set: function(value) {
        _toy_Collider__set_movable(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Collider.prototype, "collision_shape", {
    get: function() {
        return wrapPointer(_toy_Collider__get_collision_shape(this.__ptr), CollisionShape);
    }});
Object.defineProperty(Collider.prototype, "medium", {
    get: function() {
        return wrapPointer(_toy_Collider__get_medium(this.__ptr), Medium);
    },
    set: function(value) {
        _toy_Collider__set_medium(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Collider.prototype, "group", {
    get: function() {
        return _toy_Collider__get_group(this.__ptr);
    },
    set: function(value) {
        _toy_Collider__set_group(this.__ptr, value);
    }
});
Object.defineProperty(Collider.prototype, "object", {
    get: function() {
        return wrapPointer(_toy_Collider__get_object(this.__ptr), ColliderObject);
    },
    set: function(value) {
        _toy_Collider__set_object(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Collider.prototype, "impl", {
    get: function() {
        return wrapPointer(_toy_Collider__get_impl(this.__ptr), ColliderImpl);
    }});
Collider.prototype["__destroy"] = Collider.prototype.__destroy = function() {
    _toy_Collider__destroy(this.__ptr);
};
// ColliderImpl
function ColliderImpl() { throw "cannot construct a ColliderImpl, no constructor in IDL" }
ColliderImpl.prototype = Object.create(WrapperObject.prototype);
ColliderImpl.prototype.constructor = ColliderImpl;
ColliderImpl.prototype.__class = ColliderImpl;
ColliderImpl.__cache = {};
Module['ColliderImpl'] = ColliderImpl;
ColliderImpl.prototype["__destroy"] = ColliderImpl.prototype.__destroy = function() {
    _toy_ColliderImpl__destroy(this.__ptr);
};
// ColliderObject
function ColliderObject() { throw "cannot construct a ColliderObject, no constructor in IDL" }
ColliderObject.prototype = Object.create(WrapperObject.prototype);
ColliderObject.prototype.constructor = ColliderObject;
ColliderObject.prototype.__class = ColliderObject;
ColliderObject.__cache = {};
Module['ColliderObject'] = ColliderObject;
ColliderObject.prototype["__destroy"] = ColliderObject.prototype.__destroy = function() {
    _toy_ColliderObject__destroy(this.__ptr);
};
// Collision
function Collision() {
    this.__ptr = _toy_Collision__construct_0(); this.__type = Collision.__type; getCache(Collision)[this.__ptr] = this;
};
Collision.prototype = Object.create(WrapperObject.prototype);
Collision.prototype.constructor = Collision;
Collision.prototype.__class = Collision;
Collision.__cache = {};
Module['Collision'] = Collision;
Object.defineProperty(Collision.prototype, "first", {
    get: function() {
        return wrapPointer(_toy_Collision__get_first(this.__ptr), SparseHandle_toy_Collider);
    },
    set: function(value) {
        _toy_Collision__set_first(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Collision.prototype, "second", {
    get: function() {
        return wrapPointer(_toy_Collision__get_second(this.__ptr), SparseHandle_toy_Collider);
    },
    set: function(value) {
        _toy_Collision__set_second(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Collision.prototype, "hit_point", {
    get: function() {
        return wrapPointer(_toy_Collision__get_hit_point(this.__ptr), v3_float);
    },
    set: function(value) {
        _toy_Collision__set_hit_point(this.__ptr, value.__ptr);
    }
});
Collision.prototype["__destroy"] = Collision.prototype.__destroy = function() {
    _toy_Collision__destroy(this.__ptr);
};
// CollisionShape
function CollisionShape(a0, a1, a2) {
    if (a0 === undefined) { this.__ptr = _toy_CollisionShape__construct_0(); this.__type = CollisionShape.__type; getCache(CollisionShape)[this.__ptr] = this; return; }
    if (a1 === undefined) { this.__ptr = _toy_CollisionShape__construct_1(/*shape*/a0.__ptr); this.__type = CollisionShape.__type; getCache(CollisionShape)[this.__ptr] = this; return; }
    if (a2 === undefined) { this.__ptr = _toy_CollisionShape__construct_2(/*shape*/a0.__ptr, /*center*/a1.__ptr); this.__type = CollisionShape.__type; getCache(CollisionShape)[this.__ptr] = this; return; }
    this.__ptr = _toy_CollisionShape__construct_3(/*shape*/a0.__ptr, /*center*/a1.__ptr, /*margin*/a2); this.__type = CollisionShape.__type; getCache(CollisionShape)[this.__ptr] = this;
};
CollisionShape.prototype = Object.create(WrapperObject.prototype);
CollisionShape.prototype.constructor = CollisionShape;
CollisionShape.prototype.__class = CollisionShape;
CollisionShape.__cache = {};
Module['CollisionShape'] = CollisionShape;
CollisionShape.prototype["__destroy"] = CollisionShape.prototype.__destroy = function() {
    _toy_CollisionShape__destroy(this.__ptr);
};
// ComponentHandle<toy::Camera>
function ComponentHandle_toy_Camera() {
    this.__ptr = _mud_ComponentHandle_toy_Camera__construct_0(); this.__type = ComponentHandle_toy_Camera.__type; getCache(ComponentHandle_toy_Camera)[this.__ptr] = this;
};
ComponentHandle_toy_Camera.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Camera.prototype.constructor = ComponentHandle_toy_Camera;
ComponentHandle_toy_Camera.prototype.__class = ComponentHandle_toy_Camera;
ComponentHandle_toy_Camera.__cache = {};
Module['mud']['ComponentHandle_toy_Camera'] = ComponentHandle_toy_Camera;
ComponentHandle_toy_Camera.prototype["__destroy"] = ComponentHandle_toy_Camera.prototype.__destroy = function() {
    _mud_ComponentHandle_toy_Camera__destroy(this.__ptr);
};
// ComponentHandle<toy::Emitter>
function ComponentHandle_toy_Emitter() {
    this.__ptr = _mud_ComponentHandle_toy_Emitter__construct_0(); this.__type = ComponentHandle_toy_Emitter.__type; getCache(ComponentHandle_toy_Emitter)[this.__ptr] = this;
};
ComponentHandle_toy_Emitter.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Emitter.prototype.constructor = ComponentHandle_toy_Emitter;
ComponentHandle_toy_Emitter.prototype.__class = ComponentHandle_toy_Emitter;
ComponentHandle_toy_Emitter.__cache = {};
Module['mud']['ComponentHandle_toy_Emitter'] = ComponentHandle_toy_Emitter;
ComponentHandle_toy_Emitter.prototype["__destroy"] = ComponentHandle_toy_Emitter.prototype.__destroy = function() {
    _mud_ComponentHandle_toy_Emitter__destroy(this.__ptr);
};
// ComponentHandle<toy::EntityScript>
function ComponentHandle_toy_EntityScript() {
    this.__ptr = _mud_ComponentHandle_toy_EntityScript__construct_0(); this.__type = ComponentHandle_toy_EntityScript.__type; getCache(ComponentHandle_toy_EntityScript)[this.__ptr] = this;
};
ComponentHandle_toy_EntityScript.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_EntityScript.prototype.constructor = ComponentHandle_toy_EntityScript;
ComponentHandle_toy_EntityScript.prototype.__class = ComponentHandle_toy_EntityScript;
ComponentHandle_toy_EntityScript.__cache = {};
Module['mud']['ComponentHandle_toy_EntityScript'] = ComponentHandle_toy_EntityScript;
ComponentHandle_toy_EntityScript.prototype["__destroy"] = ComponentHandle_toy_EntityScript.prototype.__destroy = function() {
    _mud_ComponentHandle_toy_EntityScript__destroy(this.__ptr);
};
// ComponentHandle<toy::Movable>
function ComponentHandle_toy_Movable() {
    this.__ptr = _mud_ComponentHandle_toy_Movable__construct_0(); this.__type = ComponentHandle_toy_Movable.__type; getCache(ComponentHandle_toy_Movable)[this.__ptr] = this;
};
ComponentHandle_toy_Movable.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Movable.prototype.constructor = ComponentHandle_toy_Movable;
ComponentHandle_toy_Movable.prototype.__class = ComponentHandle_toy_Movable;
ComponentHandle_toy_Movable.__cache = {};
Module['mud']['ComponentHandle_toy_Movable'] = ComponentHandle_toy_Movable;
ComponentHandle_toy_Movable.prototype["__destroy"] = ComponentHandle_toy_Movable.prototype.__destroy = function() {
    _mud_ComponentHandle_toy_Movable__destroy(this.__ptr);
};
// ComponentHandle<toy::Navblock>
function ComponentHandle_toy_Navblock() {
    this.__ptr = _mud_ComponentHandle_toy_Navblock__construct_0(); this.__type = ComponentHandle_toy_Navblock.__type; getCache(ComponentHandle_toy_Navblock)[this.__ptr] = this;
};
ComponentHandle_toy_Navblock.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Navblock.prototype.constructor = ComponentHandle_toy_Navblock;
ComponentHandle_toy_Navblock.prototype.__class = ComponentHandle_toy_Navblock;
ComponentHandle_toy_Navblock.__cache = {};
Module['mud']['ComponentHandle_toy_Navblock'] = ComponentHandle_toy_Navblock;
ComponentHandle_toy_Navblock.prototype["__destroy"] = ComponentHandle_toy_Navblock.prototype.__destroy = function() {
    _mud_ComponentHandle_toy_Navblock__destroy(this.__ptr);
};
// ComponentHandle<toy::Origin>
function ComponentHandle_toy_Origin() {
    this.__ptr = _mud_ComponentHandle_toy_Origin__construct_0(); this.__type = ComponentHandle_toy_Origin.__type; getCache(ComponentHandle_toy_Origin)[this.__ptr] = this;
};
ComponentHandle_toy_Origin.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Origin.prototype.constructor = ComponentHandle_toy_Origin;
ComponentHandle_toy_Origin.prototype.__class = ComponentHandle_toy_Origin;
ComponentHandle_toy_Origin.__cache = {};
Module['mud']['ComponentHandle_toy_Origin'] = ComponentHandle_toy_Origin;
ComponentHandle_toy_Origin.prototype["__destroy"] = ComponentHandle_toy_Origin.prototype.__destroy = function() {
    _mud_ComponentHandle_toy_Origin__destroy(this.__ptr);
};
// ComponentHandle<toy::Receptor>
function ComponentHandle_toy_Receptor() {
    this.__ptr = _mud_ComponentHandle_toy_Receptor__construct_0(); this.__type = ComponentHandle_toy_Receptor.__type; getCache(ComponentHandle_toy_Receptor)[this.__ptr] = this;
};
ComponentHandle_toy_Receptor.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Receptor.prototype.constructor = ComponentHandle_toy_Receptor;
ComponentHandle_toy_Receptor.prototype.__class = ComponentHandle_toy_Receptor;
ComponentHandle_toy_Receptor.__cache = {};
Module['mud']['ComponentHandle_toy_Receptor'] = ComponentHandle_toy_Receptor;
ComponentHandle_toy_Receptor.prototype["__destroy"] = ComponentHandle_toy_Receptor.prototype.__destroy = function() {
    _mud_ComponentHandle_toy_Receptor__destroy(this.__ptr);
};
// ComponentHandle<toy::Spatial>
function ComponentHandle_toy_Spatial() {
    this.__ptr = _mud_ComponentHandle_toy_Spatial__construct_0(); this.__type = ComponentHandle_toy_Spatial.__type; getCache(ComponentHandle_toy_Spatial)[this.__ptr] = this;
};
ComponentHandle_toy_Spatial.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Spatial.prototype.constructor = ComponentHandle_toy_Spatial;
ComponentHandle_toy_Spatial.prototype.__class = ComponentHandle_toy_Spatial;
ComponentHandle_toy_Spatial.__cache = {};
Module['mud']['ComponentHandle_toy_Spatial'] = ComponentHandle_toy_Spatial;
ComponentHandle_toy_Spatial.prototype["__destroy"] = ComponentHandle_toy_Spatial.prototype.__destroy = function() {
    _mud_ComponentHandle_toy_Spatial__destroy(this.__ptr);
};
// ComponentHandle<toy::Waypoint>
function ComponentHandle_toy_Waypoint() {
    this.__ptr = _mud_ComponentHandle_toy_Waypoint__construct_0(); this.__type = ComponentHandle_toy_Waypoint.__type; getCache(ComponentHandle_toy_Waypoint)[this.__ptr] = this;
};
ComponentHandle_toy_Waypoint.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Waypoint.prototype.constructor = ComponentHandle_toy_Waypoint;
ComponentHandle_toy_Waypoint.prototype.__class = ComponentHandle_toy_Waypoint;
ComponentHandle_toy_Waypoint.__cache = {};
Module['mud']['ComponentHandle_toy_Waypoint'] = ComponentHandle_toy_Waypoint;
ComponentHandle_toy_Waypoint.prototype["__destroy"] = ComponentHandle_toy_Waypoint.prototype.__destroy = function() {
    _mud_ComponentHandle_toy_Waypoint__destroy(this.__ptr);
};
// ComponentHandle<toy::WorldPage>
function ComponentHandle_toy_WorldPage() {
    this.__ptr = _mud_ComponentHandle_toy_WorldPage__construct_0(); this.__type = ComponentHandle_toy_WorldPage.__type; getCache(ComponentHandle_toy_WorldPage)[this.__ptr] = this;
};
ComponentHandle_toy_WorldPage.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_WorldPage.prototype.constructor = ComponentHandle_toy_WorldPage;
ComponentHandle_toy_WorldPage.prototype.__class = ComponentHandle_toy_WorldPage;
ComponentHandle_toy_WorldPage.__cache = {};
Module['mud']['ComponentHandle_toy_WorldPage'] = ComponentHandle_toy_WorldPage;
ComponentHandle_toy_WorldPage.prototype["__destroy"] = ComponentHandle_toy_WorldPage.prototype.__destroy = function() {
    _mud_ComponentHandle_toy_WorldPage__destroy(this.__ptr);
};
// ComponentPool
function ComponentPool() { throw "cannot construct a ComponentPool, no constructor in IDL" }
ComponentPool.prototype = Object.create(WrapperObject.prototype);
ComponentPool.prototype.constructor = ComponentPool;
ComponentPool.prototype.__class = ComponentPool;
ComponentPool.__cache = {};
Module['ComponentPool'] = ComponentPool;
ComponentPool.prototype["__destroy"] = ComponentPool.prototype.__destroy = function() {
    _toy_ComponentPool__destroy(this.__ptr);
};
// Core
function Core() { throw "cannot construct a Core, no constructor in IDL" }
Core.prototype = Object.create(WrapperObject.prototype);
Core.prototype.constructor = Core;
Core.prototype.__class = Core;
Core.__cache = {};
Module['Core'] = Core;
Core.prototype["__destroy"] = Core.prototype.__destroy = function() {
    _toy_Core__destroy(this.__ptr);
};
// DetourPath
function DetourPath() { throw "cannot construct a DetourPath, no constructor in IDL" }
DetourPath.prototype = Object.create(WrapperObject.prototype);
DetourPath.prototype.constructor = DetourPath;
DetourPath.prototype.__class = DetourPath;
DetourPath.__cache = {};
Module['DetourPath'] = DetourPath;
DetourPath.prototype["__destroy"] = DetourPath.prototype.__destroy = function() {
    _toy_DetourPath__destroy(this.__ptr);
};
// Emitter
function Emitter(a0) {
    if (a0 === undefined) { this.__ptr = _toy_Emitter__construct_0(); this.__type = Emitter.__type; getCache(Emitter)[this.__ptr] = this; return; }
    this.__ptr = _toy_Emitter__construct_1(/*spatial*/a0.__ptr); this.__type = Emitter.__type; getCache(Emitter)[this.__ptr] = this;
};
Emitter.prototype = Object.create(WrapperObject.prototype);
Emitter.prototype.constructor = Emitter;
Emitter.prototype.__class = Emitter;
Emitter.__cache = {};
Module['Emitter'] = Emitter;
Emitter.prototype["__destroy"] = Emitter.prototype.__destroy = function() {
    _toy_Emitter__destroy(this.__ptr);
};
// EntityScript
function EntityScript(a0) {
    if (a0 === undefined) { this.__ptr = _toy_EntityScript__construct_0(); this.__type = EntityScript.__type; getCache(EntityScript)[this.__ptr] = this; return; }
    this.__ptr = _toy_EntityScript__construct_1(/*spatial*/a0.__ptr); this.__type = EntityScript.__type; getCache(EntityScript)[this.__ptr] = this;
};
EntityScript.prototype = Object.create(WrapperObject.prototype);
EntityScript.prototype.constructor = EntityScript;
EntityScript.prototype.__class = EntityScript;
EntityScript.__cache = {};
Module['EntityScript'] = EntityScript;
Object.defineProperty(EntityScript.prototype, "logic_script", {
    get: function() {
        return wrapPointer(_toy_EntityScript__get_logic_script(this.__ptr), Script);
    },
    set: function(value) {
        _toy_EntityScript__set_logic_script(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(EntityScript.prototype, "render_script", {
    get: function() {
        return wrapPointer(_toy_EntityScript__get_render_script(this.__ptr), Script);
    },
    set: function(value) {
        _toy_EntityScript__set_render_script(this.__ptr, value.__ptr);
    }
});
EntityScript.prototype["__destroy"] = EntityScript.prototype.__destroy = function() {
    _toy_EntityScript__destroy(this.__ptr);
};
// Medium
function Medium() { throw "cannot construct a Medium, no constructor in IDL" }
Medium.prototype = Object.create(WrapperObject.prototype);
Medium.prototype.constructor = Medium;
Medium.prototype.__class = Medium;
Medium.__cache = {};
Module['Medium'] = Medium;
Object.defineProperty(Medium.prototype, "name", {
    get: function() {
        return UTF8ToString(_toy_Medium__get_name(this.__ptr));
    },
    set: function(value) {
        _toy_Medium__set_name(this.__ptr, ensureString(value));
    }
});
Object.defineProperty(Medium.prototype, "occlusions", {
    get: function() {
        return !!(_toy_Medium__get_occlusions(this.__ptr));
    },
    set: function(value) {
        _toy_Medium__set_occlusions(this.__ptr, value);
    }
});
Object.defineProperty(Medium.prototype, "solid", {
    get: function() {
        return !!(_toy_Medium__get_solid(this.__ptr));
    },
    set: function(value) {
        _toy_Medium__set_solid(this.__ptr, value);
    }
});
Medium.prototype["__destroy"] = Medium.prototype.__destroy = function() {
    _toy_Medium__destroy(this.__ptr);
};
// Movable
function Movable(a0) {
    if (a0 === undefined) { this.__ptr = _toy_Movable__construct_0(); this.__type = Movable.__type; getCache(Movable)[this.__ptr] = this; return; }
    this.__ptr = _toy_Movable__construct_1(/*position*/a0.__ptr); this.__type = Movable.__type; getCache(Movable)[this.__ptr] = this;
};
Movable.prototype = Object.create(WrapperObject.prototype);
Movable.prototype.constructor = Movable;
Movable.prototype.__class = Movable;
Movable.__cache = {};
Module['Movable'] = Movable;
Movable.prototype["set_linear_velocity"] = Movable.prototype.set_linear_velocity = function(a0) {
    _toy_Movable_set_linear_velocity_1(this.__ptr, /*velocity*/a0.__ptr);
};
Movable.prototype["modify_linear_velocity"] = Movable.prototype.modify_linear_velocity = function(a0) {
    _toy_Movable_modify_linear_velocity_1(this.__ptr, /*velocity*/a0.__ptr);
};
Movable.prototype["set_angular_velocity"] = Movable.prototype.set_angular_velocity = function(a0) {
    _toy_Movable_set_angular_velocity_1(this.__ptr, /*velocity*/a0.__ptr);
};
Movable.prototype["modify_angular_velocity"] = Movable.prototype.modify_angular_velocity = function(a0) {
    _toy_Movable_modify_angular_velocity_1(this.__ptr, /*velocity*/a0.__ptr);
};
Object.defineProperty(Movable.prototype, "linear_velocity", {
    get: function() {
        return wrapPointer(_toy_Movable__get_linear_velocity(this.__ptr), v3_float);
    },
    set: function(value) {
        _toy_Movable__set_linear_velocity(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Movable.prototype, "angular_velocity", {
    get: function() {
        return wrapPointer(_toy_Movable__get_angular_velocity(this.__ptr), v3_float);
    },
    set: function(value) {
        _toy_Movable__set_angular_velocity(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Movable.prototype, "moving", {
    get: function() {
        return !!(_toy_Movable__get_moving(this.__ptr));
    },
    set: function(value) {
        _toy_Movable__set_moving(this.__ptr, value);
    }
});
Object.defineProperty(Movable.prototype, "previous_position", {
    get: function() {
        return wrapPointer(_toy_Movable__get_previous_position(this.__ptr), v3_float);
    },
    set: function(value) {
        _toy_Movable__set_previous_position(this.__ptr, value.__ptr);
    }
});
Movable.prototype["__destroy"] = Movable.prototype.__destroy = function() {
    _toy_Movable__destroy(this.__ptr);
};
// Navblock
function Navblock(a0, a1, a2) {
    if (a0 === undefined) { this.__ptr = _toy_Navblock__construct_0(); this.__type = Navblock.__type; getCache(Navblock)[this.__ptr] = this; return; }
    this.__ptr = _toy_Navblock__construct_3(/*spatial*/a0.__ptr, /*world_page*/a1.__ptr, /*navmesh*/a2.__ptr); this.__type = Navblock.__type; getCache(Navblock)[this.__ptr] = this;
};
Navblock.prototype = Object.create(WrapperObject.prototype);
Navblock.prototype.constructor = Navblock;
Navblock.prototype.__class = Navblock;
Navblock.__cache = {};
Module['Navblock'] = Navblock;
Object.defineProperty(Navblock.prototype, "navmesh", {
    get: function() {
        return wrapPointer(_toy_Navblock__get_navmesh(this.__ptr), Navmesh);
    },
    set: function(value) {
        _toy_Navblock__set_navmesh(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Navblock.prototype, "auto_update", {
    get: function() {
        return !!(_toy_Navblock__get_auto_update(this.__ptr));
    },
    set: function(value) {
        _toy_Navblock__set_auto_update(this.__ptr, value);
    }
});
Object.defineProperty(Navblock.prototype, "updated", {
    get: function() {
        return _toy_Navblock__get_updated(this.__ptr);
    },
    set: function(value) {
        _toy_Navblock__set_updated(this.__ptr, value);
    }
});
Navblock.prototype["__destroy"] = Navblock.prototype.__destroy = function() {
    _toy_Navblock__destroy(this.__ptr);
};
// Navmesh
function Navmesh(a0) {
    this.__ptr = _toy_Navmesh__construct_1(/*world*/a0.__ptr); this.__type = Navmesh.__type; getCache(Navmesh)[this.__ptr] = this;
};
Navmesh.prototype = Object.create(WrapperObject.prototype);
Navmesh.prototype.constructor = Navmesh;
Navmesh.prototype.__class = Navmesh;
Navmesh.__cache = {};
Module['Navmesh'] = Navmesh;
Object.defineProperty(Navmesh.prototype, "world", {
    get: function() {
        return wrapPointer(_toy_Navmesh__get_world(this.__ptr), World);
    }});
Object.defineProperty(Navmesh.prototype, "updated", {
    get: function() {
        return _toy_Navmesh__get_updated(this.__ptr);
    },
    set: function(value) {
        _toy_Navmesh__set_updated(this.__ptr, value);
    }
});
Object.defineProperty(Navmesh.prototype, "dirty", {
    get: function() {
        return !!(_toy_Navmesh__get_dirty(this.__ptr));
    },
    set: function(value) {
        _toy_Navmesh__set_dirty(this.__ptr, value);
    }
});
Navmesh.prototype["__destroy"] = Navmesh.prototype.__destroy = function() {
    _toy_Navmesh__destroy(this.__ptr);
};
// Origin
function Origin() {
    this.__ptr = _toy_Origin__construct_0(); this.__type = Origin.__type; getCache(Origin)[this.__ptr] = this;
};
Origin.prototype = Object.create(WrapperObject.prototype);
Origin.prototype.constructor = Origin;
Origin.prototype.__class = Origin;
Origin.__cache = {};
Module['Origin'] = Origin;
Origin.prototype["__destroy"] = Origin.prototype.__destroy = function() {
    _toy_Origin__destroy(this.__ptr);
};
// OwnedHandle<toy::Collider>
function OwnedHandle_toy_Collider() {
    this.__ptr = _mud_OwnedHandle_toy_Collider__construct_0(); this.__type = OwnedHandle_toy_Collider.__type; getCache(OwnedHandle_toy_Collider)[this.__ptr] = this;
};
OwnedHandle_toy_Collider.prototype = Object.create(WrapperObject.prototype);
OwnedHandle_toy_Collider.prototype.constructor = OwnedHandle_toy_Collider;
OwnedHandle_toy_Collider.prototype.__class = OwnedHandle_toy_Collider;
OwnedHandle_toy_Collider.__cache = {};
Module['mud']['OwnedHandle_toy_Collider'] = OwnedHandle_toy_Collider;
OwnedHandle_toy_Collider.prototype["__destroy"] = OwnedHandle_toy_Collider.prototype.__destroy = function() {
    _mud_OwnedHandle_toy_Collider__destroy(this.__ptr);
};
// OwnedHandle<toy::Solid>
function OwnedHandle_toy_Solid() {
    this.__ptr = _mud_OwnedHandle_toy_Solid__construct_0(); this.__type = OwnedHandle_toy_Solid.__type; getCache(OwnedHandle_toy_Solid)[this.__ptr] = this;
};
OwnedHandle_toy_Solid.prototype = Object.create(WrapperObject.prototype);
OwnedHandle_toy_Solid.prototype.constructor = OwnedHandle_toy_Solid;
OwnedHandle_toy_Solid.prototype.__class = OwnedHandle_toy_Solid;
OwnedHandle_toy_Solid.__cache = {};
Module['mud']['OwnedHandle_toy_Solid'] = OwnedHandle_toy_Solid;
OwnedHandle_toy_Solid.prototype["__destroy"] = OwnedHandle_toy_Solid.prototype.__destroy = function() {
    _mud_OwnedHandle_toy_Solid__destroy(this.__ptr);
};
// Pathfinder
function Pathfinder(a0) {
    this.__ptr = _toy_Pathfinder__construct_1(/*navmesh*/a0.__ptr); this.__type = Pathfinder.__type; getCache(Pathfinder)[this.__ptr] = this;
};
Pathfinder.prototype = Object.create(WrapperObject.prototype);
Pathfinder.prototype.constructor = Pathfinder;
Pathfinder.prototype.__class = Pathfinder;
Pathfinder.__cache = {};
Module['Pathfinder'] = Pathfinder;
Pathfinder.prototype["__destroy"] = Pathfinder.prototype.__destroy = function() {
    _toy_Pathfinder__destroy(this.__ptr);
};
// PhysicWorld
function PhysicWorld() { throw "cannot construct a PhysicWorld, no constructor in IDL" }
PhysicWorld.prototype = Object.create(WrapperObject.prototype);
PhysicWorld.prototype.constructor = PhysicWorld;
PhysicWorld.prototype.__class = PhysicWorld;
PhysicWorld.__cache = {};
Module['PhysicWorld'] = PhysicWorld;
PhysicWorld.prototype["ground_point"] = PhysicWorld.prototype.ground_point = function(a0) {
    return wrapPointer(_toy_PhysicWorld_ground_point_1(this.__ptr, /*ray*/a0.__ptr), v3_float);
};
PhysicWorld.prototype["raycast"] = PhysicWorld.prototype.raycast = function(a0, a1) {
    return wrapPointer(_toy_PhysicWorld_raycast_2(this.__ptr, /*ray*/a0.__ptr, /*mask*/a1), Collision);
};
Object.defineProperty(PhysicWorld.prototype, "world", {
    get: function() {
        return wrapPointer(_toy_PhysicWorld__get_world(this.__ptr), World);
    }});
PhysicWorld.prototype["__destroy"] = PhysicWorld.prototype.__destroy = function() {
    _toy_PhysicWorld__destroy(this.__ptr);
};
// Receptor
function Receptor(a0) {
    if (a0 === undefined) { this.__ptr = _toy_Receptor__construct_0(); this.__type = Receptor.__type; getCache(Receptor)[this.__ptr] = this; return; }
    this.__ptr = _toy_Receptor__construct_1(/*spatial*/a0.__ptr); this.__type = Receptor.__type; getCache(Receptor)[this.__ptr] = this;
};
Receptor.prototype = Object.create(WrapperObject.prototype);
Receptor.prototype.constructor = Receptor;
Receptor.prototype.__class = Receptor;
Receptor.__cache = {};
Module['Receptor'] = Receptor;
Receptor.prototype["scope"] = Receptor.prototype.scope = function(a0) {
    return wrapPointer(_toy_Receptor_scope_1(this.__ptr, /*medium*/a0.__ptr), ReceptorScope);
};
Receptor.prototype["__destroy"] = Receptor.prototype.__destroy = function() {
    _toy_Receptor__destroy(this.__ptr);
};
// Solid
function Solid() { throw "cannot construct a Solid, no constructor in IDL" }
Solid.prototype = Object.create(WrapperObject.prototype);
Solid.prototype.constructor = Solid;
Solid.prototype.__class = Solid;
Solid.__cache = {};
Module['Solid'] = Solid;
Object.defineProperty(Solid.prototype, "spatial", {
    get: function() {
        return wrapPointer(_toy_Solid__get_spatial(this.__ptr), ComponentHandle_toy_Spatial);
    },
    set: function(value) {
        _toy_Solid__set_spatial(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Solid.prototype, "static", {
    get: function() {
        return !!(_toy_Solid__get_static(this.__ptr));
    },
    set: function(value) {
        _toy_Solid__set_static(this.__ptr, value);
    }
});
Object.defineProperty(Solid.prototype, "mass", {
    get: function() {
        return _toy_Solid__get_mass(this.__ptr);
    },
    set: function(value) {
        _toy_Solid__set_mass(this.__ptr, value);
    }
});
Solid.prototype["__destroy"] = Solid.prototype.__destroy = function() {
    _toy_Solid__destroy(this.__ptr);
};
// SolidImpl
function SolidImpl() { throw "cannot construct a SolidImpl, no constructor in IDL" }
SolidImpl.prototype = Object.create(WrapperObject.prototype);
SolidImpl.prototype.constructor = SolidImpl;
SolidImpl.prototype.__class = SolidImpl;
SolidImpl.__cache = {};
Module['SolidImpl'] = SolidImpl;
SolidImpl.prototype["linear_velocity"] = SolidImpl.prototype.linear_velocity = function() {
    return wrapPointer(_toy_SolidImpl_linear_velocity_0(this.__ptr), v3_float);
};
SolidImpl.prototype["angular_velocity"] = SolidImpl.prototype.angular_velocity = function() {
    return wrapPointer(_toy_SolidImpl_angular_velocity_0(this.__ptr), v3_float);
};
SolidImpl.prototype["set_linear_velocity"] = SolidImpl.prototype.set_linear_velocity = function(a0) {
    _toy_SolidImpl_set_linear_velocity_1(this.__ptr, /*force*/a0.__ptr);
};
SolidImpl.prototype["set_angular_velocity"] = SolidImpl.prototype.set_angular_velocity = function(a0) {
    _toy_SolidImpl_set_angular_velocity_1(this.__ptr, /*torque*/a0.__ptr);
};
SolidImpl.prototype["set_angular_factor"] = SolidImpl.prototype.set_angular_factor = function(a0) {
    _toy_SolidImpl_set_angular_factor_1(this.__ptr, /*factor*/a0.__ptr);
};
SolidImpl.prototype["impulse"] = SolidImpl.prototype.impulse = function(a0, a1) {
    _toy_SolidImpl_impulse_2(this.__ptr, /*force*/a0.__ptr, /*point*/a1.__ptr);
};
SolidImpl.prototype["__destroy"] = SolidImpl.prototype.__destroy = function() {
    _toy_SolidImpl__destroy(this.__ptr);
};
// SparseHandle<toy::Collider>
function SparseHandle_toy_Collider() {
    this.__ptr = _mud_SparseHandle_toy_Collider__construct_0(); this.__type = SparseHandle_toy_Collider.__type; getCache(SparseHandle_toy_Collider)[this.__ptr] = this;
};
SparseHandle_toy_Collider.prototype = Object.create(WrapperObject.prototype);
SparseHandle_toy_Collider.prototype.constructor = SparseHandle_toy_Collider;
SparseHandle_toy_Collider.prototype.__class = SparseHandle_toy_Collider;
SparseHandle_toy_Collider.__cache = {};
Module['mud']['SparseHandle_toy_Collider'] = SparseHandle_toy_Collider;
SparseHandle_toy_Collider.prototype["__destroy"] = SparseHandle_toy_Collider.prototype.__destroy = function() {
    _mud_SparseHandle_toy_Collider__destroy(this.__ptr);
};
// SparseHandle<toy::Solid>
function SparseHandle_toy_Solid() {
    this.__ptr = _mud_SparseHandle_toy_Solid__construct_0(); this.__type = SparseHandle_toy_Solid.__type; getCache(SparseHandle_toy_Solid)[this.__ptr] = this;
};
SparseHandle_toy_Solid.prototype = Object.create(WrapperObject.prototype);
SparseHandle_toy_Solid.prototype.constructor = SparseHandle_toy_Solid;
SparseHandle_toy_Solid.prototype.__class = SparseHandle_toy_Solid;
SparseHandle_toy_Solid.__cache = {};
Module['mud']['SparseHandle_toy_Solid'] = SparseHandle_toy_Solid;
SparseHandle_toy_Solid.prototype["__destroy"] = SparseHandle_toy_Solid.prototype.__destroy = function() {
    _mud_SparseHandle_toy_Solid__destroy(this.__ptr);
};
// User
function User() { throw "cannot construct a User, no constructor in IDL" }
User.prototype = Object.create(WrapperObject.prototype);
User.prototype.constructor = User;
User.prototype.__class = User;
User.__cache = {};
Module['User'] = User;
User.prototype["__destroy"] = User.prototype.__destroy = function() {
    _toy_User__destroy(this.__ptr);
};
// Waypoint
function Waypoint() {
    this.__ptr = _toy_Waypoint__construct_0(); this.__type = Waypoint.__type; getCache(Waypoint)[this.__ptr] = this;
};
Waypoint.prototype = Object.create(WrapperObject.prototype);
Waypoint.prototype.constructor = Waypoint;
Waypoint.prototype.__class = Waypoint;
Waypoint.__cache = {};
Module['Waypoint'] = Waypoint;
Waypoint.prototype["__destroy"] = Waypoint.prototype.__destroy = function() {
    _toy_Waypoint__destroy(this.__ptr);
};
// World
World.prototype = Object.create(WrapperObject.prototype);
World.prototype.constructor = World;
World.prototype.__class = World;
World.__cache = {};
Module['World'] = World;
Object.defineProperty(World.prototype, "id", {
    get: function() {
        return _toy_World__get_id(this.__ptr);
    },
    set: function(value) {
        _toy_World__set_id(this.__ptr, value);
    }
});
Object.defineProperty(World.prototype, "name", {
    get: function() {
        return UTF8ToString(_toy_World__get_name(this.__ptr));
    },
    set: function(value) {
        _toy_World__set_name(this.__ptr, ensureString(value));
    }
});
Object.defineProperty(World.prototype, "origin", {
    get: function() {
        return wrapPointer(_toy_World__get_origin(this.__ptr), ComponentHandle_toy_Spatial);
    }});
Object.defineProperty(World.prototype, "unworld", {
    get: function() {
        return wrapPointer(_toy_World__get_unworld(this.__ptr), ComponentHandle_toy_Spatial);
    }});
World.prototype["__destroy"] = World.prototype.__destroy = function() {
    _toy_World__destroy(this.__ptr);
};
// WorldClock
function WorldClock() { throw "cannot construct a WorldClock, no constructor in IDL" }
WorldClock.prototype = Object.create(WrapperObject.prototype);
WorldClock.prototype.constructor = WorldClock;
WorldClock.prototype.__class = WorldClock;
WorldClock.__cache = {};
Module['WorldClock'] = WorldClock;
WorldClock.prototype["__destroy"] = WorldClock.prototype.__destroy = function() {
    _toy_WorldClock__destroy(this.__ptr);
};
// WorldPage
function WorldPage(a0, a1, a2) {
    if (a0 === undefined) { this.__ptr = _toy_WorldPage__construct_0(); this.__type = WorldPage.__type; getCache(WorldPage)[this.__ptr] = this; return; }
    this.__ptr = _toy_WorldPage__construct_3(/*spatial*/a0.__ptr, /*open*/a1, /*extents*/a2.__ptr); this.__type = WorldPage.__type; getCache(WorldPage)[this.__ptr] = this;
};
WorldPage.prototype = Object.create(WrapperObject.prototype);
WorldPage.prototype.constructor = WorldPage;
WorldPage.prototype.__class = WorldPage;
WorldPage.__cache = {};
Module['WorldPage'] = WorldPage;
WorldPage.prototype["update_geometry"] = WorldPage.prototype.update_geometry = function(a0) {
    _toy_WorldPage_update_geometry_1(this.__ptr, /*tick*/a0);
};
WorldPage.prototype["ground_point"] = WorldPage.prototype.ground_point = function(a0, a1, a2) {
    _toy_WorldPage_ground_point_3(this.__ptr, /*position*/a0.__ptr, /*relative*/a1, /*outputPoint*/a2.__ptr);
};
WorldPage.prototype["raycast_ground"] = WorldPage.prototype.raycast_ground = function(a0, a1, a2) {
    _toy_WorldPage_raycast_ground_3(this.__ptr, /*from*/a0.__ptr, /*to*/a1.__ptr, /*ground_point*/a2.__ptr);
};
Object.defineProperty(WorldPage.prototype, "open", {
    get: function() {
        return !!(_toy_WorldPage__get_open(this.__ptr));
    },
    set: function(value) {
        _toy_WorldPage__set_open(this.__ptr, value);
    }
});
Object.defineProperty(WorldPage.prototype, "extents", {
    get: function() {
        return wrapPointer(_toy_WorldPage__get_extents(this.__ptr), v3_float);
    },
    set: function(value) {
        _toy_WorldPage__set_extents(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(WorldPage.prototype, "world", {
    get: function() {
        return wrapPointer(_toy_WorldPage__get_world(this.__ptr), World);
    },
    set: function(value) {
        _toy_WorldPage__set_world(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(WorldPage.prototype, "last_rebuilt", {
    get: function() {
        return _toy_WorldPage__get_last_rebuilt(this.__ptr);
    },
    set: function(value) {
        _toy_WorldPage__set_last_rebuilt(this.__ptr, value);
    }
});
WorldPage.prototype["__destroy"] = WorldPage.prototype.__destroy = function() {
    _toy_WorldPage__destroy(this.__ptr);
};
// BulletCollider
function BulletCollider() { throw "cannot construct a BulletCollider, no constructor in IDL" }
BulletCollider.prototype = Object.create(ColliderImpl.prototype);
BulletCollider.prototype.constructor = BulletCollider;
BulletCollider.prototype.__class = BulletCollider;
BulletCollider.__cache = {};
Module['BulletCollider'] = BulletCollider;
BulletCollider.prototype["__destroy"] = BulletCollider.prototype.__destroy = function() {
    _toy_BulletCollider__destroy(this.__ptr);
};
// BulletSolid
function BulletSolid() { throw "cannot construct a BulletSolid, no constructor in IDL" }
BulletSolid.prototype = Object.create(SolidImpl.prototype);
BulletSolid.prototype.constructor = BulletSolid;
BulletSolid.prototype.__class = BulletSolid;
BulletSolid.__cache = {};
Module['BulletSolid'] = BulletSolid;
BulletSolid.prototype["__destroy"] = BulletSolid.prototype.__destroy = function() {
    _toy_BulletSolid__destroy(this.__ptr);
};
// BulletWorld
function BulletWorld(a0) {
    this.__ptr = _toy_BulletWorld__construct_1(/*world*/a0.__ptr); this.__type = BulletWorld.__type; getCache(BulletWorld)[this.__ptr] = this;
};
BulletWorld.prototype = Object.create(PhysicWorld.prototype);
BulletWorld.prototype.constructor = BulletWorld;
BulletWorld.prototype.__class = BulletWorld;
BulletWorld.__cache = {};
Module['BulletWorld'] = BulletWorld;
BulletWorld.prototype["__destroy"] = BulletWorld.prototype.__destroy = function() {
    _toy_BulletWorld__destroy(this.__ptr);
};
// DefaultWorld
function DefaultWorld(a0, a1) {
    ensureCache.prepare();
    this.__ptr = _toy_DefaultWorld__construct_2(ensureString(/*name*/a0), /*job_system*/a1.__ptr); this.__type = DefaultWorld.__type; getCache(DefaultWorld)[this.__ptr] = this;
};
DefaultWorld.prototype = Object.create(Complex.prototype);
DefaultWorld.prototype.constructor = DefaultWorld;
DefaultWorld.prototype.__class = DefaultWorld;
DefaultWorld.__cache = {};
Module['DefaultWorld'] = DefaultWorld;
Object.defineProperty(DefaultWorld.prototype, "world", {
    get: function() {
        return wrapPointer(_toy_DefaultWorld__get_world(this.__ptr), World);
    }});
Object.defineProperty(DefaultWorld.prototype, "bullet_world", {
    get: function() {
        return wrapPointer(_toy_DefaultWorld__get_bullet_world(this.__ptr), BulletWorld);
    }});
Object.defineProperty(DefaultWorld.prototype, "navmesh", {
    get: function() {
        return wrapPointer(_toy_DefaultWorld__get_navmesh(this.__ptr), Navmesh);
    }});
DefaultWorld.prototype["__destroy"] = DefaultWorld.prototype.__destroy = function() {
    _toy_DefaultWorld__destroy(this.__ptr);
};
// NavmeshShape
function NavmeshShape(a0) {
    this.__ptr = _toy_NavmeshShape__construct_1(/*navmesh*/a0.__ptr); this.__type = NavmeshShape.__type; getCache(NavmeshShape)[this.__ptr] = this;
};
NavmeshShape.prototype = Object.create(Shape.prototype);
NavmeshShape.prototype.constructor = NavmeshShape;
NavmeshShape.prototype.__class = NavmeshShape;
NavmeshShape.__cache = {};
Module['NavmeshShape'] = NavmeshShape;
NavmeshShape.prototype["__destroy"] = NavmeshShape.prototype.__destroy = function() {
    _toy_NavmeshShape__destroy(this.__ptr);
};
// PhysicScope
function PhysicScope() { throw "cannot construct a PhysicScope, no constructor in IDL" }
PhysicScope.prototype = Object.create(ColliderObject.prototype);
PhysicScope.prototype.constructor = PhysicScope;
PhysicScope.prototype.__class = PhysicScope;
PhysicScope.__cache = {};
Module['PhysicScope'] = PhysicScope;
PhysicScope.prototype["__destroy"] = PhysicScope.prototype.__destroy = function() {
    _toy_PhysicScope__destroy(this.__ptr);
};
// EmitterScope
function EmitterScope() { throw "cannot construct a EmitterScope, no constructor in IDL" }
EmitterScope.prototype = Object.create(PhysicScope.prototype);
EmitterScope.prototype.constructor = EmitterScope;
EmitterScope.prototype.__class = EmitterScope;
EmitterScope.__cache = {};
Module['EmitterScope'] = EmitterScope;
EmitterScope.prototype["__destroy"] = EmitterScope.prototype.__destroy = function() {
    _toy_EmitterScope__destroy(this.__ptr);
};
// Obstacle
function Obstacle(a0, a1, a2, a3, a4) {
    this.__ptr = _toy_Obstacle__construct_5(/*spatial*/a0.__ptr, /*movable*/a1.__ptr, /*medium*/a2.__ptr, /*shape*/a3.__ptr, /*throughput*/a4); this.__type = Obstacle.__type; getCache(Obstacle)[this.__ptr] = this;
};
Obstacle.prototype = Object.create(Collider.prototype);
Obstacle.prototype.constructor = Obstacle;
Obstacle.prototype.__class = Obstacle;
Obstacle.__cache = {};
Module['Obstacle'] = Obstacle;
Object.defineProperty(Obstacle.prototype, "shape", {
    get: function() {
        return wrapPointer(_toy_Obstacle__get_shape(this.__ptr), CollisionShape);
    }});
Object.defineProperty(Obstacle.prototype, "throughput", {
    get: function() {
        return _toy_Obstacle__get_throughput(this.__ptr);
    },
    set: function(value) {
        _toy_Obstacle__set_throughput(this.__ptr, value);
    }
});
Obstacle.prototype["__destroy"] = Obstacle.prototype.__destroy = function() {
    _toy_Obstacle__destroy(this.__ptr);
};
// ReceptorScope
function ReceptorScope() { throw "cannot construct a ReceptorScope, no constructor in IDL" }
ReceptorScope.prototype = Object.create(PhysicScope.prototype);
ReceptorScope.prototype.constructor = ReceptorScope;
ReceptorScope.prototype.__class = ReceptorScope;
ReceptorScope.__cache = {};
Module['ReceptorScope'] = ReceptorScope;
ReceptorScope.prototype["__destroy"] = ReceptorScope.prototype.__destroy = function() {
    _toy_ReceptorScope__destroy(this.__ptr);
};
// SolidMedium
function SolidMedium() {
    this.__ptr = _toy_SolidMedium__construct_0(); this.__type = SolidMedium.__type; getCache(SolidMedium)[this.__ptr] = this;
};
SolidMedium.prototype = Object.create(Medium.prototype);
SolidMedium.prototype.constructor = SolidMedium;
SolidMedium.prototype.__class = SolidMedium;
SolidMedium.__cache = {};
Module['SolidMedium'] = SolidMedium;
SolidMedium.prototype["__destroy"] = SolidMedium.prototype.__destroy = function() {
    _toy_SolidMedium__destroy(this.__ptr);
};
// SoundMedium
function SoundMedium() {
    this.__ptr = _toy_SoundMedium__construct_0(); this.__type = SoundMedium.__type; getCache(SoundMedium)[this.__ptr] = this;
};
SoundMedium.prototype = Object.create(Medium.prototype);
SoundMedium.prototype.constructor = SoundMedium;
SoundMedium.prototype.__class = SoundMedium;
SoundMedium.__cache = {};
Module['SoundMedium'] = SoundMedium;
SoundMedium.prototype["__destroy"] = SoundMedium.prototype.__destroy = function() {
    _toy_SoundMedium__destroy(this.__ptr);
};
// Spatial
function Spatial(a0, a1, a2, a3) {
    if (a0 === undefined) { this.__ptr = _toy_Spatial__construct_0(); this.__type = Spatial.__type; getCache(Spatial)[this.__ptr] = this; return; }
    if (a3 === undefined) { this.__ptr = _toy_Spatial__construct_3(/*parent*/a0.__ptr, /*position*/a1.__ptr, /*rotation*/a2.__ptr); this.__type = Spatial.__type; getCache(Spatial)[this.__ptr] = this; return; }
    this.__ptr = _toy_Spatial__construct_4(/*world*/a0.__ptr, /*parent*/a1.__ptr, /*position*/a2.__ptr, /*rotation*/a3.__ptr); this.__type = Spatial.__type; getCache(Spatial)[this.__ptr] = this;
};
Spatial.prototype = Object.create(Transform.prototype);
Spatial.prototype.constructor = Spatial;
Spatial.prototype.__class = Spatial;
Spatial.__cache = {};
Module['Spatial'] = Spatial;
Spatial.prototype["set_position"] = Spatial.prototype.set_position = function(a0) {
    _toy_Spatial_set_position_1(this.__ptr, /*position*/a0.__ptr);
};
Spatial.prototype["set_rotation"] = Spatial.prototype.set_rotation = function(a0) {
    _toy_Spatial_set_rotation_1(this.__ptr, /*rotation*/a0.__ptr);
};
Object.defineProperty(Spatial.prototype, "world", {
    get: function() {
        return wrapPointer(_toy_Spatial__get_world(this.__ptr), World);
    },
    set: function(value) {
        _toy_Spatial__set_world(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Spatial.prototype, "parent", {
    get: function() {
        return wrapPointer(_toy_Spatial__get_parent(this.__ptr), ComponentHandle_toy_Spatial);
    },
    set: function(value) {
        _toy_Spatial__set_parent(this.__ptr, value.__ptr);
    }
});
Spatial.prototype["__destroy"] = Spatial.prototype.__destroy = function() {
    _toy_Spatial__destroy(this.__ptr);
};
// VisualMedium
function VisualMedium() {
    this.__ptr = _toy_VisualMedium__construct_0(); this.__type = VisualMedium.__type; getCache(VisualMedium)[this.__ptr] = this;
};
VisualMedium.prototype = Object.create(Medium.prototype);
VisualMedium.prototype.constructor = VisualMedium;
VisualMedium.prototype.__class = VisualMedium;
VisualMedium.__cache = {};
Module['VisualMedium'] = VisualMedium;
VisualMedium.prototype["__destroy"] = VisualMedium.prototype.__destroy = function() {
    _toy_VisualMedium__destroy(this.__ptr);
};
// WorldMedium
function WorldMedium() {
    this.__ptr = _toy_WorldMedium__construct_0(); this.__type = WorldMedium.__type; getCache(WorldMedium)[this.__ptr] = this;
};
WorldMedium.prototype = Object.create(Medium.prototype);
WorldMedium.prototype.constructor = WorldMedium;
WorldMedium.prototype.__class = WorldMedium;
WorldMedium.__cache = {};
Module['WorldMedium'] = WorldMedium;
WorldMedium.prototype["__destroy"] = WorldMedium.prototype.__destroy = function() {
    _toy_WorldMedium__destroy(this.__ptr);
};
Module['move_2d'] = function(a0, a1, a2, a3, a4, a5) {
    if (a5 === undefined) { return !!(_toy_move_2d_5(/*spatial*/a0.__ptr, /*movable*/a1.__ptr, /*target*/a2.__ptr, /*velocity*/a3, /*time_step*/a4)); }
    return !!(_toy_move_2d_6(/*spatial*/a0.__ptr, /*movable*/a1.__ptr, /*target*/a2.__ptr, /*velocity*/a3, /*time_step*/a4, /*margin*/a5));
};
Module['steer_2d'] = function(a0, a1, a2, a3, a4, a5) {
    if (a5 === undefined) { return !!(_toy_steer_2d_5(/*spatial*/a0.__ptr, /*movable*/a1.__ptr, /*target*/a2.__ptr, /*velocity*/a3, /*time_step*/a4)); }
    return !!(_toy_steer_2d_6(/*spatial*/a0.__ptr, /*movable*/a1.__ptr, /*target*/a2.__ptr, /*velocity*/a3, /*time_step*/a4, /*margin*/a5));
};
Module['HCollider'] = SparseHandle_toy_Collider;
Module['OCollider'] = OwnedHandle_toy_Collider;
Module['HSolid'] = SparseHandle_toy_Solid;
Module['OSolid'] = OwnedHandle_toy_Solid;
Module['HSpatial'] = ComponentHandle_toy_Spatial;
Module['HMovable'] = ComponentHandle_toy_Movable;
Module['HCamera'] = ComponentHandle_toy_Camera;
Module['HEmitter'] = ComponentHandle_toy_Emitter;
Module['HReceptor'] = ComponentHandle_toy_Receptor;
Module['HEntityScript'] = ComponentHandle_toy_EntityScript;
Module['HWorldPage'] = ComponentHandle_toy_WorldPage;
Module['HNavblock'] = ComponentHandle_toy_Navblock;
Module['HOrigin'] = ComponentHandle_toy_Origin;
Module['HWaypoint'] = ComponentHandle_toy_Waypoint;

(function() {
    function setup() {
        BulletMedium.__type = _toy_BulletMedium__type();
        BulletShape.__type = _toy_BulletShape__type();
        Camera.__type = _toy_Camera__type();
        Collider.__type = _toy_Collider__type();
        ColliderImpl.__type = _toy_ColliderImpl__type();
        ColliderObject.__type = _toy_ColliderObject__type();
        Collision.__type = _toy_Collision__type();
        CollisionShape.__type = _toy_CollisionShape__type();
        ComponentPool.__type = _toy_ComponentPool__type();
        Core.__type = _toy_Core__type();
        DetourPath.__type = _toy_DetourPath__type();
        Emitter.__type = _toy_Emitter__type();
        EntityScript.__type = _toy_EntityScript__type();
        Medium.__type = _toy_Medium__type();
        Movable.__type = _toy_Movable__type();
        Navblock.__type = _toy_Navblock__type();
        Navmesh.__type = _toy_Navmesh__type();
        Origin.__type = _toy_Origin__type();
        Pathfinder.__type = _toy_Pathfinder__type();
        PhysicWorld.__type = _toy_PhysicWorld__type();
        Receptor.__type = _toy_Receptor__type();
        Solid.__type = _toy_Solid__type();
        SolidImpl.__type = _toy_SolidImpl__type();
        User.__type = _toy_User__type();
        Waypoint.__type = _toy_Waypoint__type();
        World.__type = _toy_World__type();
        WorldClock.__type = _toy_WorldClock__type();
        WorldPage.__type = _toy_WorldPage__type();
        BulletCollider.__type = _toy_BulletCollider__type();
        BulletSolid.__type = _toy_BulletSolid__type();
        BulletWorld.__type = _toy_BulletWorld__type();
        DefaultWorld.__type = _toy_DefaultWorld__type();
        NavmeshShape.__type = _toy_NavmeshShape__type();
        PhysicScope.__type = _toy_PhysicScope__type();
        EmitterScope.__type = _toy_EmitterScope__type();
        Obstacle.__type = _toy_Obstacle__type();
        ReceptorScope.__type = _toy_ReceptorScope__type();
        SolidMedium.__type = _toy_SolidMedium__type();
        SoundMedium.__type = _toy_SoundMedium__type();
        Spatial.__type = _toy_Spatial__type();
        VisualMedium.__type = _toy_VisualMedium__type();
        WorldMedium.__type = _toy_WorldMedium__type();
        // CollisionGroup
        Module['CM_NOMASK'] = _toy_CollisionGroup_CM_NOMASK();
        Module['CM_OBJECT'] = _toy_CollisionGroup_CM_OBJECT();
        Module['CM_SOLID'] = _toy_CollisionGroup_CM_SOLID();
        Module['CM_GROUND'] = _toy_CollisionGroup_CM_GROUND();
        Module['CM_AREA'] = _toy_CollisionGroup_CM_AREA();
        Module['CM_BUFFER'] = _toy_CollisionGroup_CM_BUFFER();
        Module['CM_LIGHT'] = _toy_CollisionGroup_CM_LIGHT();
        Module['CM_LIGHTREFLECTOR'] = _toy_CollisionGroup_CM_LIGHTREFLECTOR();
        Module['CM_SOURCE'] = _toy_CollisionGroup_CM_SOURCE();
        Module['CM_RECEPTOR'] = _toy_CollisionGroup_CM_RECEPTOR();
        Module['CM_OBSTACLE'] = _toy_CollisionGroup_CM_OBSTACLE();
    }
    if (Module['calledRun']) setup();
    else addOnPreMain(setup);
})();

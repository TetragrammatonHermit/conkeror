/**
 * (C) Copyright 2008 John J. Foerch
 *
 * Use, modification, and distribution are subject to the terms specified in the
 * COPYING file.
**/

function assert (got, name) {
    if (name == null) name = "unnamed";
    if (! got)
        throw new Error(name+" failed. got <"+got+">.");
    return true;
}

function assert_equals (got, expect, name) {
    if (name == null) name = "unnamed";
    if (got != expect) {
        throw new Error(name+" failed. expected <"+expect+">, got <"+got+">.");
    }
    return true;
}


// sanity checks
{ let failed = false;
  try { assert_equals(1,0); } catch (e) { failed = true; }
  assert_equals(failed, true, "walnut sanity check 1");

  failed = false;
  try { assert_equals(1,1); } catch (e) { failed = true; }
  assert_equals(failed, false, "walnut sanity check 2");

  assert(true, "walnut sanity check 3");
  failed = false;
  try { assert(false); } catch (e) { failed = true; }
  assert(failed, "walnut sanity check 4");
}


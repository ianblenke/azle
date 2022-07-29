use std::{cmp::Ordering, convert::TryInto};

pub fn sort_by<X: Clone + Copy + Ord, T: Fn(&X, &X) -> Ordering>(xs: Vec<X>, f: &T) -> Vec<X> {
    let n: i128 = xs.len().try_into().unwrap();
    if n < 2 {
        return xs;
    } else {
        let mut result = xs.clone();
        sort_by_helper(&mut result, 0, n - 1, f);
        result
    }
}

fn sort_by_helper<X: Copy + Ord, T: Fn(&X, &X) -> Ordering>(
    xs: &mut Vec<X>,
    l: i128,
    r: i128,
    f: &T,
) -> () {
    if l < r {
        let mut i: i128 = l;
        let mut j: i128 = r;
        let mut swap = xs[0];
        let pivot = xs[((l + r).abs() / 2) as usize];
        while i <= j {
            while f(&xs[i.abs() as usize], &pivot).is_lt() {
                i += 1;
            }
            while f(&xs[j.abs() as usize], &pivot).is_gt() {
                j -= 1;
            }
            if i <= j {
                swap = xs[i.abs() as usize];
                xs[i.abs() as usize] = xs[j.abs() as usize];
                xs[j.abs() as usize] = swap;
                i += 1;
                j -= 1;
            }
        }
        if l < j {
            sort_by_helper(xs, l, j, f);
        }
        if i < r {
            sort_by_helper(xs, i, r, f);
        }
    }
}

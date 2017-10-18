Restore IP address from a string of numbers

--Backtracking
--Permutations
--Recursion

"2552551133"

if (out.len() > 0) {
    out.append('.');

    2.5.5.2




    255.255.113.3
    255.255.11.33
    255.255.1.133
    255.25.51.13
    255.51.35.13

    002553399

    2345

    234.5.0.0

    2.3.4.


    1. divide set of 3
    2. Validation a valid ip address 0-255
    2. Adding a dot fot the first set except the ast one




    "abc"
    "acb"
    "bca
    "bac"
    "cab
    "cba"

    STOP

    ab_


    ith i+1th till len

    i = 0
    len = 3
    1 to 2

    i = 1
    2

    i = 2 == len




    Permutation - right most letters are changing frequently




    Order is important

    ab, bc, ac
    ab and ba are the same

    ab ba ac ca bc cb


    255.225.110.9
    0 2

    255,
        start = 2+2 = 4


    out = "255"

    out.append('.')
    "255."
    out.len() = 4
    out[4-1] = '.'
    out[4-2] = '5'
    end = out.len() - 2

    1. Repetive task
    2. Exit condition
    used['a'] = 1
    used['b'] = 0

    "acb" - one of the permutations
    acb == abc

    bool used[256];

    reset to false;

    fn(inp, out, 4)

    Fn (inp, out, segment) {

        1. Check if the permuatation is done - if so print it
        len(out) == len(inp) && segment == 0
        { print}
        return;

        2. if (out.len() == inp.len() ||
            segment == 0) {
            //discard that pemutation
            return;
        }

        3. for (i = 0 to len(inp)) {
            if (used[inp[i]]) {
                continue;
            }

            // Add a dot when out.size() > 0
            // Check for valid for each segment - 1-3  line 87-92
            //use start and end to keep track of start and end of the current segment


            //out.append(inp[i]);
            //isvalid(out)
            //
            used[inp[i]] = true;

            fn(inp, out, segment - 1);
            out.delete(last);
            used[inp[i]] = false;

        }
    }





    Fn    InputStr         i                Len               OutputStr           Used[i] == 1?
        abc              0                3                     a               used['a'] = 1
    abc              1                3                     ab              used['b'] = 1
    abc              2                 3                    abc             used['c'] = 1
    ab              used['c'] = 0  --- return to line 110

    1                3                     ab
    a               used['b'] = 0
    2                3                     ac              used['c'] = 1
    abc              1                3                     acb             used['b'] = 1
    print - return 117
    ac               used['b'] = 0
    2               3                     return to








---
title: Structure optimization
---
There are two types of structural optimization calculations in Quantum espresso:
(1) **relax**: where only the atomic positions are allowed to vary, and (2)
**vc-relax**: which allows to vary both the atomic positions and lattice
constants.

```bash title="si_relax.in"
&control
    calculation = 'vc-relax'
    prefix = 'silicon'
    outdir = './tmp/'
    pseudo_dir = './pseudos/'
    etot_conv_thr = 1e-5
    forc_conv_thr = 1e-4
/

&system
    ibrav=2, celldm(1) =14,
    nat=2, ntyp=1,
    ecutwfc=30
/

&electrons
    conv_thr=1e-7
    mixing_beta = 0.6
/

&ions
/

&cell
    cell_dofree='ibrav'
/

ATOMIC_SPECIES
  Si  28.0855  Si.pz-vbc.UPF

ATOMIC_POSITIONS (alat)
  Si 0.00 0.00 0.00 0 0 0
  Si 0.25 0.25 0.25 0 0 0

K_POINTS (automatic)
  6 6 6 1 1 1
```

Perform the plane wave calculation:
```bash
pw.x -inp si_relax.in > si_relax.out
```

This produces following output (see the `si_relax.out` for more details, look
for "Final enthalpy"):
```bash
     Final enthalpy =     -15.8536258868 Ry
Begin final coordinates
     new unit-cell volume =    265.89380 a.u.^3 (    39.40140 Ang^3 )
     density =      2.36728 g/cm^3

CELL_PARAMETERS (alat= 14.00000000)
  -0.364556379   0.000000000   0.364556379
   0.000000000   0.364556379   0.364556379
  -0.364556379   0.364556379   0.000000000

ATOMIC_POSITIONS (alat)
Si            0.0000000000        0.0000000000        0.0000000000    0   0   0
Si            0.1822781896        0.1822781896        0.1822781896    0   0   0
End final coordinates
```

Lattice constant = 0.364556379 * 14 / 0.5 = 10.2076 Bohr.

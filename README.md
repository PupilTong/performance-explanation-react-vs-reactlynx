# performance-explanation-react-vs-reactlynx

This case is to show the different performance assumption for React and ReactLynx.

In Lynx, we're targeting First Paint performance.

We create this case to emulate an internal real lynx card, which has a very simple skelton page and a complex effect stage.

For this case, our inhouse tests shows that the lighthouse's performance score is improved a lot.


CPU

```
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          46 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   32
  On-line CPU(s) list:    0-31
Vendor ID:                GenuineIntel
  Model name:             Intel(R) Core(TM) i9-14900K
    CPU family:           6
    Model:                183
    Thread(s) per core:   2
    Core(s) per socket:   24
    Socket(s):            1
    Stepping:             1
    CPU(s) scaling MHz:   22%
    CPU max MHz:          6000.0000
    CPU min MHz:          800.0000
    BogoMIPS:             6374.40
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon peb
                          s bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf tsc_known_freq pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16 xtpr pdcm sse4_1 sse4_2 x2apic movbe
                           popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb ssbd ibrs ibpb stibp ibrs_enhanced tpr_shadow flexpriority ept vpid ept_ad fsgsbase tsc
                          _adjust bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb intel_pt sha_ni xsaveopt xsavec xgetbv1 xsaves split_lock_detect user_shstk avx_vnni dtherm ida arat pln pts 
                          hwp hwp_notify hwp_act_window hwp_epp hwp_pkg_req hfi vnmi umip pku ospke waitpkg gfni vaes vpclmulqdq rdpid movdiri movdir64b fsrm md_clear serialize pconfig arch_lbr ibt flush_l1d 
                          arch_capabilities
Virtualisation features:  
  Virtualisation:         VT-x
Caches (sum of all):      
  L1d:                    896 KiB (24 instances)
  L1i:                    1.3 MiB (24 instances)
  L2:                     32 MiB (12 instances)
  L3:                     36 MiB (1 instance)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-31
```

OS

```
Linux linux 6.11.0-24-generic #24~24.04.1-Ubuntu SMP PREEMPT_DYNAMIC Tue Mar 25 20:14:34 UTC 2 x86_64 x86_64 x86_64 GNU/Linux
```

Chromium
```
Version 135.0.7049.84 (Official Build) snap (64-bit)
```

lighthouse score with x6 CPU slow down

* React
```
Metrics
First Contentful Paint
5.6 s
Largest Contentful Paint
5.6 s
Total Blocking Time
0 ms
Cumulative Layout Shift
0
Speed Index
5.6 s
```

* ReactLynx
```
First Contentful Paint
2.2 s
Largest Contentful Paint
2.2 s
Total Blocking Time
0 ms
Cumulative Layout Shift
0
Speed Index
1.9 s
```
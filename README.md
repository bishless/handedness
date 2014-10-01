# handedness.js

Wouldn't it be nice if documentation were written for both right AND left handers?

## Rough

1. write default mouse button orientation to cookie or localStorage (righthanded).
1. when ready, search for instances of ' click ' or 'left-click' and/or other strings that make sense. (note: ... this is harder than I expected.)
1. wrap those matches with '<span class="mb-primary">' and '</span>'.
1. then search for instances of 'right-click' (+others).
1. wrap those matches with '<span class="mb-secondary">' and '</span>'.
1. then, add two buttons near top of document
    1. button1 = Lefty
	1. button2 = Righty
1. if user clicks _Righty_, that orientation is already set, do nothing.
1. if user clicks _Lefty_, change the internal text of all instances of span.mb-primary to 'right-click'. Also change the internal text of all instances of span.mb-secondary to 'left-click'.

- possibly, add svg/iconfont via css :before to display a small icon next to each span?

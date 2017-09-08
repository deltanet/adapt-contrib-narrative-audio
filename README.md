# adapt-contrib-narrative-audio  

**Narrative** is a *presentation component* with optional audio.

**Narrative** displays items (or slides) that present an image and text side-by-side. Left and right navigation controls allow the learner to progress horizontally through the items. Optional text may precede it. Useful for detailing a sequential process. On mobile devices, the narrative text is collapsed above the image.

##Installation

Narrative must be nmanually installed.

## Settings Overview

The attributes listed below are used in *components.json* to configure **Narrative**, and are properly formatted as JSON in [*example.json*](https://github.com/deltanet/adapt-contrib-narrative-audio/blob/master/example.json).

### Attributes

[**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. [Read more](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes).

**_component** (string): This value must be: `narrative`.

**_classes** (string): CSS class name to be applied to **Narrative**’s containing div. The class must be predefined in one of the Less files. Separate multiple classes with a space.

**_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full`, `left` or `right`; however, `full` is typically the only option used as `left` or `right` do not allow much room for the component to display.

**instruction** (string): This optional text appears above the component. It is frequently used to guide the learner’s interaction with the component.   

**mobileInstruction** (string): This is optional instruction text that will be shown when viewed on mobile. It may be used to guide the learner’s interaction with the component.   

**_hasNavigationInTextArea** (boolean): Determines the location of the arrows (icons) used to navigate from slide to slide. Navigation can overlay the image or the text. Set to `true` to have the navigation controls appear in the text region.

**_setCompletionOn** (string): This value determines when the component registers as complete. Acceptable values are `"allItems"` and `"inview"`. `"allItems"` requires the learner to navigate to each slide. `"inview"` requires the **Narrative** component to enter the view port completely, top and bottom.

**_items** (array): Multiple items may be created. Each item represents one slide and contains values for the narrative (**title**, **body**), the image (**_graphic**), and the slide's header when viewed on a mobile device (**_strapLine**).

>**title** (string): This value is the title for this narrative element.

>**body** (string): This is the main text for this narrative element.

>**_graphic** (object): The image that appears next to the narrative text. It contains values for **src** and **alt**.

>>**src** (string): File name (including path) of the image. Path should be relative to the *src* folder (e.g.,*course/en/images/origami-menu-two.jpg*).

>>**alt** (string): This text becomes the image’s `alt` attribute.

>>**attribution** (string): Optional text to be displayed as an [attribution](https://wiki.creativecommons.org/Best_practices_for_attribution). By default it is displayed below the image. Adjust positioning by modifying CSS. Text can contain HTML tags, e.g., `Copyright © 2015 by <b>Lukasz 'Severiaan' Grela</b>`.

>**strapline** (string): This text is displayed as a title above the image when `Adapt.device.screenSize` is `small` (i.e., when viewed on mobile devices).  

### Accessibility  
**Narrative** has been assigned a label using the [aria-label](https://github.com/adaptlearning/adapt_framework/wiki/Aria-Labels) attribute: **ariaRegion**. This label is not a visible element. It is utilized by assistive technology such as screen readers. Should the region's text need to be customised, it can be found within the **globals** object in [*properties.schema*](https://github.com/deltanet/adapt-contrib-narrative-audio/blob/master/properties.schema).   
<div float align=right><a href="#top">Back to Top</a></div>

## Limitations

On mobile devices, the narrative text is collapsed above the image. It is accessed by clicking an icon (+) next the to strapline.

----------------------------
**Version number:**  2.0.12   
**Framework versions:** 2+  
**Author / maintainer:** Deltanet forked from [Adapt Core](https://github.com/adaptlearning/adapt-contrib-narrative)    
**Accessibility support:** WAI AA   
**RTL support:** yes  
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE9, IE8, IE Mobile 11, Safari iOS 9+10, Safari OS X 9+10, Opera

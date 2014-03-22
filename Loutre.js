/**
 * @author Louis Hatier
 */
var Loutre =
{
    // default options
    settings:
    {
        Anchors:
        {
            menuSelector: 'menu-anchors',
            activeClass: 'active'
        },
        ButtonGroup:
        {
            groupSelector: 'button-group',
            activeClass: 'active'
        }
    },

    // merge options
    init: function(options)
    {
        if (options) {
            $.each(options, function(key, value) {
                $.extend(Loutre.settings[key], value);
            });
        }

        this.Anchors.init();
        this.ButtonGroup.init();
    },

    // handle anchors for menu
    Anchors:
    {
        init: function()
        {
            this.handleAnchors();
            window.addEventListener('hashchange', this.handleAnchors, false);
        },

        handleAnchors: function()
        {
            var anchor = self.location.hash,
                settings = Loutre.settings.Anchors;

            $('.' + settings.menuSelector + ' a').each(function() {
                $(this).removeClass(settings.activeClass);
            });

            if ((typeof anchor != 'undefined') && (anchor != '')) {
                $('.' + settings.menuSelector + ' a[href="' + anchor + '"]').addClass(settings.activeClass);
            }
        }
    },

    // handle checkbox/radio group button
    ButtonGroup:
    {
        init: function()
        {
            this.handleButtonGroup();
            $('.' + Loutre.settings.ButtonGroup.groupSelector).on('change', 'input', function() {
                Loutre.ButtonGroup.handleButtonGroup();
            });
        },

        handleButtonGroup: function()
        {
            var settings = Loutre.settings.ButtonGroup;

            $('.' + settings.groupSelector + ' label').each(function() {
                if ($(this).find('input').is(':checked')) {
                    $(this).addClass(settings.activeClass);
                } else {
                    $(this).removeClass(settings.activeClass);
                }
            });
        }
    }
};

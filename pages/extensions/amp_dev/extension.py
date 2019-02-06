# -*- coding: utf-8 -*-
import os
import pkgutil
import sys

from grow import extensions
from grow.documents import document, document_format, static_document
from grow.extensions import hooks

from .markdown_extras import block_tip as BlockTip
from .markdown_extras import block_video as BlockVideo
from .markdown_extras import inline_tip as InlineTip


class AmpDevPreRenderHook(hooks.PreRenderHook):
    """Handle the post-render hook."""

    def should_trigger(self, previous_result, doc, original_body, *_args,
                       **_kwargs):
        # Only trigger for non-empty documents
        content = previous_result if previous_result else original_body
        if content is None:
            return False

        # Only trigger for MarkdownDocuments
        if not isinstance(doc.format, document_format.MarkdownDocumentFormat):
          return False

        return True

    def trigger(self, previous_result, doc, original_body, *_args, **_kwargs):
        content = previous_result if previous_result else original_body

        # Trigger for all markdown extensions
        content = InlineTip.trigger(original_body, content)
        content = BlockTip.trigger(original_body, content)
        content = BlockVideo.trigger(original_body, content)

        return content

class AmpDevExtension(extensions.BaseExtension):
    """Extends Grow with specifics for amp.dev."""

    def __init__(self, pod, config):
        super(AmpDevExtension, self).__init__(pod, config)

    @property
    def available_hooks(self):
        return [
            AmpDevPreRenderHook,
        ]
